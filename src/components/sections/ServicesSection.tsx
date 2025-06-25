
import { Shield, Search, Cog, FileText, Users, AlertTriangle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      description: "Comprehensive security testing to identify and exploit vulnerabilities in your systems, applications, and infrastructure before malicious actors do.",
      features: ["Network Security Testing", "Web Application Security", "Mobile App Testing", "Infrastructure Assessment"],
      color: "text-primary",
      bgColor: "bg-primary/20",
      borderColor: "border-primary/50"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "DevSecOps Integration",
      description: "Seamlessly integrate security into your development lifecycle with automated security testing, monitoring, and compliance checks.",
      features: ["CI/CD Security Integration", "Automated Security Testing", "Container Security", "Infrastructure as Code Security"],
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      borderColor: "border-secondary/50"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security Process Automation",
      description: "Streamline your security operations with intelligent automation, reducing response times and improving overall security posture.",
      features: ["Incident Response Automation", "Threat Detection Systems", "Security Orchestration", "Compliance Automation"],
      color: "text-accent",
      bgColor: "bg-accent/20",
      borderColor: "border-accent/50"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "GRC & Compliance (Coming Soon)",
      description: "Governance, Risk, and Compliance solutions to help your organization meet regulatory requirements and manage security risks effectively.",
      features: ["Risk Assessment", "Compliance Auditing", "Policy Development", "Regulatory Reporting"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      comingSoon: true
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Security Auditing (Coming Soon)",
      description: "Comprehensive security audits to evaluate your current security posture and provide actionable recommendations for improvement.",
      features: ["Security Posture Assessment", "Third-party Risk Assessment", "Security Architecture Review", "Incident Analysis"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
      comingSoon: true
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Threat Intelligence (Coming Soon)",
      description: "Stay ahead of emerging threats with our comprehensive threat intelligence services and proactive monitoring solutions.",
      features: ["Threat Monitoring", "Threat Hunting", "Dark Web Monitoring", "Threat Intelligence Reports"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      comingSoon: true
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4 text-gradient-cyber">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital infrastructure and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm p-8 rounded-xl border ${service.borderColor} hover:${service.borderColor.replace('/50', '')} transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden`}
            >
              {service.comingSoon && (
                <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-semibold">
                  Coming Soon
                </div>
              )}
              
              <div className={`${service.bgColor} w-20 h-20 rounded-lg flex items-center justify-center mb-6`}>
                <div className={service.color}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full ${service.bgColor} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
