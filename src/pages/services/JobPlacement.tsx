import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const JobPlacement = () => {
  const roles = ["Software Developer", "Systems Administrator", "Network Engineer", "Data Analyst", "Cybersecurity Analyst", "IT Project Manager", "Database Administrator", "Web Developer", "DevOps Engineer", "Business Intelligence Analyst", "Front End Developer", "QA Tester", "Solutions Architect"];
  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">IT Job Placement</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>IT Job Placement</span>
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
                IT Job Placement Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ProMentor LLC specializes in IT job placements, leveraging our industry expertise to connect 
                exceptional candidates with the right opportunities. Our tailored approach ensures a seamless match 
                between candidate skills and employer requirements, fostering successful partnerships that drive 
                business growth.
              </p>
            </div>

            <div className="mb-16 animate-fade-in">
              
            </div>

            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-8 text-primary text-center">
                Certainly, here are IT roles in which ProMentor LLC has successfully placed candidates:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {roles.map((role, index) => <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Badge variant="secondary" className="text-sm px-4 py-2">
                        {role}
                      </Badge>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Success Stories */}
            <Card className="bg-gradient-section p-8 mb-12 animate-scale-in">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Our Placement Success</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">IT Professionals Placed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">97.8%</div>
                    <div className="text-muted-foreground">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-muted-foreground">Partner Companies</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Placement Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Skills Assessment</h4>
                      <p className="text-muted-foreground text-sm">Comprehensive evaluation of technical and soft skills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Job Matching</h4>
                      <p className="text-muted-foreground text-sm">Precise alignment with suitable opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Interview Preparation</h4>
                      <p className="text-muted-foreground text-sm">Comprehensive coaching and preparation support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Placement Success</h4>
                      <p className="text-muted-foreground text-sm">Ongoing support until successful placement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Find Your Dream Job?</h3>
                <p className="mb-6 text-center opacity-90">
                  Join thousands of IT professionals who have found their perfect role through ProMentor LLC.
                </p>
                <div className="space-y-4">
                  <Button asChild variant="secondary" className="w-full" size="lg">
                    <Link to="/contact">Start Your Journey</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary" size="lg">
                    <Link to="/specialties/interview-support">Interview Support</Link>
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
export default JobPlacement;