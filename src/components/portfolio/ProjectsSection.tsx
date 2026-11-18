import SectionCard from "./SectionCard";
import ProjectCard from "./ProjectCard";

const webApps = [
  {
    title: "MealSense",
    description:
      "Developing MealSense, an AI-powered food recognition and personalized nutrition tracking platform designed to simplify dietary monitoring. Trained a DINOv3-based deep learning model for multi-class food classification, achieving 98% classification accuracy across 19 food classes using a dataset of 1000+ images. Fine-tuned a Vision-Language Model (VLM) using LoRA for ingredient identification, portion estimation, and nutritional mapping. Evaluated the AI pipeline using precision (91%), recall (93%), and F1-score (92%). Integrated computer vision and multimodal AI to generate structured nutritional information, including calories, protein, carbohydrates, and fats, with an average inference time of 2-3 seconds. Developed a modular full-stack architecture using Django REST Framework, React 19, and TypeScript, featuring meal logging, nutritional history, and personalized, disease-aware dietary insights, with a focus on Bangladeshi cuisine.",
    link: "https://github.com/PuffRice/mealsense",
  },
  {
    title: "RefMiner",
    description:
      "A self-hostable AI research assistant that retrieves arXiv papers and uses a local LLM to extract 6+ structured key insights, reducing manual literature review time by ~70% with exportable tabular outputs.",
    link: "https://github.com/MahdinOhi/refMiner",
  },
  {
    title: "PixieGPT",
    description:
      "Developed PixieGPT, an AI-powered organizational question-answering system designed for universities, integrating a Hierarchical Knowledge Graph (HKG) with Retrieval-Augmented Generation (RAG). Implemented semantic search using E5-base embeddings and context-aware response generation using Mistral 7B. Evaluated the system on thousands of university-related queries using a domain-specific dataset based on East West University's institutional information. Achieved 80.10% factual accuracy, an F1-score of 87.24%, and a BERTScore of 84.28%, with a Mean Reciprocal Rank (MRR) of 78.40%. Designed a modular, scalable architecture with theoretical O(log n) hierarchical retrieval complexity, adaptable to universities and other hierarchical organizations.",
    link: "https://ieeexplore.ieee.org/document/11545594",
  },
  {
    title: "Map Veto Broadcast System",
    description:
      "A real-time esports map veto platform using Socket.IO & Flask with JWT-based authentication, enabling timed ban/pick workflows, role-based admin control, and live match updates with email-integrated team coordination.",
    link: "https://github.com/MahdinOhi/veto-master",
  },
  {
    title: "MailSwift",
    description:
      "Developed a secure Flask-based bulk email automation platform that sends personalized HTML emails from CSV data using dynamic templating, Gmail SMTP authentication, session management, and multi-file attachment support.",
    link: "https://github.com/MahdinOhi/MailSwift",
  },
  {
    title: "E-commerce Web App",
    description:
      "Developed a full-stack e-commerce application for leading retailers FourStarIT BD using PHP following MVC architecture, featuring user authentication, product catalog management, shopping cart functionality, secure order processing, payment gateway integration, and responsive user interfaces.",
    link: "https://github.com/MahdinOhi/FourStarIT-WebEcom",
  },
  {
    title: "BeeBlogs",
    description:
      "A Markdown-powered blogging platform that automatically syncs and publishes blog posts directly from an Obsidian vault. Simply push .md files to the obsidian vault, and BeeBlogs automatically updates the webview with the latest content. Built with Next.js, JavaScript, and Tailwind CSS.",
    link: "https://beeblogs.vercel.app/",
  },
];

const clis = [
  {
    title: "EduBase",
    description:
      "A terminal-based DBMS built from scratch in C, featuring a MySQL-inspired query interface and B+ Tree indexing for efficient data storage, retrieval, and sorting. Implements encrypted data storage to protect records, with support for structured database operations and optimized query execution.",
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
