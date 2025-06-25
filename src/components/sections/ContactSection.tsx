
import { Mail, MapPin, Phone, Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Form will be submitted to usebasin automatically
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4 text-gradient-cyber">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to strengthen your cybersecurity posture? Contact our experts to discuss your security needs 
            and get a customized protection strategy for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-foreground">
                Let's Secure Your Future
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need a comprehensive vulnerability assessment, penetration testing, 
                or want to integrate security into your development process, our team is here to help. 
                We provide tailored cybersecurity solutions that fit your organization's unique needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">info@netshield-enterprise.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-accent/20 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Global Remote Operations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-cyber p-6 rounded-xl border border-border/50">
              <h4 className="font-semibold text-lg mb-4 text-foreground">
                Quick Response Guarantee
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We understand that cybersecurity is critical. That's why we guarantee a response 
                to all inquiries within 24 hours. For urgent security incidents, please call our 
                emergency response line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
            <form 
              action="https://usebasin.com/f/dcdbf93f832e" 
              method="POST" 
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Services Interested In
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="flex items-center">
                    <input type="checkbox" name="services" value="VAPT" className="mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">VAPT</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="services" value="DevSecOps" className="mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">DevSecOps</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="services" value="Security Automation" className="mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Security Automation</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="services" value="GRC" className="mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">GRC & Compliance</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Timeline
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="timeline" value="immediate" className="mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Immediate</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="timeline" value="1-3 months" className="mr-2 text-primary" defaultChecked />
                    <span className="text-sm text-muted-foreground">1-3 months</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="timeline" value="planning" className="mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">Planning phase</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-none"
                  placeholder="Tell us about your cybersecurity needs, current challenges, or specific requirements..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="file-upload" className="block text-sm font-semibold text-foreground mb-2">
                  Attach Files (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="file-upload"
                    id="file-upload"
                    multiple
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full px-4 py-3 bg-input border border-border border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                  >
                    <Upload className="w-5 h-5 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload documents, network diagrams, or requirements
                    </span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 glow-cyan"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
