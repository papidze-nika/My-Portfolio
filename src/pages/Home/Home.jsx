import Styles from "./Home.module.css";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { StarBackground } from "@/components/StarBackground/StarBackground";
import { Navbar } from "@/layout/Navbar/Navbar";
import { HeroSection } from "@/layout/HeroSection/HeroSection";
import { AboutSection } from "@/layout/AboutSection/AboutSection";
import { SkillsSection } from "@/layout/SkillsSection/SkillsSection";
import { ProjectsSection } from "@/layout/ProjectsSection/ProjectsSection";
import { ContactSection } from "@/layout/ContactSection/ContactSection";
import { Footer } from "@/layout/Footer/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle*/}
      <ThemeToggle />
      {/* Background Effects*/}
      <StarBackground />

      {/* Navbar*/}
      <Navbar />
      {/* Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer*/}
      <Footer />
    </div>
  );
};
