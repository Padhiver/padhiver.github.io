/* =========================================================
   L'Après-Monde — Rédacteur de fiche.
   Éditeur de texte enrichi (TipTap) pour rédiger une fiche
   sans connaître le HTML. Le rédacteur remplit, télécharge
   un fichier .json, et le transmet à Padhiver qui l'intègre
   au codex.

   Le .json produit a EXACTEMENT la structure des fiches du
   site (id, title, category, public, date, order, pages[],
   related, relatedOff) ; chaque page est { html, caption,
   public } — le corps est du HTML mis en forme.

   TipTap est chargé depuis esm.sh via l'import map de
   redacteur.html : la page a besoin d'Internet au premier
   chargement (ensuite le cache navigateur suffit).
   ========================================================= */

const DRAFT_KEY = "eana_redacteur_draft";

const el = (id) => document.getElementById(id);

const elId = el("f-id");
const elTitle = el("f-title");
const elCategory = el("f-category");
const elToolbar = el("toolbar");
const elPages = el("pages");
const elBtnAddPage = el("btn-add-page");
const elExportState = el("export-state");
const elCodePreview = el("code-preview");
const elDraftNotice = el("draft-notice");

// Fabriques d'extensions TipTap, renseignées au démarrage.
let mkEditor = null;

// pages : [{ key, captionEl, editorHost, editor }]
const pages = [];
let pageSeq = 0;
let activeEditor = null;
let idDirty = false;

// ---------- Utilitaires ----------

function slugify(s) {
  const base = (s || "")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "fiche";
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

// TipTap enveloppe le contenu d'une puce dans un <p> (<li><p>x</p></li>).
// Pour une puce d'une seule ligne — seul cas que la barre d'outils permet —
// on retire ce <p>. Les puces à plusieurs blocs / sous-liste ne collent pas
// au motif et restent intactes.
function unwrapSimpleListItems(html) {
  return html.replace(
    /<li>\s*<p>((?:(?!<\/p>|<(?:p|ul|ol|li|h[1-6]|blockquote)\b)[\s\S])*?)<\/p>\s*<\/li>/g,
    "<li>$1</li>",
  );
}

// getHTML() de TipTap est déjà propre (schéma restreint) : on retire les
// paragraphes vides (y compris au milieu) et on simplifie les puces.
function cleanHtml(raw) {
  return unwrapSimpleListItems(raw)
    .replace(/<p><\/p>/g, "")
    .trim();
}

function flash(message, isError) {
  elExportState.textContent = message;
  elExportState.style.color = isError ? "#a4342a" : "#3c5a52";
  if (!isError) {
    clearTimeout(flash._t);
    flash._t = setTimeout(() => { elExportState.textContent = ""; }, 4000);
  }
}

// ---------- Construction de la fiche ----------

function buildFiche() {
  const id = slugify(elId.value || elTitle.value);
  return {
    id,
    title: elTitle.value.trim(),
    category: elCategory.value,
    public: "ON",
    date: today(),
    order: null,
    pages: pages.map((p) => ({
      html: cleanHtml(p.editor.getHTML()),
      caption: p.captionEl.value.trim(),
      public: "ON",
    })),
    related: [],
    relatedOff: [],
  };
}

function anyContent() {
  return pages.some((p) => !p.editor.isEmpty);
}

// ---------- Pages ----------

function renumberPages() {
  pages.forEach((p, i) => {
    p.panel.querySelector(".page-num").textContent = "Page " + (i + 1);
    p.panel.querySelector("[data-page-up]").disabled = i === 0;
    p.panel.querySelector("[data-page-down]").disabled = i === pages.length - 1;
    p.panel.querySelector("[data-page-del]").disabled = pages.length === 1;
  });
  elPages.classList.toggle("single", pages.length === 1);
}

function makePagePanel() {
  const key = ++pageSeq;
  const panel = document.createElement("div");
  panel.className = "page-panel";
  panel.dataset.pageKey = String(key);
  panel.innerHTML = `
    <div class="page-head">
      <span class="page-num">Page</span>
      <input type="text" class="page-caption" autocomplete="off"
             placeholder="Titre de ce chapitre (facultatif — utile seulement s'il y a plusieurs pages)">
      <span class="page-ctl">
        <button type="button" data-page-up title="Monter">↑</button>
        <button type="button" data-page-down title="Descendre">↓</button>
        <button type="button" data-page-del title="Supprimer cette page">Supprimer</button>
      </span>
    </div>
    <div class="page-editor"></div>`;

  const captionEl = panel.querySelector(".page-caption");
  const editorHost = panel.querySelector(".page-editor");
  const editor = mkEditor(editorHost);

  const entry = { key, panel, captionEl, editorHost, editor };

  // Toute interaction (saisie, déplacement du curseur, focus) fait de cet
  // éditeur la cible de la barre d'outils partagée.
  editor.on("update", () => {
    activeEditor = editor;
    refreshToolbar();
    refreshCodePreview();
    scheduleDraftSave();
  });
  editor.on("selectionUpdate", () => { activeEditor = editor; refreshToolbar(); });
  editor.on("focus", () => { activeEditor = editor; refreshToolbar(); });
  captionEl.addEventListener("input", scheduleDraftSave);

  panel.querySelector("[data-page-up]").addEventListener("click", () => movePage(entry, -1));
  panel.querySelector("[data-page-down]").addEventListener("click", () => movePage(entry, 1));
  panel.querySelector("[data-page-del]").addEventListener("click", () => removePage(entry));

  return entry;
}

function addPage(opts = {}) {
  const entry = makePagePanel();
  pages.push(entry);
  elPages.appendChild(entry.panel);
  if (opts.caption) entry.captionEl.value = opts.caption;
  if (opts.html) entry.editor.commands.setContent(opts.html, false);
  renumberPages();
  refreshCodePreview();
  if (opts.focus) entry.editor.commands.focus("end");
  return entry;
}

function removePage(entry) {
  if (pages.length === 1) return;
  if (!entry.editor.isEmpty &&
      !window.confirm("Supprimer cette page et son contenu ?")) return;
  const idx = pages.indexOf(entry);
  entry.editor.destroy();
  entry.panel.remove();
  pages.splice(idx, 1);
  if (activeEditor && !pages.some((p) => p.editor === activeEditor)) {
    activeEditor = pages[Math.min(idx, pages.length - 1)].editor;
  }
  renumberPages();
  refreshToolbar();
  refreshCodePreview();
  scheduleDraftSave();
}

function movePage(entry, dir) {
  const idx = pages.indexOf(entry);
  const to = idx + dir;
  if (to < 0 || to >= pages.length) return;
  pages.splice(idx, 1);
  pages.splice(to, 0, entry);
  pages.forEach((p) => elPages.appendChild(p.panel)); // appendChild déplace un nœud déjà présent
  renumberPages();
  refreshCodePreview();
  scheduleDraftSave();
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
      id: elId.value,
      title: elTitle.value,
      category: elCategory.value,
      pages: pages.map((p) => ({ caption: p.captionEl.value, html: p.editor.getHTML() })),
      at: Date.now(),
    }));
  } catch (e) { /* stockage indisponible */ }
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
}

function readDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    const hasText = (d.title && d.title.trim()) ||
      (Array.isArray(d.pages) && d.pages.some((p) => p.html && p.html.replace(/<[^>]*>/g, "").trim()));
    return hasText ? d : null;
  } catch (e) { return null; }
}

// ---------- Barre d'outils ----------

function setLink() {
  if (!activeEditor) return;
  const prev = activeEditor.getAttributes("link").href || "";
  const url = window.prompt("Adresse du lien (laisser vide pour retirer) :", prev);
  if (url === null) return;
  const trimmed = url.trim();
  if (trimmed === "") {
    activeEditor.chain().focus().extendMarkRange("link").unsetLink().run();
    return;
  }
  activeEditor.chain().focus().extendMarkRange("link").setLink({ href: trimmed }).run();
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
  // Empêche la perte de focus de l'éditeur quand on clique un bouton.
  elToolbar.addEventListener("mousedown", (e) => e.preventDefault());
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
    b.addEventListener("click", () => {
      if (!activeEditor) return;
      item.run(activeEditor);
      refreshToolbar();
    });
    elToolbar.appendChild(b);
  }
}

function refreshToolbar() {
  const e = activeEditor;
  for (const item of TOOLBAR) {
    if (item === "sep") continue;
    const b = elToolbar.querySelector(`button[data-key="${item.key}"]`);
    if (!b) continue;
    if (!e) { b.disabled = true; b.classList.remove("is-active"); continue; }
    if (item.active) b.classList.toggle("is-active", !!item.active(e));
    if (item.enabled) b.disabled = !item.enabled(e);
    else if (!item.active) b.disabled = false;
  }
}

// ---------- Aperçu du code ----------

function refreshCodePreview() {
  elCodePreview.textContent = JSON.stringify(buildFiche(), null, 2);
}

// ---------- Export ----------

function validate() {
  if (!elTitle.value.trim()) {
    flash("Il manque le titre de la fiche.", true);
    elTitle.focus();
    return false;
  }
  if (!elId.value.trim()) {
    flash("Il manque l'identifiant de la fiche.", true);
    elId.focus();
    return false;
  }
  if (!anyContent()) {
    flash("Le corps de la fiche est vide.", true);
    if (pages[0]) pages[0].editor.commands.focus();
    return false;
  }
  return true;
}

