import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Publications", target: "publications" },
  { label: "Contact", target: "contact" },
];

interface PortfolioSidebarProps {
  onNavigate: (id: string) => void;
}

const PortfolioSidebar = ({ onNavigate }: PortfolioSidebarProps) => {
  return (
    <aside className="relative z-10 w-[300px] shrink-0 h-screen liquid-sidebar flex flex-col items-center py-8 px-6 max-lg:hidden overflow-y-auto">
      {/* Profile Image */}
      <div className="w-28 h-28 shrink-0 aspect-square rounded-full liquid-avatar-ring flex items-center justify-center mb-4 overflow-hidden p-1">
        <img
          src="mahdin_ohi.png"
          alt="Mahdin Ohi"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <h1 className="font-heading font-bold text-2xl mt-2 shrink-0 tracking-tight">
        Mahdin Ohi
      </h1>
      <p className="font-body font-medium text-sm mt-1 text-muted-foreground shrink-0">
        Developer | Researcher
      </p>

      {/* Nav */}
      <nav aria-label="Primary Navigation" className="flex flex-col gap-2.5 mt-8 w-full shrink-0">
        {navItems.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => onNavigate(item.target)}
            className="brutal-btn bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Theme Toggle Button */}
      <div className="mt-5 shrink-0 flex items-center justify-center">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default PortfolioSidebar;
