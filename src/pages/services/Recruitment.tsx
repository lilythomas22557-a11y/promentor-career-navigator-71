import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Search, Target, Clock } from "lucide-react";

const Recruitment = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Recruitment and Interview Process</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Recruitment and Interview Process</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-primary">Recruitment</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      ProMentor LLC is dedicated to crafting optimal job descriptions that swiftly connect you 
                      with the right talent.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Our specialized recruiters supplement this with data-driven market analysis, shaping unique 
                      recruitment strategies to cater to evolving demands.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      ProMentor LLC's talent pool spans diverse levels and sectors. This enables our adept full-service 
                      recruiters to pinpoint and engage the market's most promising candidates, ensuring a perfect fit 
                      for your needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      With a commitment to swift action, ProMentor LLC aims to present a selection of top-quality 
                      candidates within the first 48-72 hours of receiving your open criteria.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Once the criteria are set, our recruitment experts at ProMentor LLC dive into meticulous screening and 
                      interviews, aligning with your expectations to unearth exceptional candidates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="bg-gradient-section p-8 h-fit">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Recruitment Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Search className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Strategic Sourcing</h4>
                      <p className="text-muted-foreground text-sm">Data-driven market analysis and targeted candidate identification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Comprehensive Screening</h4>
                      <p className="text-muted-foreground text-sm">Meticulous evaluation and alignment with your requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Rapid Delivery</h4>
                      <p className="text-muted-foreground text-sm">Quality candidates presented within 48-72 hours</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 animate-scale-in">
              <Card className="bg-primary text-primary-foreground p-8 h-fit">
                <h3 className="text-2xl font-semibold mb-6 text-center">Interview Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Comprehensive candidate insights and data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">CVs, resumes, and relevant documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Holistic recruitment team support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Streamlined hiring process management</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-primary">Interview Process</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      ProMentor LLC is committed to equip the clients with comprehensive insights, offering CVs, 
                      resumes, and relevant data to ensure a thorough evaluation. Our interview procedure takes on a 
                      holistic approach.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Recruiters expertly schedule interviews, prepare candidates, and confirm their attendance, ensuring a 
                      smooth experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Once interviews conclude, ProMentor LLC's recruiting team maintains a proactive role, guiding the process 
                      until the position is filled. We understand the value of streamlining this journey, allowing our clients 
                      to focus on their core business operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      For added convenience, ProMentor LLC extends background check packages upon request. Our comprehensive 
                      offerings, including Reference Checks, E-Verify, California Board of License Verification, and Universal 
                      Background Screening, empower our clients to make informed choices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Did not find what you are searching for?
          </h2>
          <p className="text-xl mb-8 opacity-90">Connect with us:</p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Link to="/contact">Connect with Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;