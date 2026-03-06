import SectionCard from "./SectionCard";
import ProjectCard from "./ProjectCard";

const webApps = [
  {
    title: "BeeBlogs",
    description: "A simple blog website made by NextJS",
    link: "https://beeblogs.vercel.app/",
  },
  {
    title: "E-commerce",
    description: "An e-commerce website made by Django",
    link: "https://github.com/MahdinOhi/MAC-My-Awesome-Cart",
  },
  {
    title: "LinkStack | LinkTree Clone",
    description: "A simple clone of LinkTree",
    link: "#",
  },
  {
    title: "MailSwift",
    description: "Send bulk mail with support for Markdown and HTML",
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
    description: "A DBMS using C [WIP]",
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
