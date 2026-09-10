/* =========================================================
   L'Après-Monde — Rédacteur de fiche.
   Éditeur de texte enrichi (TipTap) pour rédiger le corps
   d'une fiche sans connaître le HTML. Le rédacteur remplit,
   télécharge un fichier .json, et le transmet à Padhiver qui
   intègre la fiche au codex.

   TipTap est chargé depuis esm.sh via l'import map de
   redacteur.html : la page a besoin d'Internet au premier
   chargement (ensuite le cache navigateur suffit).
   ========================================================= */

const DRAFT_KEY = "eana_redacteur_draft";

const el = (id) => document.getElementById(id);

const elTitle = el("f-title");
const elKicker = el("f-kicker");
const elCategory = el("f-category");
const elToolbar = el("toolbar");
const elHost = el("editor");
const elExportState = el("export-state");
const elCodePreview = el("code-preview");
const elDraftNotice = el("draft-notice");

let editor = null;

// ---------- Utilitaires ----------

function slugify(s) {
  const base = (s || "")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "fiche";
}

// TipTap enveloppe le contenu d'une puce dans un <p> (<li><p>texte</p></li>).
// Pour une puce d'une seule ligne — le seul cas que la barre d'outils permet
// de produire — on retire ce <p> pour un HTML plus simple à relire. Les
// puces à plusieurs blocs ou à sous-liste (après un </p> vient autre chose
// que </li>) ne correspondent pas au motif et sont laissées intactes.
function unwrapSimpleListItems(html) {
  return html.replace(
    /<li>\s*<p>((?:(?!<\/p>|<(?:p|ul|ol|li|h[1-6]|blockquote)\b)[\s\S])*?)<\/p>\s*<\/li>/g,
    "<li>$1</li>",
  );
}

// getHTML() de TipTap est déjà propre (schéma restreint) ; on retire les
// paragraphes vides en tête / en queue et on simplifie les puces.
function cleanBodyHtml() {
  return unwrapSimpleListItems(editor.getHTML())
    .replace(/^(?:<p><\/p>)+/, "")
    .replace(/(?:<p><\/p>)+$/, "")
    .trim();
}

// Retour à la ligne avant chaque bloc — lisibilité de l'aperçu uniquement,
// la valeur stockée dans le .json reste compacte.
function prettyForPreview(html) {
  return html.replace(/>(?=<(?:p|h3|h4|ul|ol|li|blockquote|hr)\b)/g, ">\n");
}

function isBodyEmpty() {
  return editor.isEmpty || cleanBodyHtml() === "";
}

function buildFiche() {
  return {
    title: elTitle.value.trim(),
    kicker: elKicker.value.trim(),
    category: elCategory.value,
    pages: [
      { caption: "", html: cleanBodyHtml() },
    ],
  };
}

function flash(message, isError) {
  elExportState.textContent = message;
  elExportState.style.color = isError ? "#a4342a" : "#3c5a52";
  if (!isError) {
    clearTimeout(flash._t);
    flash._t = setTimeout(() => { elExportState.textContent = ""; }, 4000);
  }
}

// ---------- Brouillon ----------

let draftTimer = null;
function scheduleDraftSave() {
  clearTimeout(draftTimer);
  draftTimer = setTimeout(saveDraft, 600);
}

function saveDraft() {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify({
      title: elTitle.value,
      kicker: elKicker.value,
      category: elCategory.value,
      html: editor.getHTML(),
      at: Date.now(),
    }));
  } catch (e) { /* stockage indisponible : tant pis pour le brouillon */ }
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
}

function readDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    const meaningful = (d.title && d.title.trim()) ||
      (d.html && d.html.replace(/<[^>]*>/g, "").trim());
    return meaningful ? d : null;
  } catch (e) { return null; }
}

// ---------- Barre d'outils ----------

