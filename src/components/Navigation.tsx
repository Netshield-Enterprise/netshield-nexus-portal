
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'team' },
    { label: 'Mission & Vision', id: 'mission' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-strong' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-white rounded-2xl shadow-medium flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'border-2 border-slate-200' : 'border-2 border-white/20'
            }`}>
              <img 
                src="/lovable-uploads/b538bdaa-5af0-4f24-a3a5-607841f9bc32.png" 
                alt="Netshield Enterprise" 
                className="h-7 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-bold text-xl text-slate-800">
                NETSHIELD
              </span>
              <span className="text-xs text-slate-600 font-medium -mt-1">
                ENTERPRISE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-bg transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="gradient-bg hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-medium hover:shadow-strong"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-white/80 backdrop-blur-sm rounded-2xl shadow-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-strong border border-slate-200/50 rounded-3xl mt-4 p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 px-4 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-2xl transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full gradient-bg hover:opacity-90 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-medium hover:shadow-strong mt-4"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
