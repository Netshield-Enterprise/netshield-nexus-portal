
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
      <footer className="py-12 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-soft flex items-center justify-center">
              <img 
                src="/lovable-uploads/b538bdaa-5af0-4f24-a3a5-607841f9bc32.png" 
                alt="Netshield Enterprise" 
                className="h-5 w-auto"
              />
            </div>
            <span className="font-orbitron font-bold text-lg text-primary">
              NETSHIELD ENTERPRISE
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 Netshield Enterprise. All rights reserved. Securing the digital future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
