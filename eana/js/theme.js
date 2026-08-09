/* =========================================================
   Eana — bascule clair / sombre. Partagé entre la page
   principale et la carte, pour que les deux se souviennent
   de la même préférence et affichent le même bouton.
   ========================================================= */

const EanaTheme = (() => {
  const THEME_KEY = "eana_theme";

  // Le thème est déjà posé sur <html> par le script en tête de page (voir
  // index.html / map/index.html) ; ici on ne gère que la bascule et la
  // mémorisation, pour éviter tout flash au chargement.
  function current() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    const dark = theme === "dark";
    const root = document.documentElement;

    // Coupe les transitions le temps du basculement (voir la note dans le
    // CSS), puis les rétablit une fois les nouvelles couleurs peintes.
    root.classList.add("theme-switching");
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove("theme-switching"));
    });

    const btn = document.getElementById("theme-toggle");
    if (btn) btn.title = EanaI18n.t(dark ? "theme.toLight" : "theme.toDark");

    try {
      if (dark) localStorage.setItem(THEME_KEY, "dark");
      else localStorage.removeItem(THEME_KEY);
    } catch (e) { /* stockage indisponible : la bascule reste valable pour la session */ }
  }

  function wireToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    apply(current()); // aligne l'infobulle sur l'état initial
    btn.addEventListener("click", () => {
      apply(current() === "dark" ? "light" : "dark");
    });
  }

  return { current, apply, wireToggle };
})();
