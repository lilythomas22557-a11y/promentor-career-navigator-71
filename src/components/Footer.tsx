import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/30084cf3-1406-4e7a-9689-5a5c9a0eef41.png" 
                alt="Pro Mentor LLC - Achieve Your Dreams With Us" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            
            <div className="space-y-3 text-sm">
              <h3 className="font-semibold text-lg mb-4">OUR LOCATION</h3>
              <div>30 N GOULD ST 46374</div>
              <div>SHERIDAN WY 82801</div>
              
              <div className="flex items-center gap-2 mt-4">
                <Phone className="h-4 w-4" />
                <span>+15186754455</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>onboarding@promentorllc.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <a href="https://in.linkedin.com/company/pro-mentor-llc" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.instagram.com/promentorllc?igsh=emZqMXFubWdjOWpp" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">NAVIGATION</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:opacity-80 transition-opacity">Home</Link>
              <Link to="/about" className="block hover:opacity-80 transition-opacity">About Us</Link>
              <Link to="/refer-earn" className="block hover:opacity-80 transition-opacity">Refer and Earn</Link>
              <Link to="/contact" className="block hover:opacity-80 transition-opacity">Contact Us</Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">OUR SERVICES</h3>
            <div className="space-y-2 text-sm">
              <Link to="/services/recruitment" className="block hover:opacity-80 transition-opacity">
                Recruitment & Interview process
              </Link>
              <Link to="/services/job-placement" className="block hover:opacity-80 transition-opacity">
                IT Job Placement
              </Link>
              <Link to="/services/career-guidance" className="block hover:opacity-80 transition-opacity">
                Career Guidance
              </Link>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold text-lg mb-4">SPECIALTIES</h3>
            <div className="space-y-2 text-sm">
              <Link to="/specialties/interview-support" className="block hover:opacity-80 transition-opacity">
                Interview Support
              </Link>
              <Link to="/specialties/training" className="block hover:opacity-80 transition-opacity">
                Training
              </Link>
              <Link to="/specialties/staffing" className="block hover:opacity-80 transition-opacity">
                Staffing
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          Copyright © 2023, ProMentor LLC, all right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;