function downloadFiche() {
  if (!validate()) return;
  const fiche = buildFiche();
  const name = fiche.id + ".json";
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

async function copyJson() {
  if (!validate()) return;
  const txt = JSON.stringify(buildFiche(), null, 2) + "\n";
  try {
    await navigator.clipboard.writeText(txt);
    flash("Fiche copiée dans le presse-papier.");
  } catch (e) {
    el("code-details").open = true;
    flash("Copie auto refusée par le navigateur — le code est affiché ci-dessous.", true);
  }
}

// ---------- Aperçu ----------
// Une iframe (outils/apercu.html) charge le rendu et le CSS du codex et
// affiche la fiche en cours exactement comme sur le site. On lui pousse les
// données par postMessage ; elle répond "ready" puis "close".

let previewReady = false;
let pendingPreview = null;

function openPreview() {
  if (!anyContent()) {
    flash("Rien à prévisualiser : le corps de la fiche est vide.", true);
    return;
  }
  const fiche = buildFiche();
  if (!fiche.title) fiche.title = "Sans titre";

  el("preview-modal").hidden = false;
  document.body.style.overflow = "hidden";

  const frame = el("preview-frame");
  if (!frame.getAttribute("src")) frame.setAttribute("src", "apercu.html");

  const msg = { source: "eana-redacteur", type: "preview", fiche };
  if (previewReady) frame.contentWindow.postMessage(msg, "*");
  else pendingPreview = msg;
}

function closePreview() {
  el("preview-modal").hidden = true;
  document.body.style.overflow = "";
}

window.addEventListener("message", (e) => {
  if (e.origin !== window.location.origin && e.origin !== "null") return;
  const d = e.data;
  if (!d || d.source !== "eana-apercu") return;
  if (d.type === "ready") {
    previewReady = true;
    if (pendingPreview) {
      el("preview-frame").contentWindow.postMessage(pendingPreview, "*");
      pendingPreview = null;
    }
  } else if (d.type === "close") {
    closePreview();
  }
});

function resetAll() {
  if (!window.confirm("Tout effacer et repartir d'une fiche vierge ?")) return;
  elId.value = "";
  elTitle.value = "";
  elCategory.selectedIndex = 0;
  idDirty = false;
  pages.slice().forEach((p) => { p.editor.destroy(); p.panel.remove(); });
  pages.length = 0;
  activeEditor = null;
  addPage();
  activeEditor = pages[0].editor;
  clearDraft();
  elDraftNotice.hidden = true;
  refreshToolbar();
  refreshCodePreview();
  flash("Fiche réinitialisée.");
  elTitle.focus();
}

// ---------- Identifiant ----------

function syncIdFromTitle() {
  if (idDirty) return;
  elId.value = slugify(elTitle.value);
  refreshCodePreview();
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

  mkEditor = (host) => new Editor({
    element: host,
    extensions: [
      StarterKit.configure({ heading: { levels: [3, 4] }, codeBlock: false }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: "Écris le corps de la page ici…" }),
    ],
    content: "",
    autofocus: false,
  });

  buildToolbar();

  const draft = readDraft();
  if (draft && Array.isArray(draft.pages) && draft.pages.length) {
    draft.pages.forEach((p) => addPage({ caption: p.caption, html: p.html }));
  } else {
    addPage();
  }
  activeEditor = pages[0].editor;
  refreshToolbar();
  refreshCodePreview();

  if (draft) {
    elId.value = draft.id || "";
    elTitle.value = draft.title || "";
    if (draft.category) elCategory.value = draft.category;
    idDirty = !!(draft.id && draft.id !== slugify(draft.title || ""));
    const when = new Date(draft.at || Date.now());
    el("draft-when").textContent = when.toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
    elDraftNotice.hidden = false;
  }

  elTitle.addEventListener("input", () => { syncIdFromTitle(); scheduleDraftSave(); });
  elId.addEventListener("input", () => {
    idDirty = elId.value.trim() !== "";
    refreshCodePreview();
    scheduleDraftSave();
  });
  elId.addEventListener("blur", () => {
    if (elId.value.trim()) { elId.value = slugify(elId.value); refreshCodePreview(); }
    else { idDirty = false; syncIdFromTitle(); }
  });
  elCategory.addEventListener("change", () => { refreshCodePreview(); scheduleDraftSave(); });

  elBtnAddPage.addEventListener("click", () => addPage({ focus: true }));
  el("btn-preview").addEventListener("click", openPreview);
  el("btn-download").addEventListener("click", downloadFiche);
  el("btn-copy").addEventListener("click", copyJson);
  el("btn-reset").addEventListener("click", resetAll);
  el("preview-close").addEventListener("click", closePreview);
  el("preview-modal").addEventListener("click", (e) => {
    if (e.target === el("preview-modal")) closePreview();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !el("preview-modal").hidden) closePreview();
  });
  el("draft-discard").addEventListener("click", () => {
    clearDraft();
    resetSilently();
  });

  window.addEventListener("beforeunload", saveDraft);

  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    window.__redacteur = { pages, buildFiche, addPage };
  }
}

function resetSilently() {
  elId.value = "";
  elTitle.value = "";
  elCategory.selectedIndex = 0;
  idDirty = false;
  pages.slice().forEach((p) => { p.editor.destroy(); p.panel.remove(); });
  pages.length = 0;
  addPage();
  activeEditor = pages[0].editor;
  elDraftNotice.hidden = true;
  refreshToolbar();
  refreshCodePreview();
}

main();
