import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DIVISIONS } from "@/constants/constants";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";

const getIcon = (iconName: string) => {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[iconName];
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
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Our 5 Divisions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized divisions offering comprehensive
            environmental solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DIVISIONS.map((division) => {
            const DivisionIcon = getIcon(division.icon);
            return (
              <Card
                key={division.id}
                className="group bg-muted cursor-pointer h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50"
                data-testid={`card-division-${division.id}`}
              >
                <Link href={`/services/${division.id}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-3 rounded-lg ${colorClasses[division.color] || colorClasses.blue}`}
                      >
                        <DivisionIcon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">
                        Division {division.number}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {division.title}
                    </CardTitle>
                    <CardDescription>{division.description}</CardDescription>
                    {division.highlights && division.highlights.length > 0 && (
                      <div className="mt-4 p-3 rounded-lg border border-primary">
                        <ul className="space-y-2">
                          {division.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-foreground"
                            >
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {division.services.map((service) => (
                        <Badge
                          key={service.id}
                          variant="secondary"
                          className="text-xs"
                        >
                          {service.shortTitle}
                        </Badge>
                      ))}
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
