import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Building, FileText, Clock, Rocket } from "lucide-react";
const Staffing = () => {
  const roles = ["Data Analyst", "Business Analyst", "Software Developer", "Web Developer", "AWS Cloud Engineer", "Python Developer", "DevOps Engineer", "QA Automation / Manual", "Project Manager", "Cyber Security Analyst"];
  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Staffing</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Staffing</span>
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
                Comprehensive Staffing Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our holistic staffing services encompass a multi-faceted approach to sourcing, selecting, and nurturing 
                the finest candidates tailored to our client's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="animate-fade-in">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Beyond candidate selection, ProMentor LLC extends our commitment by offering training and development 
                  initiatives to augment the skills and elevate the performance of existing candidates. Our unwavering 
                  dedication to continuous growth and other critical domains contributes to fostering a robust and 
                  productive workforce.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our specialised expertise spans data analysis and operations, business analyst roles, data science, 
                  artificial intelligence, and other critical domains. This specialisation equips our clients with the 
                  niche knowledge essential for thriving in today's dynamic market landscape.
                </p>
              </div>

              <Card className="bg-gradient-section p-8 animate-scale-in">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Staffing Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Target className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">Strategic talent sourcing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">Comprehensive candidate evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">Ongoing skill development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Building className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">Long-term partnership focus</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mb-16 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Overall, ProMentor LLC provide tailored solutions that precisely meet our clients' needs through 
                the strategic identification and retention of apt talent, businesses can not only attain their objectives 
                but also flourish within their respective industries.
              </p>
            </div>

            {/* Staffing Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[{
              title: "Permanent Staffing",
              description: "Full-time employee placement with comprehensive screening and evaluation processes.",
              icon: Users
            }, {
              title: "Contract Staffing",
              description: "Flexible contract-based staffing solutions for project-specific requirements.",
              icon: FileText
            }, {
              title: "Temporary Staffing",
              description: "Short-term staffing solutions to meet immediate business demands and seasonal needs.",
              icon: Clock
            }, {
              title: "Staff Augmentation",
              description: "Enhance your existing team with specialized skills and expertise as needed.",
              icon: Rocket
            }].map((service, index) => <Card key={index} className="text-center hover:shadow-corporate transition-shadow duration-300 animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>)}
            </div>

            {/* Roles Covered */}
            <div className="animate-slide-up mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                Staffing Roles We Cover
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                Our staffing expertise spans across various technical and analytical roles:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {roles.map((role, index) => <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-4 text-center">
                      <Badge variant="outline" className="text-xs px-3 py-2 text-center w-full">
                        {role}
                      </Badge>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Specialization Areas */}
            <Card className="bg-gradient-section border-0 shadow-corporate p-12 mb-16 animate-fade-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Our Specialization Areas</h3>
                  <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Delivering excellence across cutting-edge technology domains with specialized expertise and proven results
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3 text-foreground">Data Analysis</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Advanced analytics and data science professionals driving insights</p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3 text-foreground">Artificial Intelligence</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">AI/ML engineers and data scientists shaping the future</p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3 text-foreground">Cloud Computing</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Cloud architects and DevOps specialists enabling scalability</p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3 text-foreground">Software Development</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Full-stack and specialized developers building solutions</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Staffing Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Staffing Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements Analysis</h4>
                      <p className="text-muted-foreground">Deep understanding of your specific staffing needs and organizational culture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Talent Sourcing</h4>
                      <p className="text-muted-foreground">Strategic sourcing using our extensive network and advanced recruitment techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Rigorous Screening</h4>
                      <p className="text-muted-foreground">Comprehensive evaluation including technical, cultural, and behavioral assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Seamless Integration</h4>
                      <p className="text-muted-foreground">Ongoing support to ensure smooth onboarding and long-term success</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-section p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Partner with ProMentor LLC</h3>
                <p className="mb-6 text-center text-muted-foreground">
                  Let us help you build a strong, skilled workforce that drives your business forward.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contact">Discuss Staffing Needs</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link to="/services/recruitment">View Recruitment Process</Link>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Success Metrics */}
            <Card className="bg-gradient-section p-8 mt-16 animate-scale-in">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-8">Staffing Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">300+</div>
                    <div className="text-muted-foreground text-sm">Successful Placements</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-muted-foreground text-sm">Partner Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">96%</div>
                    <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
                    <div className="text-muted-foreground text-sm">Average Response Time</div>
                  </div>
                </div>
              </div>
            </Card>
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
export default Staffing;