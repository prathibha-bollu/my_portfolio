import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import ExperienceSection from '@/components/Portfolio/ExperienceSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import ResumeSection from '@/components/Portfolio/ResumeSection';
import Footer from '@/components/Portfolio/Footer';
import Navigation from '@/components/Portfolio/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="resume">
        <ResumeSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;