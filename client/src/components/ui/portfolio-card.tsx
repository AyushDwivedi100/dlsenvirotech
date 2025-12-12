import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PortfolioProject } from "@/types";
import { Building2, MapPin, Calendar, Users, Gauge } from "lucide-react";

interface PortfolioCardProps {
  project: PortfolioProject;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Card
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      data-testid={`card-project-${project.id}`}
    >
      {project.image && (
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 md:h-52 object-cover"
          />
        </div>
      )}

      <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <h3
          className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3"
          data-testid={`text-title-${project.id}`}
        >
          {project.title}
        </h3>

        <p
          className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-3"
          data-testid={`text-description-${project.id}`}
        >
          {project.description}
        </p>

        <div className="space-y-2 mt-auto mb-3">
          {project.client && (
            <div className="flex items-start gap-2 text-sm sm:text-base">
              <Users className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">Client:</span>
                <p
                  className="font-semibold text-foreground"
                  data-testid={`text-client-${project.id}`}
                >
                  {project.client}
                </p>
              </div>
            </div>
          )}
          {project.location && (
            <div className="flex items-start gap-2 text-sm sm:text-base">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">Location:</span>
                <p
                  className="font-semibold text-foreground"
                  data-testid={`text-location-${project.id}`}
                >
                  {project.location}
                </p>
              </div>
            </div>
          )}
          {project.capacity && (
            <div className="flex items-start gap-2 text-sm sm:text-base">
              <Gauge className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">Capacity:</span>
                <p
                  className="font-semibold text-foreground"
                  data-testid={`text-capacity-${project.id}`}
                >
                  {project.capacity}
                </p>
              </div>
            </div>
          )}
          {project.technology && (
            <div className="flex items-start gap-2 text-sm sm:text-base">
              <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">
                  Technology:
                </span>
                <p
                  className="font-semibold text-foreground text-sm"
                  data-testid={`text-technology-${project.id}`}
                >
                  {project.technology}
                </p>
              </div>
            </div>
          )}
          {project.completedDate && (
            <div className="flex items-start gap-2 text-sm sm:text-base">
              <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">
                  Completed:
                </span>
                <p
                  className="font-semibold text-foreground"
                  data-testid={`text-completed-${project.id}`}
                >
                  {project.completedDate}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center flex-wrap gap-2 mt-4 pt-3 border-t border-border">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs"
              data-testid={`badge-${tag.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
