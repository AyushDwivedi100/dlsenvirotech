import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2" data-testid="topbar-phone">
              <Phone className="h-3 w-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2" data-testid="topbar-email">
              <Mail className="h-3 w-3" />
              <span>contact@dlsenvirotech.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2" data-testid="topbar-address">
            <MapPin className="h-3 w-3" />
            <span>123 Industrial Way, Water City, WC 12345</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;