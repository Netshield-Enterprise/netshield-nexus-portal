
import { Shield, Zap, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Main content */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Professional Cybersecurity Services
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
                We Break It,
                <br />
                <span className="text-primary">So Others Can't</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Offensive security services tailored for modern threats.
                Professional penetration testing and security assessments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg"
                onClick={scrollToContact}
              >
                Request a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                Certified Professionals
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                Real-world Experience
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                Agile & Responsive
              </div>
            </div>
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-foreground">Penetration Testing</h3>
              <p className="text-muted-foreground">Comprehensive security testing for web applications, infrastructure, and networks</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-foreground">Application Security</h3>
              <p className="text-muted-foreground">Secure code review, threat modeling, and security architecture assessment</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-foreground">Vulnerability Management</h3>
              <p className="text-muted-foreground">Continuous monitoring, assessment, and remediation guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
