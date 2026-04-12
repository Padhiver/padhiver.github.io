// ============================================================
//  EMBER — Gestion des votes
//  Stockage dans localStorage (clé "ember_votes")
//  Format : { termId: { proposalIndex: voteCount, ... }, ... }
//  Votes perso : "ember_my_votes" { "termId_propIdx": true }
// ============================================================

const STORAGE_VOTES_KEY   = "ember_votes";
const STORAGE_MYVOTES_KEY = "ember_my_votes";
const STORAGE_CUSTOM_KEY  = "ember_custom";

// ── Lecture / écriture ──────────────────────────────────────

function loadVotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_VOTES_KEY)) || {};
  } catch(e) { return {}; }
}

function saveVotes(votes) {
  localStorage.setItem(STORAGE_VOTES_KEY, JSON.stringify(votes));
}

function loadMyVotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_MYVOTES_KEY)) || {};
  } catch(e) { return {}; }
}

function saveMyVotes(myVotes) {
  localStorage.setItem(STORAGE_MYVOTES_KEY, JSON.stringify(myVotes));
}

// Propositions personnalisées ajoutées par les visiteurs
function loadCustomProposals() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CUSTOM_KEY)) || {};
  } catch(e) { return {}; }
}

function saveCustomProposals(custom) {
  localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(custom));
}

// ── Fusion données + votes ──────────────────────────────────

function buildTermsWithVotes() {
  const votes   = loadVotes();
  const custom  = loadCustomProposals();

  return EMBER_TERMS.map(term => {
    const termVotes  = votes[term.id]   || {};
    const termCustom = custom[term.id]  || [];

    const allProposals = [...term.proposals, ...termCustom];

    const proposals = allProposals.map((text, idx) => ({
      text,
      votes:    termVotes[idx] || 0,
      isCustom: idx >= term.proposals.length
    }));

    return { ...term, proposals };
  });
}

// ── Actions utilisateur ─────────────────────────────────────

function castVote(termId, propIdx) {
  const votes   = loadVotes();
  const myVotes = loadMyVotes();

  if (!votes[termId])   votes[termId]   = {};

  const key = `${termId}_${propIdx}`;

  // Trouver le vote précédent sur ce terme
  const previousKey = Object.keys(myVotes).find(k => k.startsWith(termId + "_") && myVotes[k]);

  if (previousKey && previousKey !== key) {
    // Retirer l'ancien vote
    const prevIdx = parseInt(previousKey.split("_").slice(-1)[0]);
    if (votes[termId][prevIdx] > 0) votes[termId][prevIdx]--;
    delete myVotes[previousKey];
  }

  if (myVotes[key]) {
    // Déjà voté → on retire
    if (votes[termId][propIdx] > 0) votes[termId][propIdx]--;
    delete myVotes[key];
  } else {
    // Nouveau vote
    votes[termId][propIdx] = (votes[termId][propIdx] || 0) + 1;
    myVotes[key] = true;
  }

  saveVotes(votes);
  saveMyVotes(myVotes);
}

function addCustomProposal(termId, text) {
  text = text.trim();
  if (!text) return false;

  const custom   = loadCustomProposals();
  const votes    = loadVotes();
  const existing = EMBER_TERMS.find(t => t.id === termId);
  if (!existing) return false;

  const allProposals = [...existing.proposals, ...(custom[termId] || [])];
  if (allProposals.some(p => p.toLowerCase() === text.toLowerCase())) return false;

  if (!custom[termId]) custom[termId] = [];
  custom[termId].push(text);
  saveCustomProposals(custom);
  return true;
}

function hasVoted(termId, propIdx) {
  const myVotes = loadMyVotes();
  return !!myVotes[`${termId}_${propIdx}`];
}

// ── Export / Import ─────────────────────────────────────────

function exportData() {
  const data = {
    votes:   loadVotes(),
    custom:  loadCustomProposals(),
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "ember-votes.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importData(jsonText) {
  try {
    const data = JSON.parse(jsonText);
    if (data.votes)  saveVotes(data.votes);
    if (data.custom) saveCustomProposals(data.custom);
    return true;
  } catch(e) {
    alert("Fichier invalide.");
    return false;
  }
}

// ── Stats rapides ───────────────────────────────────────────

function getStats() {
  const terms   = buildTermsWithVotes();
  const myVotes = loadMyVotes();

  const totalVotes   = terms.reduce((sum, t) => sum + t.proposals.reduce((s, p) => s + p.votes, 0), 0);
  const myVoteCount  = Object.values(myVotes).filter(Boolean).length;
  const decided      = terms.filter(t => {
    const sorted = [...t.proposals].sort((a, b) => b.votes - a.votes);
    return sorted[0]?.votes > 0 && sorted[0].votes !== sorted[1]?.votes;
  }).length;

  return { total: terms.length, totalVotes, myVoteCount, decided };
}
