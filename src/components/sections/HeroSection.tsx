
import { Shield, Zap, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-32 left-16 animate-fade-in">
        <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="w-10 h-10 bg-white rounded-xl shadow-soft flex items-center justify-center">
          <Lock className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-48 left-32 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="w-14 h-14 bg-white rounded-xl shadow-soft flex items-center justify-center">
          <Zap className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-medium flex items-center justify-center">
              <img 
                src="/lovable-uploads/b538bdaa-5af0-4f24-a3a5-607841f9bc32.png" 
                alt="Netshield Enterprise" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
            <span className="gradient-text">NETSHIELD</span>
            <br />
            <span className="text-foreground">ENTERPRISE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Advanced cybersecurity solutions for modern businesses. 
            We protect your digital assets with cutting-edge technology and expert security practices.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Vulnerability Assessment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive security testing and analysis</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">DevSecOps</h3>
              <p className="text-sm text-muted-foreground">Security automation & CI/CD integration</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Penetration Testing</h3>
              <p className="text-sm text-muted-foreground">Advanced threat simulation & testing</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              onClick={scrollToContact}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
