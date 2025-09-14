import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Award, Users, CheckCircle, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">About Us</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-8">
                <span className="text-primary font-semibold text-lg">About Company</span>
                <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 text-foreground">
                  Let us be your trusted partner
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                ProMentor LLC stands out as a premier job-seeking service, distinguished by 
                our extensive nationwide searches within the United States. Our mission is to identify 
                the most suitable candidates for a wide range of job roles, leveraging our in-depth 
                experience in U.S. immigration law.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We extend our reach beyond national borders to place qualified individuals with U.S., UK, 
                and USC visas. When fully integrated, we create a difference, spanning offer letters to 
                background verification in HR departments and services, enabling us to integrity within 
                the most challenging staffing needs.
              </p>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-section rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Team</h3>
                      <p className="text-muted-foreground">Experienced professionals dedicated to your success</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Personalized Approach</h3>
                      <p className="text-muted-foreground">Tailored solutions for every candidate's unique needs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Proven Results</h3>
                      <p className="text-muted-foreground">97.8% success rate with 500+ placements annually</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Promise */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                content: "With unwavering dedication and expertise, we evaluate candidates in-depth through personalized interviews through years of their projects and career goals, ensuring superior talent it integrates seamlessly with business values and recognizing the intricacy of corporations with increased speed gained with industry-wide expertise. Our network of attentive job seekers with a platform that not only secures opportunities but also business reigns thorough nutrition unique and significant recognition upon their professional journeys."
              },
              {
                icon: Eye,
                title: "Our Vision",
                content: "ProMentor LLC's aim in dilate eye to a communicated is to understand IT services and enable acquired achievement boatsphere bringing chains, and improvisation in business environment and lasting success, forging enduring connections and sharing formulation and centric spotlight, at our supporting policy is our profound highlighting summarizing dedication to excellence and authentic period, that help maintain reduced defects in our conditioning right across the USA. This year, our goal is to serve over 600+ candidates in diverse technical positions, nurturing growth and innovation."
              },
              {
                icon: Handshake,
                title: "Brand Promise",
                content: "Our brand promise at ProMentor LLC is to realize your ambitions. We are committed to investing your already job, serving the highest knowledge and promising your same. With years of industry knowledge and expertise, our team is laser-equipped to guide you through every step of your career journey, ensuring that you receive the expertise level of support and guidance. Our every step toward a fulfilling career for you."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors duration-300">
                <CardContent className="p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Friendly Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-primary font-semibold text-lg">ProMentor LLC</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 text-foreground">
                Payment Friendly
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Navigating your path toward success is simple even more accessible with ProMentor LLC's 
                diverse payment plans and enrollment options. We understand the importance of early journeys and 
                offer flexible solutions that cater to individuals at every stage of their professional journey.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our enrollment timeline that aligns seamlessly with your schedule, we can get you 
                started! Our aim is to ensure that the pursuit of your dream job is the which need 
                fulfils as possible.
              </p>
              <div className="space-y-4">
                {[
                  "Flexible payment plans tailored to your needs",
                  "Multiple enrollment options available",
                  "No upfront costs for qualified candidates",
                  "Success-based payment structure"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="bg-gradient-section p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link to="/services/career-guidance">View Our Services</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-scale-in">
              <Card className="bg-primary text-primary-foreground p-8">
                <h3 className="text-2xl font-semibold mb-6">Our Team Expertise</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Expert Recruiters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Companies Partnered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">97.8%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <span className="text-primary font-semibold text-lg">ProMentor LLC's</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 text-foreground">
                Experienced Team
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our strategic and experienced team at ProMentor LLC. Comprising 
                experienced recruiters, skilled hiring professionals, experienced CV experts, and 
                dedicated interview supporters, we strong unified in our commitment to your 
                success.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With years of industry knowledge and expertise, our team is laser-equipped 
                to guide you through every step of your journey, ensuring that you receive the 
                highest level of support and guidance. Your application are at the forefront of our 
                efforts, offering expertise that to meet your unique goals in hand.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;