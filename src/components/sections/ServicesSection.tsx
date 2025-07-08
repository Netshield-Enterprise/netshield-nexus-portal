
import { Shield, Search, Cog, FileText, Users, AlertTriangle, Target, Code, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Penetration Testing",
      subtitle: "Web, Infrastructure & Network",
      description: "Comprehensive security testing to identify and exploit vulnerabilities before malicious actors do. Real-world attack simulations.",
      features: ["Web Application Testing", "Network Security Assessment", "Infrastructure Penetration", "Wireless Security Testing"],
      color: "text-primary",
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Application Security Review",
      subtitle: "Code & Architecture Analysis",
      description: "Secure code review, threat modeling, and security architecture assessment for modern applications.",
      features: ["Static Code Analysis", "Dynamic Security Testing", "Threat Modeling", "Security Architecture Review"],
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Vulnerability Management",
      subtitle: "Continuous Security Monitoring",
      description: "Ongoing vulnerability assessment, risk prioritization, and remediation guidance for your security posture.",
      features: ["Automated Vulnerability Scanning", "Risk Assessment & Prioritization", "Remediation Guidance", "Continuous Monitoring"],
      color: "text-green-400",
      bgColor: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/20"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Threat Modeling",
      subtitle: "Proactive Security Design",
      description: "Systematic approach to identifying, analyzing, and mitigating security threats in your applications and systems.",
      features: ["Architecture Threat Analysis", "Attack Vector Mapping", "Risk Mitigation Strategies", "Security Design Patterns"],
      color: "text-red-400",
      bgColor: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30",
      iconBg: "bg-red-500/20"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "DevSecOps Integration",
      subtitle: "Security in CI/CD Pipeline",
      description: "Integrate security into your development lifecycle with automated testing and continuous security validation.",
      features: ["CI/CD Security Integration", "Automated Security Testing", "Container Security", "Infrastructure as Code Security"],
      color: "text-indigo-400",
      bgColor: "from-indigo-500/20 to-indigo-600/20",
      borderColor: "border-indigo-500/30",
      iconBg: "bg-indigo-500/20"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Incident Response",
      subtitle: "Rapid Threat Response",
      description: "Fast, effective response to security incidents with forensic analysis and recovery guidance.",
      features: ["24/7 Incident Response", "Forensic Analysis", "Malware Analysis", "Recovery Planning"],
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="gradient-border">
              <div className="bg-slate-800/80 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="gradient-text font-orbitron font-bold text-sm tracking-wide">WHAT WE DO</span>
              </div>
            </div>
          </div>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-slate-200">
            Our Security Services
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive cybersecurity solutions designed to protect your digital assets and business operations from modern threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgColor} backdrop-blur-sm p-8 rounded-3xl border-2 ${service.borderColor} hover:shadow-strong transition-all duration-500 hover:scale-105 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-medium border border-slate-700/50`}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="font-orbitron font-bold text-xl mb-2 text-slate-200">
                  {service.title}
                </h3>
                
                <p className="text-sm font-semibold text-slate-300 mb-4 opacity-80">
                  {service.subtitle}
                </p>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-slate-300">
                      <div className={`w-2 h-2 rounded-full ${service.iconBg} mr-3 mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-slate-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-3xl shadow-medium border border-slate-700/50 max-w-3xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-slate-200">
              Need a Custom Security Solution?
            </h3>
            <p className="text-slate-300 mb-6">
              Every organization has unique security challenges. Let's discuss how we can tailor our services to your specific needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-medium hover:shadow-strong"
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
