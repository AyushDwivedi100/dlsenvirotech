import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceType } from "@/types";
import { Link } from "wouter";
import { 
  Droplets, 
  Factory, 
  Recycle, 
  Gauge, 
  Thermometer, 
  Settings,
  ArrowRight,
  Check
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceType;
}

const iconMap = {
  Droplets,
  Factory,
  Recycle,
  Gauge,
  Thermometer,
  Settings,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;

  return (
    <Card className="group bg-industrial-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-8">
        <div className="bg-primary text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <IconComponent className="h-8 w-8" />
        </div>
        
        <h3 className="text-2xl font-bold text-industrial-900 mb-4">
          {service.title}
        </h3>
        
        <p className="text-industrial-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="text-industrial-600 space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="link" asChild className="p-0 text-primary font-semibold">
          <Link href="/services">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
