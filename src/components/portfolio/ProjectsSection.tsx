import SectionCard from "./SectionCard";
import ProjectCard from "./ProjectCard";

const webApps = [
  {
    title: "RefMiner",
    description: "A self-hostable AI research assistant that retrieves arXiv papers and uses a local LLM to extract 6+ structured key insights, reducing manual literature review time by ~70% with exportable tabular outputs.",
    link: "https://github.com/MahdinOhi/refMiner",
  },
  {
    title: "Map Veto Broadcast System",
    description: "A real-time esports map veto platform using Socket.IO & Flask with JWT-based authentication, enabling timed ban/pick workflows, role-based admin control, and live match updates with email-integrated team coordination.",
    link: "https://github.com/MahdinOhi/veto-master",
  },
  {
    title: "PixieGPT",
    description: "Developed an AI-powered question-answering system for any organization using a hierarchical knowledge graph and custom guardrails @DHMAINetRG.",
    link: "#",
  },
  {
    title: "MailSwift",
    description: "Developed a secure Flask-based bulk email automation platform that sends personalized HTML emails from CSV data using dynamic templating, Gmail SMTP authentication, session management, and multi-file attachment support.",
    link: "https://github.com/MahdinOhi/MailSwift",
  },
  {
    title: "E-commerce Web App",
    description: "Developed a full-stack e-commerce application using Django and React, featuring user authentication, product catalog management, shopping cart functionality, secure order processing, payment gateway integration, and responsive user interfaces.",
    link: "https://github.com/MahdinOhi/MAC-My-Awesome-Cart",
  },
  {
    title: "BeeBlogs",
    description: "A simple blog website made by NextJS",
    link: "https://beeblogs.vercel.app/",
  },
  {
    title: "LinkStack | LinkTree Clone",
    description: "A simple clone of LinkTree",
    link: "#",
  },
  {
    title: "To-Do Webapp",
    description: "A simple to-do list webapp",
    link: "#",
  },
];

const clis = [
  {
    title: "EduBase",
    description: "A DBMS built by C and B+ Trees",
    link: "https://github.com/MahdinOhi/EduBase",
  },
];

const ProjectsSection = () => {
  return (
    <SectionCard id="projects" title="PROJECTS">
      <h3 className="font-heading font-bold text-xl mb-4">Web Apps</h3>
      <div className="grid grid-cols-1 gap-4 mb-6">
        {webApps.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <ProjectCard title={p.title} description={p.description} />
          </a>
        ))}
      </div>

      <h3 className="font-heading font-bold text-xl mb-4">
        Command Line Interfaces (CLIs)
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {clis.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <ProjectCard title={p.title} description={p.description} />
          </a>
        ))}
      </div>
    </SectionCard>
  );
};

export default ProjectsSection;
