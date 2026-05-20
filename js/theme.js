/* =========================================================================
   KHA MARINE — THEME CONTROLLER
   ------------------------------------------------------------------------
   CONDITIONAL LOGO RENDERING:
   - ocean theme  => white logo
   - steel theme  => black logo
   - gulf theme   => white logo
   ========================================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "kha-theme";
  const DEFAULT_THEME = "ocean";
  const THEMES = ["ocean", "steel", "gulf"];

  // const LOGOS = {
  //   white: "./assets/logos/kha-marine-logo.png",
  //   black: "./assets/logos/kha-marine-logo-black.png",
  // };

  const THEME_CONFIG = {
    ocean: {
      logo: LOGOS.white,
      themeColor: "#050a14",
    },
    steel: {
      logo: LOGOS.black,
      themeColor: "#111827",
    },
    gulf: {
      logo: LOGOS.white,
      themeColor: "#f4efe4",
    },
  };

  function isValidTheme(theme) {
    return THEMES.includes(theme);
  }

  function getSafeTheme(theme) {
    return isValidTheme(theme) ? theme : DEFAULT_THEME;
  }

  function getSavedTheme() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      return getSafeTheme(savedTheme);
    } catch (error) {
      return DEFAULT_THEME;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {}
  }

  function getThemeConfig(theme) {
    const safeTheme = getSafeTheme(theme);
    return THEME_CONFIG[safeTheme] || THEME_CONFIG[DEFAULT_THEME];
  }

  function renderConditionalLogos(theme) {
    const safeTheme = getSafeTheme(theme);
    const config = getThemeConfig(safeTheme);
    const logos = document.querySelectorAll("[data-kha-logo]");

    logos.forEach(function (logo) {
      logo.setAttribute("src", config.logo);
      logo.setAttribute("data-current-theme", safeTheme);

      if (!logo.getAttribute("alt")) {
        logo.setAttribute("alt", "KHA Marine logo");
      }
    });
  }

  function updateThemeButtons(theme) {
    const safeTheme = getSafeTheme(theme);

    document.querySelectorAll("[data-theme-set]").forEach(function (button) {
      const buttonTheme = button.getAttribute("data-theme-set");
      const isActive = buttonTheme === safeTheme;

      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.classList.toggle("is-active", isActive);
    });
  }

  function updateBrowserThemeColor(theme) {
    const config = getThemeConfig(theme);
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", config.themeColor);
    }
  }

  function notifyThemeChange(theme) {
    window.dispatchEvent(
      new CustomEvent("khathemechange", {
        detail: {
          theme: theme,
          logo: getThemeConfig(theme).logo,
        },
      }),
    );
  }

  function applyTheme(theme) {
    const safeTheme = getSafeTheme(theme);

    document.documentElement.setAttribute("data-theme", safeTheme);

    saveTheme(safeTheme);
    renderConditionalLogos(safeTheme);
    updateThemeButtons(safeTheme);
    updateBrowserThemeColor(safeTheme);
    notifyThemeChange(safeTheme);
  }

  function bindThemeSwitcherButtons() {
    document.querySelectorAll("[data-theme-set]").forEach(function (button) {
      button.addEventListener("click", function () {
        const selectedTheme = button.getAttribute("data-theme-set");
        applyTheme(selectedTheme);
      });
    });
  }

  function initThemeController() {
    bindThemeSwitcherButtons();
    applyTheme(getSavedTheme());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeController);
  } else {
    initThemeController();
  }

  window.KHA = window.KHA || {};

  window.KHA.theme = {
    get: getSavedTheme,
    set: applyTheme,
    logos: LOGOS,
    config: THEME_CONFIG,
  };
})();
