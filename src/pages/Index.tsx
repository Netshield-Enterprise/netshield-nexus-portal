
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/lovable-uploads/eb4e86af-0c78-4253-8638-cf7e2fdcddb7.png" 
                alt="Netshield Enterprise" 
                className="h-6 w-auto"
              />
            </div>
            <span className="font-inter font-bold text-lg text-foreground">
              NETSHIELD ENTERPRISE
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-inter">
            © 2025 Netshield Enterprise. All rights reserved. Securing the digital future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
