/* =========================================================
   L'Après-Monde — bascule clair / sombre des pages d'outils.
   Autonome : contrairement à site/js/theme.js, ne dépend ni
   de EanaI18n ni du reste du code du codex. Même clé de
   stockage ("eana_theme") et même origine que le site, donc
   la préférence est partagée entre les deux.

   La pose initiale du thème se fait par un petit script en
   tête de chaque page (avant le premier rendu, pour éviter
   le flash) ; ici on ne gère que le bouton.
   ========================================================= */

(() => {
  const KEY = "eana_theme";
  const root = document.documentElement;

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function apply(dark) {
    root.classList.add("theme-switching");
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove("theme-switching"));
    });
    try {
      if (dark) localStorage.setItem(KEY, "dark");
      else localStorage.removeItem(KEY);
    } catch (e) { /* stockage indisponible : valable pour la session */ }
    refresh();
  }

  function refresh() {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.title = isDark() ? "Mode clair" : "Mode sombre";
  }

  function wire() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    refresh();
    btn.addEventListener("click", () => apply(!isDark()));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
