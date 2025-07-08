
import { Shield, Zap, Lock, ArrowRight, Target, Code, Search } from 'lucide-react';
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
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-20"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-bg rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-bg rounded-xl opacity-25 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-bg rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-bg rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating security icons */}
      <div className="absolute top-32 left-24 animate-fade-in">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-strong flex items-center justify-center animate-pulse-slow">
          <Shield className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-28 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="w-14 h-14 bg-white rounded-2xl shadow-strong flex items-center justify-center animate-pulse-slow">
          <Target className="w-7 h-7 text-blue-600" />
        </div>
      </div>
      <div className="absolute bottom-48 left-40 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="w-18 h-18 bg-white rounded-2xl shadow-strong flex items-center justify-center animate-pulse-slow">
          <Code className="w-9 h-9 text-purple-600" />
        </div>
      </div>
      <div className="absolute bottom-60 right-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <div className="w-12 h-12 bg-white rounded-2xl shadow-strong flex items-center justify-center animate-pulse-slow">
          <Search className="w-6 h-6 text-indigo-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo with enhanced styling */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="gradient-border">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b538bdaa-5af0-4f24-a3a5-607841f9bc32.png" 
                  alt="Netshield Enterprise" 
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Enhanced main heading */}
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl mb-8 animate-slide-up">
            <span className="gradient-text">WE BREAK IT,</span>
            <br />
            <span className="text-slate-800">SO OTHERS CAN'T</span>
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-3xl mb-16 text-slate-600 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium" style={{ animationDelay: '0.2s' }}>
            Offensive security services tailored for modern threats.
            <br />
            <span className="text-lg md:text-xl text-slate-500 mt-2 block">
              Professional penetration testing • Application security • Vulnerability management
            </span>
          </p>

          {/* Enhanced service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 animate-slide-up border border-slate-200/50" style={{ animationDelay: '0.3s' }}>
                <div className="gradient-border mb-6 inline-block">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-4 text-slate-800">Penetration Testing</h3>
                <p className="text-slate-600 leading-relaxed">Web applications, infrastructure, and network security assessments</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 animate-slide-up border border-slate-200/50" style={{ animationDelay: '0.4s' }}>
                <div className="gradient-border mb-6 inline-block">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-4 text-slate-800">Application Security</h3>
                <p className="text-slate-600 leading-relaxed">Secure code review, threat modeling, and security architecture</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 animate-slide-up border border-slate-200/50" style={{ animationDelay: '0.5s' }}>
                <div className="gradient-border mb-6 inline-block">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Lock className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-xl mb-4 text-slate-800">Vulnerability Management</h3>
                <p className="text-slate-600 leading-relaxed">Continuous monitoring, assessment, and remediation guidance</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-medium border border-slate-200/50 max-w-2xl mx-auto mb-8">
              <h2 className="font-orbitron font-bold text-2xl mb-4 text-slate-800">Ready to Test Your Defenses?</h2>
              <p className="text-slate-600 mb-6">Real-world experience • Certified professionals • Agile & responsive</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-bg hover:opacity-90 text-white font-semibold px-10 py-6 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 text-lg"
                  onClick={scrollToContact}
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-10 py-6 rounded-2xl transition-all duration-300 text-lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