function setLink() {
  const prev = editor.getAttributes("link").href || "";
  const url = window.prompt("Adresse du lien (laisser vide pour retirer) :", prev);
  if (url === null) return;
  const trimmed = url.trim();
  if (trimmed === "") {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    return;
  }
  editor.chain().focus().extendMarkRange("link").setLink({ href: trimmed }).run();
}

const TOOLBAR = [
  { key: "undo", label: "↶", title: "Annuler",
    run: (e) => e.chain().focus().undo().run(),
    enabled: (e) => e.can().undo() },
  { key: "redo", label: "↷", title: "Rétablir",
    run: (e) => e.chain().focus().redo().run(),
    enabled: (e) => e.can().redo() },
  "sep",
  { key: "bold", label: "G", cls: "tb-b", title: "Gras (Ctrl+B)",
    run: (e) => e.chain().focus().toggleBold().run(),
    active: (e) => e.isActive("bold") },
  { key: "italic", label: "I", cls: "tb-i", title: "Italique (Ctrl+I)",
    run: (e) => e.chain().focus().toggleItalic().run(),
    active: (e) => e.isActive("italic") },
  "sep",
  { key: "h3", label: "Titre", cls: "tb-h", title: "Titre de section",
    run: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
    active: (e) => e.isActive("heading", { level: 3 }) },
  { key: "h4", label: "Sous-titre", cls: "tb-h", title: "Sous-titre",
    run: (e) => e.chain().focus().toggleHeading({ level: 4 }).run(),
    active: (e) => e.isActive("heading", { level: 4 }) },
  "sep",
  { key: "ul", label: "• Liste", title: "Liste à puces",
    run: (e) => e.chain().focus().toggleBulletList().run(),
    active: (e) => e.isActive("bulletList") },
  { key: "ol", label: "1. Liste", title: "Liste numérotée",
    run: (e) => e.chain().focus().toggleOrderedList().run(),
    active: (e) => e.isActive("orderedList") },
  "sep",
  { key: "quote", label: "“ ”", title: "Citation",
    run: (e) => e.chain().focus().toggleBlockquote().run(),
    active: (e) => e.isActive("blockquote") },
  { key: "hr", label: "―", title: "Séparateur",
    run: (e) => e.chain().focus().setHorizontalRule().run() },
  "sep",
  { key: "link", label: "🔗", title: "Lien",
    run: () => setLink(),
    active: (e) => e.isActive("link") },
  { key: "unlink", label: "⛓", title: "Retirer le lien",
    run: (e) => e.chain().focus().extendMarkRange("link").unsetLink().run(),
    enabled: (e) => e.isActive("link") },
  "sep",
  { key: "clear", label: "Effacer format", title: "Effacer la mise en forme",
    run: (e) => e.chain().focus().unsetAllMarks().clearNodes().run() },
];

function buildToolbar() {
  for (const item of TOOLBAR) {
    if (item === "sep") {
      const s = document.createElement("span");
      s.className = "sep";
      elToolbar.appendChild(s);
      continue;
    }
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.key = item.key;
    b.title = item.title;
    b.setAttribute("aria-label", item.title);
    b.innerHTML = `<span class="lbl ${item.cls || ""}">${item.label}</span>`;
    b.addEventListener("click", () => { item.run(editor); refreshToolbar(); });
    elToolbar.appendChild(b);
  }
}

function refreshToolbar() {
  for (const item of TOOLBAR) {
    if (item === "sep") continue;
    const b = elToolbar.querySelector(`button[data-key="${item.key}"]`);
    if (!b) continue;
    if (item.active) b.classList.toggle("is-active", !!item.active(editor));
    if (item.enabled) b.disabled = !item.enabled(editor);
  }
}

// ---------- Aperçu du code ----------

function refreshCodePreview() {
  const html = cleanBodyHtml();
  elCodePreview.textContent = html ? prettyForPreview(html) : "(vide)";
}

// ---------- Export ----------

