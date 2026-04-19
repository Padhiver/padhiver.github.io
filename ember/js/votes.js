// ============================================================
//  EMBER — Gestion des votes (Supabase — données partagées)
// ============================================================

const SUPABASE_URL = "https://dfdhwulxpxqeutkxchkf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZGh3dWx4cHhxZXV0a3hjaGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5ODg0MjIsImV4cCI6MjA5MTU2NDQyMn0._hMu6WH86-EDEBz9Rr9Nn0OeGXVJSRibix44CnoqfPE";

const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  realtime: { params: { eventsPerSecond: 10 } }
});

// ── Identifiant anonyme ──────────────────────────────────────

function getVoterId() {
  let id = localStorage.getItem("ember_voter_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("ember_voter_id", id);
  }
  return id;
}

// ── Realtime ─────────────────────────────────────────────────
//
//  Supabase Realtime nécessite que les tables aient
//  la réplication activée :
//  Dashboard → Database → Replication → cocher "votes" et "custom_proposals"
//
//  Un debounce de 300 ms évite les rafales de re-renders.

function subscribeToVotes(onChangeCallback) {
  let debounceTimer = null;

  function debounced() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(onChangeCallback, 300);
  }

  const channel = _sb.channel("ember-realtime", {
    config: { broadcast: { self: false } }
  });

  channel
    .on("postgres_changes",
      { event: "*", schema: "public", table: "votes" },
      debounced
    )
    .on("postgres_changes",
      { event: "*", schema: "public", table: "custom_proposals" },
      debounced
    )
    .subscribe(status => {
      const dot = document.getElementById("realtime-dot");
      if (!dot) return;
      if (status === "SUBSCRIBED") {
        dot.title = "Temps réel actif";
        dot.classList.add("connected");
      } else {
        dot.title = "Connexion temps réel…";
        dot.classList.remove("connected");
      }
    });

  return channel;
}

// ── Chargement groupé depuis Supabase ────────────────────────

async function loadAllData() {
  const voterId = getVoterId();

  const [votesRes, customRes, myVotesRes] = await Promise.all([
    _sb.from("votes").select("term_id, proposal_text"),
    _sb.from("custom_proposals").select("term_id, text").order("created_at"),
    _sb.from("votes").select("term_id, proposal_text").eq("voter_id", voterId)
  ]);

  if (votesRes.error)   throw votesRes.error;
  if (customRes.error)  throw customRes.error;
  if (myVotesRes.error) throw myVotesRes.error;

  const voteCounts = {};
  (votesRes.data || []).forEach(row => {
    if (!voteCounts[row.term_id]) voteCounts[row.term_id] = {};
    const key = row.proposal_text;
    voteCounts[row.term_id][key] = (voteCounts[row.term_id][key] || 0) + 1;
  });

  const custom = {};
  (customRes.data || []).forEach(row => {
    if (!custom[row.term_id]) custom[row.term_id] = [];
    custom[row.term_id].push(row.text);
  });

  const myVotes = {};
  (myVotesRes.data || []).forEach(row => {
    myVotes[row.term_id] = row.proposal_text;
  });

  return { voteCounts, custom, myVotes };
}

// ── Construction des termes enrichis ─────────────────────────

function buildTermsWithData({ voteCounts, custom, myVotes }) {
  return EMBER_TERMS.map(term => {
    const termVotes  = voteCounts[term.id] || {};
    const termCustom = custom[term.id]     || [];
    const myVote     = myVotes[term.id];

    const allProposals = [...term.proposals, ...termCustom];
    const proposals = allProposals.map((text, idx) => ({
      text,
      votes:    termVotes[text] || 0,
      isCustom: idx >= term.proposals.length,
      voted:    myVote === text
    }));

    return { ...term, proposals };
  });
}

// ── Vote ──────────────────────────────────────────────────────

async function castVote(termId, proposalText) {
  const voterId = getVoterId();

  const { data: existing } = await _sb.from("votes")
    .select("proposal_text")
    .eq("term_id", termId)
    .eq("voter_id", voterId)
    .maybeSingle();

  if (existing?.proposal_text === proposalText) {
    await _sb.from("votes")
      .delete()
      .eq("term_id", termId)
      .eq("voter_id", voterId);
  } else {
    await _sb.from("votes").upsert(
      { term_id: termId, proposal_text: proposalText, voter_id: voterId },
      { onConflict: "term_id,voter_id" }
    );
  }
}

// ── Ajout d'une proposition personnalisée ────────────────────

async function addCustomProposal(termId, text) {
  text = text.trim();
  if (!text) return { ok: false, reason: "empty" };

  const term = EMBER_TERMS.find(t => t.id === termId);
  if (!term) return { ok: false, reason: "unknown" };

  const { error } = await _sb.from("custom_proposals")
    .insert({ term_id: termId, text });

  if (error) return { ok: false, reason: "duplicate" };
  return { ok: true };
}

// ── Stats ─────────────────────────────────────────────────────

function getStats(terms, myVotes) {
  const totalVotes  = terms.reduce(
    (sum, t) => sum + t.proposals.reduce((s, p) => s + p.votes, 0), 0
  );
  const myVoteCount = Object.keys(myVotes).length;
  const decided     = terms.filter(t => {
    const sorted = [...t.proposals].sort((a, b) => b.votes - a.votes);
    return sorted[0]?.votes > 0 && sorted[0].votes !== (sorted[1]?.votes || 0);
  }).length;

  return { total: terms.length, totalVotes, myVoteCount, decided };
}
