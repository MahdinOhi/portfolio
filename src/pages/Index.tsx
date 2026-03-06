import { useRef, useCallback } from "react";
import PortfolioSidebar from "@/components/portfolio/PortfolioSidebar";
import MobileHeader from "@/components/portfolio/MobileHeader";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el && contentRef.current) {
      contentRef.current.scrollTo({
        top: el.offsetTop - contentRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="h-screen flex overflow-hidden">
      <PortfolioSidebar onNavigate={scrollToSection} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <MobileHeader onNavigate={scrollToSection} />
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto content-scroll p-6 lg:p-10"
          style={{ scrollBehavior: "smooth" }}
        >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
