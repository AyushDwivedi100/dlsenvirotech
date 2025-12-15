import { Link } from "wouter";
import { Linkedin, Facebook, Youtube, Map } from "lucide-react";
import { SiX } from "react-icons/si";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import dlsLogo from "@assets/dls-envirotech-logo.png";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const Footer = () => {
  const yearsExperience = getYearsOfExperienceString();
  const services = [
    "Sewage Treatment Plants",
    "Effluent Treatment Plants",
    "RO & DM Plants",
    "Cooling Tower Systems",
    "Solid Waste Management",
    "Turnkey Solutions",
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-industrial-100 dark:bg-industrial-900 text-foreground py-10 sm:py-12 md:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4 sm:mb-6">
              <img
                src={dlsLogo}
                alt="DLS Envirotech Corporation - Environmental Solutions Company Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-foreground/70 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
              Leading provider of comprehensive water treatment solutions with
              {yearsExperience} years of expertise in environmental technology.
              Serving clients worldwide with innovative and sustainable
              solutions.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#"
                className="bg-industrial-200 dark:bg-industrial-800 text-foreground p-2.5 sm:p-3 rounded-lg hover:bg-linkedin hover:text-white transition-colors"
                aria-label="Follow DLS Envirotech on LinkedIn for company updates and industry insights"
                data-testid="link-linkedin"
              >
                <Linkedin
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#"
                className="bg-industrial-200 dark:bg-industrial-800 text-foreground p-2.5 sm:p-3 rounded-lg hover:bg-black hover:text-white transition-colors"
                aria-label="Follow DLS Envirotech on X (Twitter) for latest news and updates"
                data-testid="link-x-twitter"
              >
                <SiX className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="bg-industrial-200 dark:bg-industrial-800 text-foreground p-2.5 sm:p-3 rounded-lg hover:bg-facebook hover:text-white transition-colors"
                aria-label="Follow DLS Envirotech on Facebook for environmental solutions and project updates"
                data-testid="link-facebook"
              >
                <Facebook
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#"
                className="bg-industrial-200 dark:bg-industrial-800 text-foreground p-2.5 sm:p-3 rounded-lg hover:bg-youtube hover:text-white transition-colors"
                aria-label="Watch DLS Envirotech project videos and demonstrations on YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                    aria-label={`Learn more about ${service}`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                    aria-label={`Navigate to ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-300 dark:border-industrial-800 mt-6 sm:mt-8 md:mt-12 pt-5 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3 sm:gap-4">
            <p className="text-foreground/60 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              © {new Date().getFullYear()} DLS Envirotech Corporation. All
              rights reserved.
            </p>
            <div className="flex items-center gap-2 order-1 sm:order-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary hover:text-white h-9 px-3"
              >
                <Link
                  href="/sitemap"
                  className="flex items-center gap-1.5 sm:gap-2"
                  aria-label="View website sitemap for easy navigation"
                >
                  <Map
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm">Sitemap</span>
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
