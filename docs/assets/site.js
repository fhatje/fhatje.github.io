
(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const stored = localStorage.getItem("theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const moonIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 15.4A8.5 8.5 0 0 1 8.6 4 7 7 0 1 0 20 15.4Z"/></svg>';
  const sunIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></svg>';

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (button) {
      button.innerHTML = theme === "dark" ? sunIcon : moonIcon;
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  applyTheme(stored || (preferredDark ? "dark" : "light"));

  if (button) {
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }
})();
