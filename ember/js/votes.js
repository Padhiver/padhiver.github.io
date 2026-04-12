// ============================================================
//  EMBER — Gestion des votes (Supabase — données partagées)
//
//  Remplacez VOTRE_URL et VOTRE_CLE_ANON par les valeurs
//  trouvées dans : Supabase > Project Settings > API
// ============================================================

const SUPABASE_URL = "https://dfdhwulxpxqeutkxchkf.supabase.co";
const SUPABASE_KEY = "sb_publishable_2OXwiX_8yF51cdXtphmyrg_w22Re4JG";

const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Identifiant anonyme (stocké dans ce navigateur) ─────────

function getVoterId() {
  let id = localStorage.getItem("ember_voter_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("ember_voter_id", id);
  }
  return id;
}

// ── Chargement groupé depuis Supabase ───────────────────────

async function loadAllData() {
  const voterId = getVoterId();

  const [votesRes, customRes, myVotesRes] = await Promise.all([
    _sb.from("votes").select("term_id, proposal_text"),
    _sb.from("custom_proposals").select("term_id, text").order("created_at"),
    _sb.from("votes").select("term_id, proposal_text").eq("voter_id", voterId)
  ]);

  // Comptage des votes par (term_id, proposal_text)
  const voteCounts = {};
  (votesRes.data || []).forEach(row => {
    if (!voteCounts[row.term_id]) voteCounts[row.term_id] = {};
    const key = row.proposal_text;
    voteCounts[row.term_id][key] = (voteCounts[row.term_id][key] || 0) + 1;
  });

  // Propositions personnalisées par term_id
  const custom = {};
  (customRes.data || []).forEach(row => {
    if (!custom[row.term_id]) custom[row.term_id] = [];
    custom[row.term_id].push(row.text);
  });

  // Votes de ce visiteur : term_id → proposal_text
  const myVotes = {};
  (myVotesRes.data || []).forEach(row => {
    myVotes[row.term_id] = row.proposal_text;
  });

  return { voteCounts, custom, myVotes };
}

// ── Construction des termes enrichis ────────────────────────

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

// ── Vote ─────────────────────────────────────────────────────

async function castVote(termId, proposalText) {
  const voterId = getVoterId();

  // Vérifier si ce visiteur a déjà un vote sur ce terme
  const { data: existing } = await _sb.from("votes")
    .select("proposal_text")
    .eq("term_id", termId)
    .eq("voter_id", voterId)
    .maybeSingle();

  if (existing?.proposal_text === proposalText) {
    // Même proposition → on retire le vote (toggle)
    await _sb.from("votes")
      .delete()
      .eq("term_id", termId)
      .eq("voter_id", voterId);
  } else {
    // Nouvelle proposition ou changement de vote → upsert
    await _sb.from("votes").upsert(
      { term_id: termId, proposal_text: proposalText, voter_id: voterId },
      { onConflict: "term_id,voter_id" }
    );
  }
}

// ── Ajout d'une proposition personnalisée ───────────────────

async function addCustomProposal(termId, text) {
  text = text.trim();
  if (!text) return { ok: false, reason: "empty" };

  const term = EMBER_TERMS.find(t => t.id === termId);
  if (!term) return { ok: false, reason: "unknown" };

  const { error } = await _sb.from("custom_proposals")
    .insert({ term_id: termId, text });

  // L'erreur UNIQUE viole → doublon
  if (error) return { ok: false, reason: "duplicate" };
  return { ok: true };
}

// ── Stats ────────────────────────────────────────────────────

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
