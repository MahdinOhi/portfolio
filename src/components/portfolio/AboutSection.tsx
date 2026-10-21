import { FileDown, Briefcase } from "lucide-react";
import SectionCard from "./SectionCard";

const infoItems = [
  { label: "Name", value: "Mahdin Ohi" },
  { label: "Work Experience", value: "3 years" },
  { label: "Languages", value: "Bengali, English, Hindi" },
  { label: "Nationality", value: "Bangladeshi" },
];

const experiences = [
  {
    company: "DHMAINetRG",
    role: "Research Assistant",
    link: "https://dhmairg.net/",
  },
  {
    company: "Level7",
    role: "Backend Developer [Intern]",
    link: "https://www.level7ltd.com/",
  },
];

const AboutSection = () => {
  return (
    <SectionCard id="about" title="ABOUT">
      <h3 className="font-heading font-bold text-xl mb-4">Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {infoItems.map((item) => (
          <div
            key={item.label}
            className="brutal-card-sm bg-primary"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {item.label}
            </p>
            <p className="font-heading font-semibold text-lg mt-1">{item.value}</p>
          </div>
        ))}
        <a
          href="https://flowcv.com/resume/f0ek4gwwrd"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="brutal-card-sm bg-secondary flex items-center gap-3 cursor-pointer">
            <FileDown className="w-6 h-6 text-[var(--text-accent)]" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Resume
              </p>

              <p className="font-heading font-semibold text-lg mt-1">Download</p>
            </div>
          </div>
        </a>
      </div>

      <h3 className="font-heading font-bold text-xl mb-4">Experiences</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map((exp) => (
          <a
            key={exp.company}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="brutal-card-sm bg-accent flex items-center gap-3 cursor-pointer">
              <Briefcase className="w-5 h-5 shrink-0 text-[var(--text-accent)]" />

              <div>
                <p className="font-heading font-semibold">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </SectionCard>
  );
};

export default AboutSection;
