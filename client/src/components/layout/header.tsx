import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import dlsLogo from "@assets/dls-envirotech-logo.png";

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Services", href: "/services" },
    { name: "Our Clients", href: "/clients" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className="bg-background shadow-lg sticky top-0 z-50 transition-colors"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-4"
            aria-label="DLS Envirotech Corporation - Home"
          >
            <img
              src={dlsLogo}
              alt="DLS Envirotech Corporation - Environmental Solutions Company Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors relative ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
                aria-label={`Navigate to ${item.name}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                {isActive(item.href) && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    aria-hidden="true"
                  ></span>
                )}
              </Link>
            ))}
            <Button asChild size="sm" className="text-base px-4">
              <Link
                href="/quote"
                className="text-white"
                aria-label="Request a quote for environmental solutions"
              >
                Get Quote
              </Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors relative ${
                      isActive(item.href)
                        ? "text-primary font-semibold bg-primary/10 px-3 py-2 rounded-md"
                        : "text-foreground/80 hover:text-primary px-3 py-2 hover:bg-muted rounded-md"
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link
                    href="/quote"
                    onClick={() => setIsOpen(false)}
                    className="text-white"
                    aria-label="Request a quote for environmental solutions"
                  >
                    Get Quote
                  </Link>
                </Button>

                {/* Contact Section */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground/60 mb-4 uppercase tracking-wider">
                    Contact Us
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+919568572005"
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                      data-testid="link-mobile-phone"
                      aria-label="Call DLS Envirotech at +91 9568572005"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">+91 9568572005</span>
                    </a>
                    <a
                      href="mailto:info.dlsenvirotech@gmail.com"
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                      data-testid="link-mobile-email"
                      aria-label="Email DLS Envirotech at info.dlsenvirotech@gmail.com"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        info.dlsenvirotech@gmail.com
                      </span>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/WyJmtqb2RpRi7Wrq6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                      data-testid="link-mobile-address"
                      aria-label="View DLS Envirotech office location on Google Maps - F-25, Sector-6, Noida"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">
                        F-25, Sector-6, Noida 201301 (U.P.)
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
