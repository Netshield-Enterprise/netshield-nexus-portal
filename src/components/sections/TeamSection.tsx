
import { Award, Users, Clock, Target } from 'lucide-react';

const TeamSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "50+",
      label: "Security Assessments Completed",
      description: "Comprehensive security evaluations across various industries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "OSCP",
      label: "Certified Professionals",
      description: "Industry-recognized certifications including OSCP, eCPTX, and more"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "48hr",
      label: "Average Response Time",
      description: "Quick turnaround on critical security incidents and assessments"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Proven track record of delivering actionable security insights"
    }
  ];

  const whyChooseUs = [
    {
      title: "Real-world Experience",
      description: "Our team brings extensive hands-on experience from both offensive and defensive security roles."
    },
    {
      title: "Industry Certifications",
      description: "OSCP, eCPTX, and other advanced certifications demonstrate our technical expertise."
    },
    {
      title: "Agile & Responsive",
      description: "We adapt quickly to your needs and provide rapid response for critical security issues."
    },
    {
      title: "Low Overhead, Direct Expertise",
      description: "Work directly with senior security professionals without corporate overhead."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            WHY CHOOSE US
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
            Proven Security Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional cybersecurity services backed by industry certifications and real-world experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="font-medium text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-semibold text-2xl mb-4 text-foreground">
              Ready to Secure Your Organization?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get in touch with our security experts to discuss your specific needs and challenges.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
