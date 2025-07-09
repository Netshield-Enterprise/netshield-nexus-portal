
import { Target, Eye, Lightbulb } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section id="mission" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4 text-primary">
            Our Purpose
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving the future of cybersecurity through innovation, expertise, and unwavering commitment to digital protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-primary/20 p-3 rounded-lg mr-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-inter font-bold text-2xl text-primary">Mission</h3>
            </div>
            <p className="font-inter text-muted-foreground leading-relaxed text-lg">
              To safeguard organizations against cyber threats through comprehensive vulnerability assessments, 
              penetration testing, and cutting-edge DevSecOps solutions. We empower businesses to operate 
              securely in an increasingly connected world by identifying vulnerabilities before they become exploits.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-inter font-bold text-2xl text-secondary">Vision</h3>
            </div>
            <p className="font-inter text-muted-foreground leading-relaxed text-lg">
              To be the leading cybersecurity partner that transforms how organizations approach digital security. 
              We envision a future where proactive security measures, automated protection, and continuous 
              monitoring make cyber threats obsolete.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="font-inter font-bold text-2xl text-center mb-8 text-primary">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Innovation</h4>
              <p className="font-inter text-muted-foreground">Staying ahead of threats with cutting-edge solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Precision</h4>
              <p className="font-inter text-muted-foreground">Delivering accurate and actionable security insights</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-inter font-semibold text-lg mb-2">Vigilance</h4>
              <p className="font-inter text-muted-foreground">Constant monitoring and proactive threat detection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
