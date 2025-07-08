
import { Users, Shield, Code, Target, Award, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Security Lead",
      role: "Penetration Testing Expert",
      description: "OSCP, CEH certified with 8+ years in offensive security. Specialized in web application and network penetration testing.",
      skills: ["OSCP", "CEH", "Web App Security", "Network Pentesting"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      placeholder: true,
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Application Security Specialist",
      role: "Secure Code Review & Architecture",
      description: "Expert in secure coding practices, threat modeling, and application security architecture with focus on modern frameworks.",
      skills: ["Secure Coding", "Threat Modeling", "SAST/DAST", "DevSecOps"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b0c3e9a4?w=300&h=300&fit=crop&crop=face",
      placeholder: true,
      icon: <Code className="w-8 h-8" />
    },
    {
      name: "Vulnerability Research Lead",
      role: "Threat Intelligence & Research",
      description: "Specialized in zero-day research, vulnerability analysis, and threat intelligence with CTF competition background.",
      skills: ["Vulnerability Research", "Malware Analysis", "CTF Champion", "Threat Intel"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      placeholder: true,
      icon: <Target className="w-8 h-8" />
    }
  ];

  const certifications = [
    { name: "OSCP", color: "bg-red-100 text-red-700" },
    { name: "eCPTX", color: "bg-blue-100 text-blue-700" },
    { name: "CEH", color: "bg-green-100 text-green-700" },
    { name: "CISSP", color: "bg-purple-100 text-purple-700" },
    { name: "CISM", color: "bg-orange-100 text-orange-700" },
    { name: "GCIH", color: "bg-indigo-100 text-indigo-700" }
  ];

  return (
    <section id="team" className="py-24 relative bg-gradient-to-br from-white to-slate-100">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="gradient-border">
              <div className="bg-white px-6 py-2 rounded-full">
                <span className="gradient-text font-orbitron font-bold text-sm tracking-wide">WHY CHOOSE US</span>
              </div>
            </div>
          </div>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-slate-800">
            Meet Our Security Experts
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our team combines years of real-world experience with cutting-edge expertise to deliver 
            unparalleled security solutions. We don't just find vulnerabilities – we help you fix them.
          </p>
        </div>

        {/* Team stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-medium border border-slate-200/50 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-slate-600">Security Assessments</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-medium border border-slate-200/50 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-slate-600">Years Combined Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-medium border border-slate-200/50 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-sm text-slate-600">Vulnerabilities Found</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-medium border border-slate-200/50 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Response Time</div>
          </div>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-medium hover:shadow-strong border border-slate-200/50 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      {member.placeholder ? (
                        <div className="text-primary">
                          {member.icon}
                        </div>
                      ) : (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-orbitron font-bold text-xl mb-2 text-slate-800">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {member.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3">
                  <button className="bg-primary/20 hover:bg-primary/30 p-3 rounded-xl transition-colors duration-200">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </button>
                  <button className="bg-slate-200 hover:bg-slate-300 p-3 rounded-xl transition-colors duration-200">
                    <Mail className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-medium border border-slate-200/50 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-primary mr-3" />
              <h3 className="font-orbitron font-bold text-2xl text-slate-800">Our Certifications</h3>
            </div>
            <p className="text-slate-600">Industry-recognized certifications that validate our expertise</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`${cert.color} px-4 py-2 rounded-xl font-semibold text-sm`}
              >
                {cert.name}
              </div>
            ))}
          </div>
        </div>

        {/* Join team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-3xl shadow-medium border border-primary/20 max-w-3xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-slate-800">
              Join Our Security Team
            </h3>
            <p className="text-slate-600 mb-6">
              We're always looking for talented cybersecurity professionals who are passionate about 
              protecting digital infrastructure and working with cutting-edge security technology.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-medium hover:shadow-strong"
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
