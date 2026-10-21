import { ReactNode } from "react";

interface SectionCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionCard = ({ id, title, children }: SectionCardProps) => {
  return (
    <section id={id} className="brutal-card mb-8">
      <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6 border-b border-[var(--glass-divider)] pb-3.5 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionCard;
