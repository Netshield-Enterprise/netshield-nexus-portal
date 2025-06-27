
import { Shield, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Lock className="w-6 h-6 text-secondary opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Zap className="w-10 h-10 text-accent opacity-60" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/netshield-nexus-portal/lovable-uploads/b538bdaa-5af0-4f24-a3a5-607841f9bc32.png" 
              alt="Netshield Enterprise" 
              className="h-24 w-auto animate-pulse-glow"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gradient-cyber">NETSHIELD</span>
            <br />
            <span className="text-foreground">ENTERPRISE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Securing the digital frontier with cutting-edge cybersecurity solutions. 
            We protect, defend, and fortify your digital assets against evolving threats.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-gradient-cyber p-6 rounded-lg border border-border/50 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Vulnerability Assessment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive security testing</p>
            </div>
            <div className="bg-gradient-cyber p-6 rounded-lg border border-border/50 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">DevSecOps</h3>
              <p className="text-sm text-muted-foreground">Security automation & integration</p>
            </div>
            <div className="bg-gradient-cyber p-6 rounded-lg border border-border/50 backdrop-blur-sm">
              <Lock className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Penetration Testing</h3>
              <p className="text-sm text-muted-foreground">Advanced threat simulation</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 glow-cyan"
              onClick={scrollToContact}
            >
              Get Secured Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-3"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
