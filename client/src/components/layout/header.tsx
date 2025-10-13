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
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" },
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
          <Link href="/" className="flex items-center space-x-4">
            <img
              src={dlsLogo}
              alt="DLS Envirotech Corporation Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
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
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
            <Button asChild size="sm" className="text-base px-4">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
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
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link
                    href="/quote"
                    onClick={() => setIsOpen(false)}
                    className="text-white"
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
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">info.dlsenvirotech@gmail.com</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=F-25,+Sector-6,+Noida+201301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                      data-testid="link-mobile-address"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">F-25, Sector-6, Noida 201301 (U.P.)</span>
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
