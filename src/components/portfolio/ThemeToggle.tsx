import { useEffect, useState, useCallback, useRef } from "react";

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];
const THEME_CHANGE_EVENT = "portfolio-theme-change";

const safeGetStoredTheme = (): "dark" | "light" | null => {
  if (typeof window === "undefined") return null;
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch {
    // Handle unavailable localStorage gracefully
  }
  return null;
};

const safeSetStoredTheme = (theme: "dark" | "light") => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Handle unavailable localStorage gracefully
  }
};

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  const saved = safeGetStoredTheme();
  if (saved !== null) {
    return saved === "dark";
  }
  try {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch {
    return false;
  }
};

const applyThemeToDOM = (dark: boolean, persist = false) => {
  const root = document.documentElement;
  if (dark) {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }
  if (persist) {
    safeSetStoredTheme(dark ? "dark" : "light");
  }
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sync DOM class on mount without overwriting absence of stored preference
  useEffect(() => {
    applyThemeToDOM(isDark, false);
  }, [isDark]);

  // Listen for OS prefers-color-scheme changes when no explicit preference is saved
  useEffect(() => {
    let mediaQuery: MediaQueryList | null = null;
    try {
      mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)") ?? null;
    } catch {
      mediaQuery = null;
    }
    if (!mediaQuery) return;

    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (safeGetStoredTheme() === null) {
        const nextDark = event.matches;
        applyThemeToDOM(nextDark, false);
        setIsDark(nextDark);
        window.dispatchEvent(
          new CustomEvent<boolean>(THEME_CHANGE_EVENT, { detail: nextDark })
        );
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemChange);
      return () => mediaQuery?.removeEventListener("change", handleSystemChange);
    }
  }, []);

  // Keep desktop and mobile toggle instances in sync
  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsDark(customEvent.detail);
    };
    window.addEventListener(THEME_CHANGE_EVENT, handleSync);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, handleSync);
  }, []);

  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const nextDark = !isDark;

      const updateState = () => {
        applyThemeToDOM(nextDark, true);
        setIsDark(nextDark);
        window.dispatchEvent(
          new CustomEvent<boolean>(THEME_CHANGE_EVENT, { detail: nextDark })
        );
      };

      // Compute click/button center for circular expanding reveal animation
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const doc = document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> };
      };

      let prefersReducedMotion = false;
      try {
        prefersReducedMotion =
          window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
      } catch {
        prefersReducedMotion = false;
      }

      if (!doc.startViewTransition || prefersReducedMotion) {
        updateState();
        return;
      }

      const transition = doc.startViewTransition(() => {
        updateState();
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [isDark]
  );

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-btn group relative w-9 h-9 shrink-0 aspect-square rounded-full flex items-center justify-center cursor-pointer select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Subtle inner glow ring on hover */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
          isDark
            ? "bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_72%)]"
            : "bg-[radial-gradient(circle,rgba(245,158,11,0.16)_0%,transparent_72%)]"
        }`}
      />

      {/* Morphing Sun / Moon Stage */}
      <span
        className={`relative flex items-center justify-center w-full h-full transition-transform duration-500 ease-spring ${
          isDark
            ? "rotate-[360deg] group-hover:-rotate-[345deg]"
            : "rotate-0 group-hover:rotate-[25deg]"
        }`}
      >
        {/* Central Core Disc (morphs size & color between Sun and Moon) */}
        <span
          className={`rounded-full transition-all duration-500 ease-spring ${
            isDark
              ? "w-4 h-4 bg-[#fbbf24] shadow-[0_0_10px_rgba(251,191,36,0.45)]"
              : "w-2.5 h-2.5 bg-[#d97706] group-hover:scale-110"
          }`}
        />

        {/* Crescent Moon Mask Cutout (slides across the core disc in dark mode) */}
        <span
          className={`theme-toggle-cutout absolute rounded-full transition-all duration-500 ease-spring ${
            isDark
              ? "w-3 h-3 translate-x-[3.5px] -translate-y-[3px] scale-100 opacity-100"
              : "w-3 h-3 translate-x-[10px] -translate-y-[10px] scale-0 opacity-0"
          }`}
        />

        {/* Twinkling Stars (visible in dark mode around the crescent moon) */}
        <span
          className={`absolute w-[2px] h-[2px] rounded-full bg-[#fef3c7] transition-all duration-500 ease-spring ${
            isDark
              ? "translate-x-[5px] translate-y-[4px] scale-100 opacity-90 delay-100 animate-pulse"
              : "translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        />
        <span
          className={`absolute w-[1.5px] h-[1.5px] rounded-full bg-[#e0f2fe] transition-all duration-500 ease-spring ${
            isDark
              ? "-translate-x-[5px] -translate-y-[4px] scale-100 opacity-75 delay-150"
              : "translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        />

        {/* 8 Sun Rays (pure HTML spans that radially expand in light mode and retract in dark mode) */}
        {RAYS.map((angle, idx) => (
          <span
            key={angle}
            style={{
              transform: `rotate(${angle}deg) translateY(${
                isDark ? "0px" : "-7.5px"
              })`,
              transitionDelay: isDark ? "0ms" : `${idx * 18}ms`,
            }}
            className={`absolute w-[1.5px] h-[3px] rounded-full bg-[#d97706] transition-all duration-500 ease-spring ${
              isDark
                ? "scale-0 opacity-0"
                : "scale-100 opacity-100 group-hover:h-[3.5px]"
            }`}
          />
        ))}
      </span>
    </button>
  );
};

export default ThemeToggle;
