import SectionCard from "./SectionCard";
import SkillTag from "./SkillTag";

const skillCategories = [
  {
    title: "Backend Frameworks & Programming Languages",
    color: "bg-primary",
    skills: [
      "Django",
      "Flask",
      "Streamlit",
      "NodeJS",
      "ExpressJS",
      "TypeScript",
      "C",
      "C++",
      "Java",
    ],
  },
  {
    title: "Frontend Technologies & UI Components",
    color: "bg-accent",
    skills: ["Bootstrap", "Tailwind CSS", "ReactJS", "NextJS"],
  },
  {
    title: "Databases",
    color: "bg-secondary",
    skills: ["MySQL", "PostgreSQL", "SQLite", "ChromaDB"],
  },
  {
    title: "Tools & Other Technologies",
    color: "bg-primary",
    skills: ["Beautiful Soup", "Docker", "Git", "LaTeX", "Markdown"],
  },
  {
    title: "Miscellaneous",
    color: "bg-secondary",
    skills: ["Figma", "Inkscape"],
  },
];

const SkillsSection = () => {
  return (
    <SectionCard id="skills" title="SKILLS">
      <div className="space-y-6">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h3 className="font-heading font-bold text-lg mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillTag key={skill} name={skill} color={cat.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default SkillsSection;
