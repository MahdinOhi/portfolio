import { useState, useEffect, useCallback } from "react";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  BookOpen,
  Mail,
  type LucideIcon,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  id: string;
  label: string;
  target: string;
  icon: LucideIcon;
}

const leftNavItems: NavItem[] = [
  { id: "home", label: "Home", target: "top", icon: Home },
  { id: "about", label: "About", target: "about", icon: User },
  { id: "skills", label: "Skills", target: "skills", icon: Code2 },
];

const rightNavItems: NavItem[] = [
  { id: "projects", label: "Projects", target: "projects", icon: FolderGit2 },
  {
    id: "publications",
    label: "Papers",
    target: "publications",
    icon: BookOpen,
  },
  { id: "contact", label: "Contact", target: "contact", icon: Mail },
];

const sectionOrder = ["about", "skills", "projects", "publications", "contact"];

interface MobileHeaderProps {
  onNavigate: (id: string) => void;
}

const MobileHeader = ({ onNavigate }: MobileHeaderProps) => {
  const [activeId, setActiveId] = useState<string>("home");

  // Track active section while scrolling the main content container
  useEffect(() => {
    const scrollContainer = document.querySelector(
      ".content-scroll"
    ) as HTMLElement | null;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const maxScroll =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;

      if (scrollTop < 40) {
        setActiveId("home");
        return;
      }

      if (maxScroll > 0 && scrollTop >= maxScroll - 30) {
        setActiveId("contact");
        return;
      }

      let currentSection = "about";
      const containerTop = scrollContainer.getBoundingClientRect().top;

      for (const secId of sectionOrder) {
        const el = document.getElementById(secId);
        if (el) {
          const offsetFromContainerTop =
            el.getBoundingClientRect().top - containerTop;
          if (offsetFromContainerTop <= 140) {
            currentSection = secId;
          }
        }
      }
      setActiveId(currentSection);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (item: NavItem) => {
      setActiveId(item.id);
      if (item.target === "top") {
        const scrollContainer = document.querySelector(
          ".content-scroll"
        ) as HTMLElement | null;
        if (scrollContainer) {
          scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          onNavigate("about");
        }
      } else {
        onNavigate(item.target);
      }
    },
    [onNavigate]
  );

  const renderNavButton = (item: NavItem) => {
    const Icon = item.icon;
    const isActive = activeId === item.id;

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => handleNavClick(item)}
        aria-label={
          item.id === "publications" ? "Publications" : item.label
        }
        aria-current={isActive ? "page" : undefined}
        className={`mobile-nav-item group relative flex flex-1 flex-col items-center justify-center min-h-[44px] min-w-[40px] py-1 px-0.5 rounded-full transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isActive
            ? "mobile-nav-item-active"
            : "text-[#ebdbb2]/75 hover:text-[#ebdbb2]"
        }`}
      >
        <span
          className={`relative flex items-center justify-center w-7 h-6 rounded-full transition-all duration-200 ${
            isActive
              ? "bg-secondary text-foreground scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
              : "group-hover:bg-white/10"
          }`}
        >
          <Icon
            className="w-4 h-4 shrink-0 transition-transform duration-200"
            strokeWidth={isActive ? 2.4 : 1.9}
          />
        </span>
        <span
          className={`mt-0.5 text-[10px] max-[360px]:text-[9px] leading-tight font-heading tracking-tight truncate max-w-full transition-colors duration-200 ${
            isActive
              ? "font-bold text-[#f5c242] dark:text-[#fabd2f]"
              : "font-medium text-[#ebdbb2]/75"
          }`}
        >
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <>
      {/* Top Mobile Profile Header (Unchanged profile banner) */}
      <header className="lg:hidden border-b-2 border-foreground bg-primary px-4 py-3 sticky top-0 z-40">
        <div className="flex items-center justify-between w-full gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-11 h-11 shrink-0 aspect-square rounded-full border-2 border-foreground bg-secondary flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "var(--brutal-shadow-sm)" }}
            >
              <img
                src="mahdin_ohi.png"
                alt="Mahdin Ohi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-left min-w-0">
              <h1 className="font-heading font-bold text-lg leading-tight truncate">
                Mahdin Ohi
              </h1>
              <p className="text-xs text-muted-foreground font-medium truncate">
                Developer | Researcher
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Rounded Bottom Navigation Bar (Mobile Only) */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none px-2.5 sm:px-6 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-3"
      >
        <div className="mobile-bottom-nav-pill pointer-events-auto relative mx-auto max-w-[440px] w-full rounded-full px-2 py-1.5 flex items-center justify-between gap-0.5">
          {/* Left 3 Navigation Items */}
          <div className="flex flex-1 items-center justify-around min-w-0">
            {leftNavItems.map(renderNavButton)}
          </div>

          {/* Center Elevated Theme Toggle Dock */}
          <div className="relative shrink-0 mx-1 -mt-5 flex flex-col items-center justify-center">
            <div className="mobile-nav-center-dock w-12 h-12 rounded-full flex items-center justify-center p-1">
              <ThemeToggle />
            </div>
          </div>

          {/* Right 3 Navigation Items */}
          <div className="flex flex-1 items-center justify-around min-w-0">
            {rightNavItems.map(renderNavButton)}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileHeader;
