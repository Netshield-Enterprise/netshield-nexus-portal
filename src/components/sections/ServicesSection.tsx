
import { Shield, Search, Cog, Target, Code, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Penetration Testing",
      subtitle: "Web, Infrastructure & Network",
      description: "Comprehensive security testing to identify and exploit vulnerabilities before malicious actors do.",
      features: ["Web Application Testing", "Network Security Assessment", "Infrastructure Penetration", "Wireless Security Testing"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Application Security Review",
      subtitle: "Code & Architecture Analysis",
      description: "Secure code review, threat modeling, and security architecture assessment for modern applications.",
      features: ["Static Code Analysis", "Dynamic Security Testing", "Threat Modeling", "Security Architecture Review"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vulnerability Management",
      subtitle: "Continuous Security Monitoring",
      description: "Ongoing vulnerability assessment, risk prioritization, and remediation guidance.",
      features: ["Automated Vulnerability Scanning", "Risk Assessment & Prioritization", "Remediation Guidance", "Continuous Monitoring"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Threat Modeling",
      subtitle: "Proactive Security Design",
      description: "Systematic approach to identifying, analyzing, and mitigating security threats.",
      features: ["Architecture Threat Analysis", "Attack Vector Mapping", "Risk Mitigation Strategies", "Security Design Patterns"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "DevSecOps Integration",
      subtitle: "Security in CI/CD Pipeline",
      description: "Integrate security into your development lifecycle with automated testing.",
      features: ["CI/CD Security Integration", "Automated Security Testing", "Container Security", "Infrastructure as Code Security"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Incident Response",
      subtitle: "Rapid Threat Response",
      description: "Fast, effective response to security incidents with forensic analysis and recovery guidance.",
      features: ["24/7 Incident Response", "Forensic Analysis", "Malware Analysis", "Recovery Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            WHAT WE DO
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
            Our Security Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your digital assets and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="font-semibold text-xl mb-2 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-sm font-medium text-primary mb-4">
                {service.subtitle}
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg border shadow-sm max-w-2xl mx-auto">
            <h3 className="font-semibold text-2xl mb-4 text-foreground">
              Need a Custom Security Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every organization has unique security challenges. Let's discuss how we can tailor our services to your specific needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
