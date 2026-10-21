import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <div className="liquid-project-card group flex items-center justify-between gap-4">
      <div>
        <h4 className="font-heading font-semibold text-lg tracking-tight">{title}</h4>
        <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
      </div>
      <ExternalLink className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-[var(--text-accent)] transition-colors duration-200" />
    </div>
  );
};

export default ProjectCard;
