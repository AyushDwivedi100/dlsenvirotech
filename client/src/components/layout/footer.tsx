import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import dlsLogo from "@assets/- Copy_1760176701700.PNG";

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
    <footer className="bg-industrial-900 dark:bg-industrial-950 text-white py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={dlsLogo} 
                alt="DLS Envirotech Corporation Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-industrial-300 dark:text-industrial-400 mb-6 leading-relaxed">
              Leading provider of comprehensive water treatment solutions with 15+ years of expertise in 
              environmental technology. Serving clients across 22 countries with innovative and sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-industrial-800 dark:bg-industrial-700 p-3 rounded-lg hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-industrial-800 dark:bg-industrial-700 p-3 rounded-lg hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-industrial-800 dark:bg-industrial-700 p-3 rounded-lg hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-industrial-800 dark:bg-industrial-700 p-3 rounded-lg hover:bg-primary transition-colors">
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
                    className="text-industrial-300 dark:text-industrial-400 hover:text-white transition-colors"
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
                    className="text-industrial-300 dark:text-industrial-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-industrial-800 dark:border-industrial-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-industrial-400 dark:text-industrial-500 text-sm">
              © 2024 DLS Envirotech Corporation. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 mr-16">
              <ThemeToggle />
              <Link href="/sitemap" className="text-industrial-400 dark:text-industrial-500 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
