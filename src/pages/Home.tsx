import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  UserCheck, 
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-professionals.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-[1.4]">
                Keep Believing,<br />
                You'll Get Hired
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90">
                Professional IT Consulting and Staffing Partner – ProMentor LLC
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <Button asChild size="lg" variant="blue" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto pulse-blue">
                  <Link to="/contact">Connect with us</Link>
                </Button>
                <Button asChild size="lg" variant="blueOutline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto hover-lift">
                  <Link to="/refer-earn">Refer & Earn</Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in float">
              <img 
                src={heroImage} 
                alt="Professional IT consultants in discussion" 
                className="rounded-2xl shadow-corporate w-full h-auto hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-blue-gradient">ProMentor LLC Services</h2>
            <p className="text-base sm:text-lg text-primary/80 max-w-2xl mx-auto">
              Comprehensive IT consulting and staffing solutions for your career growth
            </p>
          </div>

          {/* First row - 3 main services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: Building,
                title: "IT Job Placement",
                description: "Connect with top IT opportunities across finance, healthcare, and technology sectors.",
                link: "/services/job-placement",
              },
              {
                icon: Target,
                title: "Career Guidance",
                description: "Get personalized coaching, market insights, and professional roadmaps tailored to your goals.",
                link: "/services/career-guidance",
              },
              {
                icon: UserCheck,
                title: "Interview Support",
                description: "Comprehensive interview preparation and one-on-one coaching to boost your confidence and success rate.",
                link: "/specialties/interview-support",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white hover:scale-[1.05] hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 animate-fade-in shadow-service hover:shadow-2xl hover:shadow-blue-500/20 shimmer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-gradient text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <service.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <Button asChild variant="blue" className="rounded-lg px-6 py-3 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row - 2 additional services (center aligned) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Training",
                description: "Extensive curriculum covering data analysis, AI, cloud computing, and more.",
                link: "/specialties/training",
              },
              {
                icon: Users,
                title: "Staffing",
                description: "End-to-end staffing solutions with talent sourcing and development initiatives.",
                link: "/specialties/staffing",
              },
            ].map((service, index) => (
              <Card
                key={`additional-${index}`}
                className="group bg-white hover:scale-[1.05] hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 animate-fade-in shadow-service hover:shadow-2xl hover:shadow-blue-500/20 shimmer"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-gradient text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <service.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <Button asChild variant="blue" className="rounded-lg px-6 py-3 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Why Choose ProMentor LLC?</h2>
            <p className="text-lg text-muted-foreground">
              ProMentor LLC extends a comprehensive suite of services, encompassing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Staffing Excellence",
                description: "ProMentor LLC excels in IT recruitment and staffing across finance, healthcare, and technology sectors with proven success."
              },
              {
                icon: Target,
                title: "Career Guidance",
                description: "Get personalized coaching, market insights, and professional roadmaps tailored to your unique career goals."
              },
              {
                icon: Award,
                title: "Job Guarantee",
                description: "Flexible payment options combined with career assurance plans to ensure your success in the job market."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:scale-105 transition-all duration-500 animate-slide-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-6 hover:animate-pulse transition-all duration-300">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Let ProMentor LLC Find You the Right Job
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ProMentor LLC serves as your trusted compass in the intricate world of careers, spanning a multitude of domains including STEM (Science, Technology, Engineering, and Mathematics), Green card holders, US citizens, and EAD holders.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                As your dedicated partner, we embark on an in-depth journey to meticulously evaluate each candidate through comprehensive interviews, ensuring a seamless alignment with your organization's ethos and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="blue" className="hover-lift">
                  <Link to="/contact">Request a Callback</Link>
                </Button>
                <Button asChild variant="blueOutline" size="lg" className="hover-scale">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="p-8 bg-gradient-section">
                <div className="space-y-4">
                  {[
                    "Comprehensive candidate evaluation",
                    "Industry expertise across multiple domains",
                    "Dedicated partnership approach",
                    "Seamless organization alignment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Success Story</h2>
            <p className="text-xl opacity-90">
              Delivering exceptional results year after year
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { year: "2021", placements: "60+", label: "Placements" },
              { year: "2022", placements: "180+", label: "Placements" },
              { year: "2023", placements: "300+", label: "Placements" },
              { year: "2024", placements: "523+", label: "Placements" }
            ].map((metric, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <AnimatedCounter 
                  value={metric.placements}
                  duration={2000 + index * 200}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                />
                <div className="text-sm sm:text-lg opacity-90 mb-1">{metric.label}</div>
                <div className="text-xs sm:text-sm opacity-80">{metric.year}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-2xl font-semibold">
              <TrendingUp className="h-8 w-8" />
              <AnimatedCounter 
                value="97.8%"
                duration={2500}
                className="inline"
              />
              <span className="ml-1">Placement Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Candidates Placed In</h2>
            <p className="text-lg text-muted-foreground">
              Leading companies trust ProMentor LLC for their talent needs
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { name: "Walmart", src: "/lovable-uploads/cb4607f3-ff93-4592-a67e-f6f32fa24fbc.png" },
                  { name: "Accenture", src: "/lovable-uploads/86fd27cd-4c26-4ab7-b95c-82d476f72e74.png" },
                  { name: "Microsoft", src: "/lovable-uploads/bbd38817-ef41-43df-b09d-d48a1805612c.png" },
                  { name: "GEICO", src: "/lovable-uploads/1771c777-f119-416b-ab27-a9bc01964577.png" },
                  { name: "Discover", src: "/lovable-uploads/e1d66013-7084-4f7a-9ca5-4fe3dc171343.png" },
                  { name: "PayPal", src: "/lovable-uploads/4beb97d8-a018-4058-b80a-c812e0ef0e43.png" },
                  { name: "Meta", src: "/lovable-uploads/6b9246a1-78b6-4b06-a348-f249e444e56d.png" },
                  { name: "Intel", src: "/lovable-uploads/b8f4c966-a4cf-474c-bd3a-01ad3f63be08.png" },
                  { name: "Fidelity", src: "/lovable-uploads/1ef0396b-b758-4086-89ca-8275c223f8ca.png" },
                  { name: "SomnoMed", src: "/lovable-uploads/e70b5bfd-27a9-4070-a10b-e51b979938c3.png" },
                  { name: "MAERSK", src: "/lovable-uploads/9a0e5397-5204-4beb-a80c-b0256d408ef8.png" },
                  { name: "Dish Wireless", src: "/lovable-uploads/fe0887f2-cdae-4d06-8070-57b615bfcb18.png" },
                  { name: "TETRA TECH", src: "/lovable-uploads/d2fb965f-8dd0-4782-bf41-9a8dc4560ba3.png" },
                  { name: "Waters", src: "/lovable-uploads/4560654e-7894-4d0d-ba64-50089b8c853d.png" },
                  { name: "Index Analytics", src: "/lovable-uploads/1f611f50-c59d-43c7-bca0-bde64fb6d976.png" },
                  { name: "LAUSD Unified", src: "/lovable-uploads/36fb2936-87f5-40cb-8063-b46fc139c064.png" },
                  { name: "Parkland", src: "/lovable-uploads/fc059f8d-658f-4291-a2d6-216786cdd70a.png" },
                  { name: "Infinite", src: "/lovable-uploads/a825cf09-6b37-4134-a2d6-e01da036840f.png" },
                  { name: "Amazon", src: "/lovable-uploads/d1da3609-32a4-4cbc-b592-10a4d3c6c3d7.png" },
                ].map((company, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="p-4">
                      <div className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-400">
                        <img 
                          src={company.src} 
                          alt={`${company.name} logo`}
                          className="h-16 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                          style={{ maxWidth: '180px' }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Candidate Testimonials - Auto Rotating */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary/60 font-medium mb-2">Candidate Testimonials</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful candidates who found their dream careers through ProMentor LLC
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    name: "Arjun Sharma",
                    role: "Full Stack Developer",
                    company: "Microsoft",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    testimonial: "ProMentor LLC transformed my career journey! Their personalized guidance and interview preparation helped me secure my dream position at Microsoft.",
                    rating: 5
                  },
                  {
                    name: "Priya Patel",
                    role: "Data Scientist", 
                    company: "Amazon",
                    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                    testimonial: "I cannot thank ProMentor LLC enough for their exceptional support throughout my job search. Their market insights gave me the confidence to excel.",
                    rating: 5
                  },
                  {
                    name: "Rajesh Kumar",
                    role: "DevOps Engineer",
                    company: "Google", 
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    testimonial: "The comprehensive training and career guidance from ProMentor LLC was outstanding. They provided tailored solutions that led me to my current position.",
                    rating: 5
                  },
                  {
                    name: "Sarah Wilson",
                    role: "Cloud Architect",
                    company: "AWS",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                    testimonial: "ProMentor LLC's expertise in cloud technologies and their dedicated mentorship helped me transition into my dream role as a Cloud Architect at AWS.",
                    rating: 5
                  },
                  {
                    name: "Michael Chen",
                    role: "Software Engineer",
                    company: "Meta",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
                    testimonial: "The interview preparation and technical coaching I received from ProMentor LLC was exceptional. They helped me land my role at Meta within 3 months.",
                    rating: 5
                  },
                  {
                    name: "Lisa Rodriguez",
                    role: "Product Manager",
                    company: "Tesla",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                    testimonial: "ProMentor LLC's career guidance program opened doors I never thought possible. Their strategic approach helped me transition into product management at Tesla.",
                    rating: 4.5
                  },
                  {
                    name: "David Kim",
                    role: "Machine Learning Engineer", 
                    company: "OpenAI",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    testimonial: "The AI and machine learning training from ProMentor LLC was cutting-edge. Their industry connections helped me secure my position at OpenAI.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="group bg-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border-none shadow-lg h-full">
                        <CardContent className="p-6 text-center relative h-full flex flex-col">
                          <div className="absolute top-4 right-4 opacity-20">
                            <Quote className="h-6 w-6 text-primary" />
                          </div>
                          
                          <div className="relative mb-4">
                            <Avatar className="w-16 h-16 mx-auto border-4 border-primary/10">
                              <AvatarImage
                                src={testimonial.image}
                                alt={`${testimonial.name} profile`}
                              />
                              <AvatarFallback>
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-1 text-primary">{testimonial.name}</h3>
                          <p className="text-sm font-medium text-primary/70 mb-1">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground mb-3">at {testimonial.company}</p>
                          
                          <div className="flex justify-center mb-4">
                            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {testimonial.rating % 1 !== 0 && (
                              <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
                            )}
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed text-sm italic flex-grow">
                            "{testimonial.testimonial}"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/contact">Share Your Success Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals who have found their dream jobs through ProMentor LLC. 
              Let us guide you to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;