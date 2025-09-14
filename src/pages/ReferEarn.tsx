import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Smartphone, Gift, CheckCircle, DollarSign, Star } from "lucide-react";

const ReferEarn = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Refer and Earn</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Refer and Earn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              How it Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Earn rewards by referring qualified candidates to ProMentor LLC. Help others find their dream jobs while earning attractive bonuses.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                step: "01",
                title: "Give us",
                subtitle: "the REFERENCE", 
                icon: Users,
                description: "Refer qualified candidates to ProMentor LLC through our simple referral process.",
                color: "text-purple-600"
              },
              {
                step: "02", 
                title: "Make them",
                subtitle: "ENROLL with us",
                icon: Smartphone,
                description: "Help your referral complete our enrollment process and get started with our services.",
                color: "text-orange-600"
              },
              {
                step: "03",
                title: "Get sign up", 
                subtitle: "BONUS",
                icon: Gift,
                description: "Receive your signup bonus when your referral enrolls, plus placement bonuses when they get hired.",
                color: "text-green-600"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-corporate transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-muted-foreground/20 mb-4">{step.step}</div>
                  <div className={`w-20 h-20 ${step.color === 'text-purple-600' ? 'bg-purple-100' : step.color === 'text-orange-600' ? 'bg-orange-100' : 'bg-green-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className={`text-lg font-bold mb-4 ${step.color}`}>{step.subtitle}</p>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Card className="bg-primary-dark border-primary-foreground/20 animate-scale-in">
            <CardContent className="p-8 bg-white text-foreground">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Bonus / Credits</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">If a candidate enrolls in </span>
                    <Badge variant="secondary" className="mx-1">Starter</Badge>
                    <span className="font-semibold"> or </span>
                    <Badge variant="secondary" className="mx-1">Premium Plan</Badge>
                    <span className="font-semibold"> you will get </span>
                    <span className="text-yellow-300 font-bold">$100</span>
                    <span className="font-semibold"> signup bonus and after their placement, you will get another </span>
                    <span className="text-yellow-300 font-bold">$200</span>
                    <span className="font-semibold">.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">If a candidate enrolls in </span>
                    <Badge variant="secondary" className="mx-1">Elite</Badge>
                    <span className="font-semibold"> or </span>
                    <Badge variant="secondary" className="mx-1">Special Plan</Badge>
                    <span className="font-semibold"> you will get </span>
                    <span className="text-yellow-300 font-bold">$200</span>
                    <span className="font-semibold"> signup bonus and after their placement, you will get another </span>
                    <span className="text-yellow-300 font-bold">$200</span>
                    <span className="font-semibold">.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground animate-fade-in">Terms & Conditions</h2>
            
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Referral bonuses will be credited to the referee's account within 30 days of the referred candidate's enrollment confirmation.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">
                  The placement bonus will be credited within 15 days of the successful placement confirmation.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Referral bonuses are applicable only when the referred candidate enrolls in the <strong>Starter, Elite, Premium, or Special Plans</strong> as specified on the website at the time of enrollment.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground">
                  The referee will be eligible for the additional placement bonus only after the referred candidate has successfully completed the placement process and has been hired by a company through our platform. The placement status will be verified by our team before issuing the bonus.
                </p>
              </div>
            </div>

            {/* Success Stats */}
            <Card className="bg-gradient-section mt-12 p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-center">Referral Program Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
                  <div className="text-muted-foreground">Total Bonuses Paid</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Successful Referrals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Referral Success Rate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Star className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Start Earning Today!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our referral program and help others while earning attractive bonuses. The more you refer, the more you earn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">Start Referring Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/services/career-guidance">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferEarn;