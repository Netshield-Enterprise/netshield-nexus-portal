
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/b538bdaa-5af0-4f24-a3a5-607841f9bc32.png" 
              alt="Netshield Enterprise" 
              className="h-6 w-auto"
            />
            <span className="font-orbitron font-bold text-lg text-primary">
              NETSHIELD ENTERPRISE
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Netshield Enterprise. All rights reserved. Securing the digital frontier.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
