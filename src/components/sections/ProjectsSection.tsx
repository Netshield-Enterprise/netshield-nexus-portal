
import { CheckCircle, ShoppingCart, Globe, Calendar, Award } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      client: "Macathie Limited",
      type: "E-Commerce Platform",
      service: "Vulnerability Assessment & Penetration Testing",
      description: "Comprehensive VAPT engagement for a major e-commerce platform, identifying critical vulnerabilities and providing detailed remediation strategies.",
      highlights: [
        "Full-scope security assessment",
        "Critical vulnerability identification",
        "Payment gateway security testing",
        "Customer data protection analysis",
        "Detailed remediation roadmap"
      ],
      status: "Completed",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "text-primary",
      bgColor: "bg-primary/20",
      borderColor: "border-primary/50"
    }
  ];

  const upcomingServices = [
    {
      title: "Financial Services VAPT",
      description: "Banking and financial institution security assessment",
      status: "Planning Phase",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Healthcare Security Audit",
      description: "HIPAA compliance and patient data protection review",
      status: "Scoping Phase",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "DevSecOps Implementation",
      description: "CI/CD security integration for enterprise client",
      status: "Discovery Phase",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4 text-gradient-cyber">
            Past Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our successful cybersecurity engagements and the impact we've made in protecting organizations across various industries.
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-4xl mx-auto mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border ${project.borderColor} hover:${project.borderColor.replace('/50', '')} transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className={`${project.bgColor} p-3 rounded-lg mr-4`}>
                      <div className={project.color}>
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-2xl text-foreground">
                        {project.client}
                      </h3>
                      <p className="text-muted-foreground">{project.type}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2 text-primary">
                      {project.service}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gradient-cyber p-6 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-lg mb-4 text-foreground">
                      Project Highlights
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">Status: </span>
                      <span className="text-sm font-semibold text-primary">{project.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-orbitron font-bold text-2xl text-center mb-8 text-gradient-cyber">
            Pipeline & Upcoming Engagements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingServices.map((service, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/30 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-2 rounded-lg mr-3">
                    <div className="text-secondary">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-xs text-secondary">{service.status}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-cyber p-8 rounded-xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground">
              Ready to Secure Your Organization?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our satisfied clients and let us help you identify and mitigate security vulnerabilities 
              before they become costly breaches.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200 glow-cyan"
            >
              Start Your Security Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
