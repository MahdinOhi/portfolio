import { useEffect, useState } from "react";

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-btn relative w-6 h-6 shrink-0 aspect-square rounded-full border-[2px] border-foreground flex items-center justify-center cursor-pointer select-none overflow-hidden"
    >
      {/* Animated container that rotates on toggle and gently floats/spins */}
      <div
        className={`relative flex items-center justify-center w-full h-full transition-transform duration-500 ease-out ${
          isDark ? "rotate-[360deg] animate-moon-rock" : "rotate-0 animate-sun-spin"
        }`}
      >
        {/* Core circle (Sun body in light mode / Moon body in dark mode) */}
        <div
          className={`rounded-full transition-all duration-500 ease-in-out ${
            isDark
              ? "w-3.5 h-3.5 bg-[#fabd2f]"
              : "w-2 h-2 bg-[#9d6500]"
          }`}
        />

        {/* Crescent cutout element (HTML div that slides over to carve the moon) */}
        <div
          className={`theme-toggle-cutout absolute rounded-full transition-all duration-500 ease-in-out ${
            isDark
              ? "w-2.5 h-2.5 translate-x-[3px] -translate-y-[2.5px] scale-100 opacity-100"
              : "w-2.5 h-2.5 translate-x-[9px] -translate-y-[9px] scale-0 opacity-0"
          }`}
        />

        {/* 8 Sun rays built with HTML span elements */}
        {RAYS.map((angle) => (
          <span
            key={angle}
            style={{
              transform: `rotate(${angle}deg) translateY(${isDark ? "0px" : "-6.5px"})`,
            }}
            className={`absolute w-[1.5px] h-[3px] rounded-full bg-[#9d6500] transition-all duration-500 ease-in-out ${
              isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          />
        ))}
      </div>
    </button>
  );
};

export default ThemeToggle;
