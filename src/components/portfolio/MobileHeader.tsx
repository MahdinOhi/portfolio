import { User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Publications", target: "publications" },
  { label: "Contact", target: "contact" },
];

interface MobileHeaderProps {
  onNavigate: (id: string) => void;
}

const MobileHeader = ({ onNavigate }: MobileHeaderProps) => {
  return (
    <header className="lg:hidden border-b-2 border-foreground bg-primary p-4 sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 mb-3">
        {/* Avatar + Name + Theme Toggle */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 shrink-0 aspect-square rounded-full border-2 border-foreground bg-secondary flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "var(--brutal-shadow-sm)" }}
            >
              <img
                src="mahdin_ohi.png"
                alt="Mahdin Ohi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-left">
              <h1 className="font-heading font-bold text-lg truncate">
                Mahdin Ohi
              </h1>
              <p className="text-xs text-muted-foreground font-medium truncate">
                Backend Developer
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <nav className="flex gap-2 overflow-x-auto scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => onNavigate(item.target)}
              className="brutal-tag bg-secondary hover:bg-accent whitespace-nowrap font-heading font-bold px-3 py-1 min-w-[80px]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
