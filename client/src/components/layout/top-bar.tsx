import { Phone, Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a href="tel:+919568572005" className="flex items-center gap-2 hover:text-white/90 transition-colors" data-testid="topbar-phone">
              <Phone className="h-3 w-3" />
              <span>+919568572005</span>
            </a>
            <a href="mailto:info.dlsenvirotech@gmail.com" className="flex items-center gap-2 hover:text-white/90 transition-colors" data-testid="topbar-email">
              <Mail className="h-3 w-3" />
              <span>info.dlsenvirotech@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="https://maps.app.goo.gl/WyJmtqb2RpRi7Wrq6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/90 transition-colors" 
              data-testid="topbar-address"
            >
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">F-25, Sector-6, Noida 201301 (U.P.)</span>
              <span className="sm:hidden">Noida, U.P.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;