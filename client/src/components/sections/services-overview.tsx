import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DIVISIONS } from "@/constants/constants";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
  return Icon || LucideIcons.Settings;
};

const colorClasses: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  green: "bg-green-500/10 text-green-600 dark:text-green-400",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
};

const ServicesOverview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Our 5 Specialized Divisions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive environmental technology solutions including water
            treatment (WWTP, MBBR, STP, FSTP), industrial systems (MGPS, cooling
            towers, PSA oxygen), waste management (W2C, C&D waste, MRF), and
            bio-remediation tailored for industrial and municipal applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DIVISIONS.map((division) => {
            const DivisionIcon = getIcon(division.icon);
            return (
              <Card
                key={division.id}
                className="group hover-elevate cursor-pointer h-full"
                data-testid={`card-division-home-${division.id}`}
              >
                <Link href={`/services/${division.id}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg ${colorClasses[division.color] || colorClasses.blue}`}>
                        <DivisionIcon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">Division {division.number}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {division.shortTitle}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {division.description.split('.')[0]}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {division.services.slice(0, 2).map((service) => (
                        <Badge key={service.id} variant="secondary" className="text-xs">
                          {service.shortTitle}
                        </Badge>
                      ))}
                      {division.services.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{division.services.length - 2} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-primary font-medium">
                      Explore Division
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
