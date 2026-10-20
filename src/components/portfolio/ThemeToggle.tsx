import { useEffect, useState, useCallback, useRef } from "react";

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];
const THEME_CHANGE_EVENT = "portfolio-theme-change";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    return saved === "dark";
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

const applyThemeToDOM = (dark: boolean) => {
  const root = document.documentElement;
  if (dark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    applyThemeToDOM(isDark);
  }, [isDark]);

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
        applyThemeToDOM(nextDark);
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

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

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
            duration: 550,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
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
      className="theme-toggle-btn group relative w-8 h-8 shrink-0 aspect-square rounded-full border-[2px] border-foreground flex items-center justify-center cursor-pointer select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Subtle inner glow ring on hover */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
          isDark
            ? "bg-[radial-gradient(circle,rgba(250,189,47,0.18)_0%,transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(157,101,0,0.14)_0%,transparent_70%)]"
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
              ? "w-4 h-4 bg-[#fabd2f] shadow-[0_0_8px_rgba(250,189,47,0.45)]"
              : "w-2.5 h-2.5 bg-[#9d6500] group-hover:scale-110"
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
          className={`absolute w-[2px] h-[2px] rounded-full bg-[#fbf1c7] transition-all duration-500 ease-spring ${
            isDark
              ? "translate-x-[5px] translate-y-[4px] scale-100 opacity-90 delay-100 animate-pulse"
              : "translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        />
        <span
          className={`absolute w-[1.5px] h-[1.5px] rounded-full bg-[#ebdbb2] transition-all duration-500 ease-spring ${
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
            className={`absolute w-[1.5px] h-[3px] rounded-full bg-[#9d6500] transition-all duration-500 ease-spring ${
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