function validate() {
  if (!elTitle.value.trim()) {
    flash("Il manque le titre de la fiche.", true);
    elTitle.focus();
    return false;
  }
  if (isBodyEmpty()) {
    flash("Le corps de la fiche est vide.", true);
    editor.chain().focus().run();
    return false;
  }
  return true;
}

function downloadFiche() {
  if (!validate()) return;
  const fiche = buildFiche();
  const name = slugify(fiche.title) + ".json";
  const blob = new Blob([JSON.stringify(fiche, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  flash("Fichier « " + name + " » téléchargé.");
}

async function copyHtml() {
  if (isBodyEmpty()) { flash("Rien à copier : le corps est vide.", true); return; }
  const html = cleanBodyHtml();
  try {
    await navigator.clipboard.writeText(html);
    flash("HTML copié dans le presse-papier.");
  } catch (e) {
    // Repli : sélection manuelle via l'aperçu déplié.
    el("code-details").open = true;
    refreshCodePreview();
    flash("Copie auto refusée par le navigateur — le code est affiché ci-dessous.", true);
  }
}

function resetAll() {
  if (!window.confirm("Tout effacer et repartir d'une fiche vierge ?")) return;
  elTitle.value = "";
  elKicker.value = "";
  elCategory.selectedIndex = 0;
  editor.commands.clearContent(true);
  clearDraft();
  elDraftNotice.hidden = true;
  refreshToolbar();
  refreshCodePreview();
  flash("Fiche réinitialisée.");
  elTitle.focus();
}

// ---------- Démarrage ----------

async function main() {
  let Editor, StarterKit, Link, Placeholder;
  try {
    ({ Editor } = await import("@tiptap/core"));
    StarterKit = (await import("@tiptap/starter-kit")).default;
    Link = (await import("@tiptap/extension-link")).default;
    Placeholder = (await import("@tiptap/extension-placeholder")).default;
  } catch (err) {
    console.error("[redacteur] chargement de TipTap impossible :", err);
    el("load-error").hidden = false;
    return;
  }

  const draft = readDraft();

  editor = new Editor({
    element: elHost,
    extensions: [
      StarterKit.configure({
        heading: { levels: [3, 4] },
        codeBlock: false,
      }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({
        placeholder: "Commence à écrire le corps de la fiche…",
      }),
    ],
    content: draft ? draft.html : "",
    autofocus: false,
  });

  editor.on("update", () => {
    refreshToolbar();
    refreshCodePreview();
    scheduleDraftSave();
  });
  editor.on("selectionUpdate", refreshToolbar);

  buildToolbar();
  refreshToolbar();
  refreshCodePreview();

  // Restauration du brouillon
  if (draft) {
    elTitle.value = draft.title || "";
    elKicker.value = draft.kicker || "";
    if (draft.category) elCategory.value = draft.category;
    const when = new Date(draft.at || Date.now());
    el("draft-when").textContent = when.toLocaleString("fr-FR", {
      dateStyle: "short", timeStyle: "short",
    });
    elDraftNotice.hidden = false;
  }

  [elTitle, elKicker, elCategory].forEach((f) => {
    f.addEventListener("input", scheduleDraftSave);
  });

  el("btn-download").addEventListener("click", downloadFiche);
  el("btn-copy").addEventListener("click", copyHtml);
  el("btn-reset").addEventListener("click", resetAll);
  el("draft-discard").addEventListener("click", () => {
    clearDraft();
    editor.commands.clearContent(true);
    elTitle.value = "";
    elKicker.value = "";
    elCategory.selectedIndex = 0;
    elDraftNotice.hidden = true;
    refreshToolbar();
    refreshCodePreview();
  });

  window.addEventListener("beforeunload", saveDraft);

  // Accès à l'éditeur en préversion locale, pour les tests manuels.
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    window.__redacteur = { editor, buildFiche, cleanBodyHtml };
  }
}

main();
