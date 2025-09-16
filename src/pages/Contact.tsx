import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Contact Us</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to take the next step in your career? Contact our expert team today and let us help you find your perfect opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} required className="mt-1" placeholder="Tell us about your career goals, questions, or how we can help you..." />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="text-muted-foreground text-sm">Our Location</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>30 N GOULD ST 46374</p>
                    <p>SHERIDAN WY 82801</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{
              animationDelay: '0.1s'
            }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone Numbers</h3>
                      <p className="text-muted-foreground text-sm">Call us directly</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+15186754455</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{
              animationDelay: '0.2s'
            }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Address</h3>
                      <p className="text-muted-foreground text-sm">Send us an email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">onboarding@promentorllc.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{
              animationDelay: '0.3s'
            }}>
                
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <Card className="animate-fade-in">
            <CardContent className="p-0">
              
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have found success through ProMentor LLC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/services/career-guidance">Explore Career Guidance</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
              <Link to="/refer-earn">Refer & Earn</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;