import { User } from "lucide-react";

const navItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

interface MobileHeaderProps {
  onNavigate: (id: string) => void;
}

const MobileHeader = ({ onNavigate }: MobileHeaderProps) => {
  return (
    <header className="lg:hidden border-b-2 border-foreground bg-primary p-4 sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 mb-3">
        {/* Avatar + Name */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full border-2 border-foreground bg-secondary flex items-center justify-center"
            style={{ boxShadow: "var(--brutal-shadow-sm)" }}
          >
            <User className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-heading font-bold text-lg truncate">
              Mahdin Ohi
            </h1>
            <p className="text-xs text-muted-foreground font-medium truncate">
              Backend Developer
            </p>
          </div>
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
