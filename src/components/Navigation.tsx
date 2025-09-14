import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram,
  Home,
  Briefcase,
  Users,
  Info,
  UserPlus,
  MessageCircle,
  CheckCircle,
  BookOpen,
  UserCheck,
  Search,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const specialtiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { title: "Recruitment & Interview Process", path: "/services/recruitment", icon: Search },
    { title: "IT Job Placement", path: "/services/job-placement", icon: Target },
    { title: "Career Guidance", path: "/services/career-guidance", icon: BookOpen },
  ];

  const specialties = [
    { title: "Interview Support", path: "/specialties/interview-support", icon: CheckCircle },
    { title: "Training", path: "/specialties/training", icon: BookOpen },
    { title: "Staffing", path: "/specialties/staffing", icon: UserCheck },
  ];

  const mainNavItems = [
    { title: "Home", path: "/", icon: Home },
    { title: "About Us", path: "/about", icon: Info },
    { title: "Refer and Earn", path: "/refer-earn", icon: UserPlus },
    { title: "Contact Us", path: "/contact", icon: MessageCircle },
  ];

  const NavLink = ({ 
    to, 
    children, 
    icon: Icon, 
    className = "" 
  }: { 
    to: string; 
    children: React.ReactNode; 
    icon?: any; 
    className?: string;
  }) => (
    <Link 
      to={to} 
      className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative px-3 py-2 rounded-lg ${
        isActive(to) 
          ? 'text-primary-foreground bg-primary font-semibold shadow-md' 
          : 'text-foreground hover:bg-secondary/80'
      } ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </Link>
  );

  const handleDropdownEnter = (dropdownType: 'services' | 'specialties') => {
    // Clear all timeouts to prevent any pending closures
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    if (specialtiesTimeoutRef.current) {
      clearTimeout(specialtiesTimeoutRef.current);
      specialtiesTimeoutRef.current = null;
    }
    
    // Close the other dropdown immediately and open the current one
    if (dropdownType === 'services') {
      setSpecialtiesOpen(false);
      setServicesOpen(true);
    } else {
      setServicesOpen(false);
      setSpecialtiesOpen(true);
    }
  };

  const handleDropdownLeave = (dropdownType: 'services' | 'specialties') => {
    const timeoutRef = dropdownType === 'services' ? servicesTimeoutRef : specialtiesTimeoutRef;
    const setOpen = dropdownType === 'services' ? setServicesOpen : setSpecialtiesOpen;
    
    // Delay closing by 300ms to allow mouse movement to dropdown
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const DropdownMenu = ({ 
    title, 
    items, 
    isOpen, 
    dropdownType
  }: { 
    title: string; 
    items: { title: string; path: string; icon: any }[]; 
    isOpen: boolean; 
    dropdownType: 'services' | 'specialties';
  }) => (
    <div 
      className="relative"
      onMouseEnter={() => handleDropdownEnter(dropdownType)}
      onMouseLeave={() => handleDropdownLeave(dropdownType)}
    >
      <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-secondary/80">
        <Briefcase className="h-4 w-4" />
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50 animate-slide-up">
          <div className="w-72 bg-background border border-border rounded-xl shadow-corporate backdrop-blur-sm overflow-hidden">
            <div className="p-1">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary hover:scale-105 rounded-lg transition-all duration-300 group"
                  onClick={() => {
                    if (dropdownType === 'services') {
                      setServicesOpen(false);
                    } else {
                      setSpecialtiesOpen(false);
                    }
                  }}
                >
                  <item.icon className="h-4 w-4 transition-colors duration-300 group-hover:text-primary" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+918849475626</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>onboarding@promentorllc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>SHERIDAN WY 82801</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://in.linkedin.com/company/pro-mentor-llc" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 cursor-pointer hover:opacity-80" />
              </a>
              <a href="https://www.instagram.com/promentorllc?igsh=emZqMXFubWdjOWpp" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 cursor-pointer hover:opacity-80" />
              </a>
              <a href="mailto:onboarding@promentorllc.com">
                <Mail className="h-4 w-4 cursor-pointer hover:opacity-80" />
              </a>
              <a href="tel:+918849475626">
                <Phone className="h-4 w-4 cursor-pointer hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/30084cf3-1406-4e7a-9689-5a5c9a0eef41.png" 
                alt="Pro Mentor LLC - Achieve Your Dreams With Us" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavLink to="/" icon={Home}>Home</NavLink>
              <DropdownMenu 
                title="Our Services" 
                items={services}
                isOpen={servicesOpen}
                dropdownType="services"
              />
              <DropdownMenu 
                title="Specialties" 
                items={specialties}
                isOpen={specialtiesOpen}
                dropdownType="specialties"
              />
              <NavLink to="/about" icon={Info}>About Us</NavLink>
              <NavLink to="/refer-earn" icon={UserPlus}>Refer and Earn</NavLink>
              <NavLink to="/contact" icon={MessageCircle}>Contact Us</NavLink>
            </nav>

            {/* Mobile Navigation */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden hover:bg-primary hover:text-primary-foreground border-border hover:border-primary hover:scale-110 transition-all duration-300 rounded-lg shadow-sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-l border-border p-0 overflow-hidden">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border bg-secondary/30">
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/30084cf3-1406-4e7a-9689-5a5c9a0eef41.png" 
                        alt="Pro Mentor LLC - Achieve Your Dreams With Us" 
                        className="h-10 w-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Navigation Menu */}
                  <div className="flex-1 overflow-y-auto -webkit-overflow-scrolling-touch">
                    <div className="p-6 space-y-6">
                      <Link 
                        to="/" 
                        className={`block py-4 px-4 text-base transition-colors ${
                          isActive("/") ? 'font-semibold text-foreground' : 'text-foreground hover:text-primary'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        Home
                      </Link>
                      
                      {/* Services Section */}
                      <div>
                        <div 
                          className="flex items-center justify-between py-4 px-4 cursor-pointer"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          <span className="text-base font-medium text-foreground">Our Services</span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-4 space-y-2">
                            {services.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block py-3 px-4 text-sm transition-colors ${
                                  isActive(item.path) ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground'
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Specialties Section */}
                      <div>
                        <div 
                          className="flex items-center justify-between py-4 px-4 cursor-pointer"
                          onClick={() => setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)}
                        >
                          <span className="text-base font-medium text-foreground">Specialties</span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${mobileSpecialtiesOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileSpecialtiesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-4 space-y-2">
                            {specialties.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block py-3 px-4 text-sm transition-colors ${
                                  isActive(item.path) ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground'
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Other Pages */}
                      <Link 
                        to="/about" 
                        className={`block py-4 px-4 text-base transition-colors ${
                          isActive("/about") ? 'font-semibold text-foreground' : 'text-foreground hover:text-primary'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        About Us
                      </Link>
                      
                      <Link 
                        to="/refer-earn" 
                        className={`block py-4 px-4 text-base transition-colors ${
                          isActive("/refer-earn") ? 'font-semibold text-foreground' : 'text-foreground hover:text-primary'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        Refer and Earn
                      </Link>
                      
                      <Link 
                        to="/contact" 
                        className={`block py-4 px-4 text-base transition-colors ${
                          isActive("/contact") ? 'font-semibold text-foreground' : 'text-foreground hover:text-primary'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        Contact Us
                      </Link>
                      
                      <div className="pb-8"></div>
                    </div>
                  </div>
                  
                  {/* Footer Contact Info */}
                  <div className="border-t border-border pt-6 pb-4 space-y-3 bg-secondary/20">
                    <div className="px-4 text-sm text-muted-foreground space-y-3">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+918849475626</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-xs">onboarding@promentorllc.com</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>SHERIDAN WY 82801</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-4 pt-2">
                      <a href="https://in.linkedin.com/company/pro-mentor-llc" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300" />
                      </a>
                      <a href="https://www.instagram.com/promentorllc?igsh=emZqMXFubWdjOWpp" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;