import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Briefcase } from "lucide-react";
const CareerGuidance = () => {
  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Career Guidance</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Career Guidance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Comprehensive Career Guidance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ProMentor LLC serves as your trusted compass in the intricate world of careers, spanning a 
                multitude of domains including STEM (Science, Technology, Engineering, and Mathematics), Green card 
                holders, US citizens, and EAD holders. As your dedicated partner, we embark on an in-depth journey to 
                meticulously evaluate each candidate through comprehensive interviews, ensuring a seamless alignment 
                with your organization's ethos and goals.
              </p>
            </div>

            <div className="mb-16 animate-fade-in">
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our specialised STEM services are catalysts for transformative change in candidates' lives, cementing 
                our reputation as an industry-leading STEM employment firm in the digital landscape.
              </p>
            </div>

            <div className="text-center mb-12 animate-slide-up">
              <h3 className="text-2xl font-bold mb-8 text-primary">
                ProMentor LLC extends a comprehensive suite of services, encompassing:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[{
              icon: Users,
              title: "Direct Hire Employment",
              description: "Placing candidates in permanent roles that directly align with your business's long-term needs.",
              details: ["Comprehensive skills assessment", "Cultural fit evaluation", "Long-term career planning", "Ongoing placement support"]
            }, {
              icon: Clock,
              title: "Temporary Employment",
              description: "Facilitating short-term engagements that offer flexibility and agility to address immediate requirements.",
              details: ["Quick deployment solutions", "Flexible engagement terms", "Project-based assignments", "Skills-based matching"]
            }, {
              icon: Briefcase,
              title: "Contract Opportunities",
              description: "Catering to specific projects or seasonal demands, while providing specialized skill sets on a contractual basis.",
              details: ["Specialized project expertise", "Seasonal demand coverage", "Contractor management", "Performance tracking"]
            }].map((service, index) => <Card key={index} className="hover:shadow-corporate transition-shadow duration-300 animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-8 text-center h-full">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2 text-sm text-left">
                      {service.details.map((detail, idx) => <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Specialization Section */}
            <Card className="bg-gradient-section p-8 mb-12 animate-fade-in">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Our Specialization</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our tailored approach resonates with clients and candidates alike, ensuring that the perfect match is forged 
                  between individual talents and organizational objectives. Beyond individual satisfaction, this methodology 
                  translates into tangible advantages such as enhanced flexibility, cost-effectiveness, and the ability to 
                  swiftly address workforce gaps with qualified professionals.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">STEM</div>
                    <div className="text-sm text-muted-foreground">Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Green Card</div>
                    <div className="text-sm text-muted-foreground">Holders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">US</div>
                    <div className="text-sm text-muted-foreground">Citizens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">EAD</div>
                    <div className="text-sm text-muted-foreground">Holders</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Career Guidance Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Initial Assessment</h4>
                      <p className="text-muted-foreground">Comprehensive evaluation of skills, experience, and career goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Market Analysis</h4>
                      <p className="text-muted-foreground">Industry insights and market trends analysis for strategic planning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Personalized Roadmap</h4>
                      <p className="text-muted-foreground">Customized career pathway with actionable steps and milestones</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ongoing Support</h4>
                      <p className="text-muted-foreground">Continuous mentoring and guidance throughout your career journey</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Start Your Career Journey</h3>
                <p className="mb-6 text-center opacity-90">
                  Let ProMentor LLC guide you towards your ideal career path with personalized coaching and market expertise.
                </p>
                <div className="space-y-4">
                  <Button asChild variant="secondary" className="w-full" size="lg">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary" size="lg">
                    <Link to="/specialties/training">View Training Programs</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Did not find what you are searching for?
          </h2>
          
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link to="/contact">Connect with Us</Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default CareerGuidance;