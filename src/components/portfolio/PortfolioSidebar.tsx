import { User } from "lucide-react";

const navItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

interface PortfolioSidebarProps {
  onNavigate: (id: string) => void;
}

const PortfolioSidebar = ({ onNavigate }: PortfolioSidebarProps) => {
  return (
    <aside className="w-[300px] shrink-0 h-screen border-r-[3px] border-foreground bg-primary flex flex-col items-center py-10 px-6 max-lg:hidden">
      {/* Profile Image */}
      <div
        className="w-28 h-28 rounded-full border-[4px] border-foreground bg-secondary flex items-center justify-center mb-4 overflow-hidden"
        style={{ boxShadow: "var(--brutal-shadow)" }}
      >
        <img
          src="ohi.webp"
          alt="Mahdin Ohi"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="font-heading font-bold text-2xl mt-2">Mahdin Ohi</h1>
      <p className="font-body font-medium text-sm mt-1 text-muted-foreground">
        Full Stack Developer | Researcher
      </p>

      {/* Nav */}
      <nav className="flex flex-col gap-3 mt-10 w-full">
        {navItems.map((item) => (
          <button
            key={item.target}
            onClick={() => onNavigate(item.target)}
            className="brutal-btn bg-secondary hover:bg-accent"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default PortfolioSidebar;
