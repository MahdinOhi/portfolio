import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <div className="brutal-card bg-background flex items-center justify-between gap-4 transition-all duration-100">
      <div>
        <h4 className="font-heading font-bold text-lg">{title}</h4>
        <p className="font-body text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <ExternalLink className="w-5 h-5 shrink-0" />
    </div>
  );
};

export default ProjectCard;
