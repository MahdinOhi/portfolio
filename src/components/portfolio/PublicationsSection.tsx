import SectionCard from "./SectionCard";
import ProjectCard from "./ProjectCard";

const publications = [
  {
    title: "Design and Implementation of a Generative Pre-Trained Transformer for Universities of Bangladesh.",
    description: "IEEE QPAIN 2026",
    link: "https://ieeexplore.ieee.org/abstract/document/11545594",
  },
  {
    title: "PRIoTP: Towards Context-Aware Partial Reliable Application-Layer IoT Protocol with Edge Intelligence",
    description: "International Conference on Distributed Computing in Sensor Systems (DCOSS) 2026",
    link: "https://ieeexplore.ieee.org/abstract/document/11659426",
  },
  {
    title: "OppNDA: A Modular and Scalable Automation Framework for Streamlining DTN Research with the ONE Simulator",
    description: "IEEE Access",
    link: "https://ieeexplore.ieee.org/document/11704781/authors#authors",
  },
];

const PublicationsSection = () => {
  return (
    <SectionCard id="publications" title="PUBLICATIONS">
      <div className="grid grid-cols-1 gap-4 mb-6">
        {publications.map((p) => (
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

export default PublicationsSection;
