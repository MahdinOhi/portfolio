import { ReactNode } from "react";

interface SectionCardProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionCard = ({ id, title, children }: SectionCardProps) => {
  return (
    <section id={id} className="brutal-card bg-background mb-8">
      <h2 className="font-heading font-bold text-3xl mb-6 border-b-[3px] border-foreground pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionCard;
