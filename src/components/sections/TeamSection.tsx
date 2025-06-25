
import { Users, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  // Placeholder team members - to be updated with actual team information
  const teamMembers = [
    {
      name: "Founder & CEO",
      role: "Cybersecurity Expert",
      description: "Leading cybersecurity professional with extensive experience in VAPT and DevSecOps.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      placeholder: true
    },
    {
      name: "Co-Founder & CTO",
      role: "Security Architect",
      description: "Expert in security automation and infrastructure protection with deep technical expertise.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b0c3e9a4?w=300&h=300&fit=crop&crop=face",
      placeholder: true
    },
    {
      name: "Co-Founder & CISO",
      role: "Security Operations Lead",
      description: "Specialist in threat detection, incident response, and security process optimization.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      placeholder: true
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4 text-gradient-cyber">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the cybersecurity experts behind Netshield Enterprise. Our team combines years of experience 
            with cutting-edge expertise to deliver unparalleled security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-cyber p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    {member.placeholder ? (
                      <Users className="w-16 h-16 text-primary" />
                    ) : (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>
                </div>
                
                <h3 className="font-orbitron font-bold text-xl mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <button className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-colors duration-200">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </button>
                  <button className="bg-secondary/20 hover:bg-secondary/30 p-2 rounded-lg transition-colors duration-200">
                    <Mail className="w-5 h-5 text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl mb-4 text-primary">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented cybersecurity professionals to join our mission. 
              If you're passionate about protecting digital infrastructure and want to work with cutting-edge technology, 
              we'd love to hear from you.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
