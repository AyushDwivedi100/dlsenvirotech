import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Youtube, Map } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import dlsLogo from "@assets/dls-envirotech-logo.png";

const Footer = () => {
  const services = [
    "Sewage Treatment Plants",
    "Effluent Treatment Plants", 
    "RO & DM Plants",
    "Cooling Tower Systems",
    "Solid Waste Management",
    "Turnkey Solutions"
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <footer className="bg-industrial-900 text-white py-12 md:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={dlsLogo} 
                alt="DLS Envirotech Corporation Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Leading provider of comprehensive water treatment solutions with 15+ years of expertise in 
              environmental technology. Serving clients across 22 countries with innovative and sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-industrial-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-industrial-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-industrial-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-industrial-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-industrial-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} DLS Envirotech Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-white/10 hover:text-white"
              >
                <Link href="/sitemap" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  <span className="text-sm">Sitemap</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
