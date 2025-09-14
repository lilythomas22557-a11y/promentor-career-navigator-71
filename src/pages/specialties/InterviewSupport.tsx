import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Video, Users, FileText } from "lucide-react";
const InterviewSupport = () => {
  const roles = ["Java Developer", "Python Developer", "Network Engineer", "Data Analyst", "Cybersecurity Analyst", "IT Project Manager", "Database Administrator", "Web Developer", "Financial Analyst", "DevOps Engineer", "Data Engineer", "Business Intelligence Analyst", "Front End Developer"];
  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Interview Support</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Interview Support</span>
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
                Comprehensive Interview Support
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">ProMentor LLC extends a crucial service to job seekers through our comprehensive interview support offerings. With a diverse range of resources including articles, webinars, videos, virtual coaching sessions, and live workshops, we equip candidates with a robust toolkit to excel in interviews and elevate their chances of success.
Our commitment extends to personalized attention, offering one-on-one coaching and resume reviews. This tailored approach allows individuals to polish their application materials and enhance their interview prowess.</p>
            </div>

            <div className="mb-16 animate-fade-in">
              
              
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[{
              icon: MessageSquare,
              title: "One-on-One Coaching",
              description: "Personalized coaching sessions to improve your interview skills and boost confidence.",
              features: ["Mock interviews", "Personalized feedback", "Industry-specific preparation", "Anxiety management"]
            }, {
              icon: FileText,
              title: "Resume Reviews",
              description: "Expert review and optimization of your resume to make a strong first impression.",
              features: ["ATS optimization", "Content enhancement", "Format improvements", "Keyword integration"]
            }, {
              icon: Video,
              title: "Webinars & Videos",
              description: "Access to comprehensive video resources covering various interview scenarios.",
              features: ["Interview techniques", "Common questions", "Body language tips", "Virtual interview skills"]
            }, {
              icon: Users,
              title: "Live Workshops",
              description: "Interactive group sessions to practice interview skills in a supportive environment.",
              features: ["Group practice sessions", "Peer feedback", "Role-playing exercises", "Networking opportunities"]
            }].map((service, index) => <Card key={index} className="hover:shadow-corporate transition-shadow duration-300 animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Roles Supported */}
            <div className="animate-slide-up mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                Roles We Support
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                Our interview support services cover a wide range of technical and professional roles:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {roles.map((role, index) => <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-4 text-center">
                      <Badge variant="outline" className="text-xs px-3 py-1">
                        {role}
                      </Badge>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Success Stories */}
            <Card className="bg-gradient-section p-8 mb-12 animate-fade-in">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Interview Success Rate</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">94%</div>
                    <div className="text-muted-foreground">Interview Success Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-muted-foreground">Candidates Coached</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Mock Interviews Conducted</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Support Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Initial Assessment</h4>
                      <p className="text-muted-foreground">Evaluate your current interview skills and identify areas for improvement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Customized Preparation</h4>
                      <p className="text-muted-foreground">Tailored coaching sessions based on your specific role and industry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mock Interviews</h4>
                      <p className="text-muted-foreground">Practice with realistic interview scenarios and receive detailed feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ongoing Support</h4>
                      <p className="text-muted-foreground">Continuous coaching and feedback until you land your desired position</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Boost Your Interview Confidence</h3>
                <p className="mb-6 text-center opacity-90">
                  Join our interview support program and increase your chances of landing your dream job.
                </p>
                <div className="space-y-4">
                  <Button asChild variant="secondary" className="w-full" size="lg">
                    <Link to="/contact">Schedule Interview Coaching</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary" size="lg">
                    <Link to="/services/job-placement">Explore Job Opportunities</Link>
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
export default InterviewSupport;