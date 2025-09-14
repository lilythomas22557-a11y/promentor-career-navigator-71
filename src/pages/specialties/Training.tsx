import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Monitor, Users, Clock } from "lucide-react";
const Training = () => {
  const roles = ["Software Developer", "Systems Administrator", "Network Engineer", "Data Analyst", "Cybersecurity Analyst", "IT Project Manager", "Database Administrator", "Web Developer", "DevOps Engineer", "Data Engineer", "Financial Analyst", "Business Intelligence Analyst", "Front End Developer", "QA Tester", "Solutions Architect"];
  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Training</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Training</span>
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
                Comprehensive Training Programs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">ProMentor LLC's training programs encompass an extensive curriculum that delves into a wide spectrum of subjects vital for career growth. From data analysis and operational strategies to business analyst roles, data science, artificial intelligence, and beyond, our training aims to empower candidates with a robust skill set.
We recognize the importance of flexible learning, thus providing various options including traditional classroom-based sessions, online courses, and self-paced modules. This flexibility allows candidates to learn at their convenience while adapting to their busy schedules.

            </p>
            </div>

            <div className="mb-16 animate-fade-in">
              
              
            </div>

            {/* Training Modes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[{
              icon: Monitor,
              title: "Online Courses",
              description: "Self-paced learning with interactive modules and comprehensive resources.",
              features: ["24/7 Access", "Interactive Content", "Progress Tracking", "Certification"]
            }, {
              icon: Users,
              title: "Classroom Sessions",
              description: "Traditional instructor-led training with hands-on practice and peer interaction.",
              features: ["Expert Instructors", "Hands-on Labs", "Group Projects", "Real-time Support"]
            }, {
              icon: Clock,
              title: "Self-Paced Modules",
              description: "Flexible learning modules that adapt to your schedule and learning pace.",
              features: ["Flexible Timing", "Personalized Path", "Bite-sized Lessons", "Mobile Access"]
            }, {
              icon: BookOpen,
              title: "Blended Learning",
              description: "Combination of online and classroom training for optimal learning experience.",
              features: ["Best of Both Worlds", "Practical Application", "Mentorship", "Project Work"]
            }].map((mode, index) => <Card key={index} className="hover:shadow-corporate transition-shadow duration-300 animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <mode.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{mode.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{mode.description}</p>
                    <div className="space-y-1">
                      {mode.features.map((feature, idx) => <div key={idx} className="flex items-center justify-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Training Curriculum */}
            <div className="mb-16 animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                Training Curriculum Areas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-section p-6">
                  <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
                  <div className="space-y-3">
                    {["Data Analysis & Visualization", "Artificial Intelligence & Machine Learning", "Cloud Computing (AWS, Azure, GCP)", "DevOps & Automation", "Cybersecurity Fundamentals", "Database Management", "Software Development"].map((skill, idx) => <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>)}
                  </div>
                </Card>

                <Card className="bg-gradient-section p-6">
                  <h4 className="text-xl font-semibold mb-4">Professional Skills</h4>
                  <div className="space-y-3">
                    {["Business Analysis Techniques", "Project Management", "Leadership & Team Management", "Communication Skills", "Problem-Solving Methodologies", "Industry Best Practices", "Career Development"].map((skill, idx) => <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>)}
                  </div>
                </Card>
              </div>
            </div>

            {/* Roles Covered */}
            <div className="animate-slide-up mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                Training for These Roles
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {roles.map((role, index) => <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-3 text-center">
                      <Badge variant="secondary" className="text-xs px-2 py-1 text-center w-full">
                        {role}
                      </Badge>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Training Stats */}
            <Card className="bg-primary text-primary-foreground p-8 mb-12 animate-scale-in">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-8">Training Program Success</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">2000+</div>
                    <div className="text-sm opacity-90">Students Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Training Modules</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-90">Completion Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">88%</div>
                    <div className="text-sm opacity-90">Job Placement Rate</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Training Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Skills Assessment</h4>
                      <p className="text-muted-foreground">Evaluate your current skill level and identify learning objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Customized Curriculum</h4>
                      <p className="text-muted-foreground">Personalized training plan based on your career goals and current skills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Hands-on Learning</h4>
                      <p className="text-muted-foreground">Practical training with real-world projects and scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Certification & Placement</h4>
                      <p className="text-muted-foreground">Industry-recognized certification and job placement assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-section p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Upgrade Your Skills?</h3>
                <p className="mb-6 text-center text-muted-foreground">
                  Join our comprehensive training programs and accelerate your career growth with industry-relevant skills.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contact">Enroll in Training</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link to="/services/career-guidance">Career Guidance</Link>
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
export default Training;