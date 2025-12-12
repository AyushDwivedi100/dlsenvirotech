import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceType } from "@/types";
import { Link } from "wouter";
import {
  Droplets,
  Building2,
  Recycle,
  Gauge,
  Thermometer,
  Settings,
  ArrowRight,
  Check,
  Waves,
  Leaf,
  Sprout,
  Trash2,
  Stethoscope,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceType;
}

const iconMap = {
  Droplets,
  Building2,
  Recycle,
  Gauge,
  Thermometer,
  Settings,
  Waves,
  Leaf,
  Sprout,
  Trash2,
  Stethoscope,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent =
    iconMap[service.icon as keyof typeof iconMap] || Settings;

  return (
    <Card 
      className="group bg-muted hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
      role="article"
      aria-label={`${service.title} service offering - ${service.description}`}
      data-testid={`card-service-${service.id}`}
    >
      <CardContent className="p-5 sm:p-6 md:p-8">
        <div 
          className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        >
          <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="text-sm sm:text-base text-muted-foreground space-y-2 mb-4 sm:mb-6" aria-label={`Key features of ${service.title}`}>
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
