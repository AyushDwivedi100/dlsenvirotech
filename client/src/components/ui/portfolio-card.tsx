import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PortfolioProject } from "@/types";

interface PortfolioCardProps {
  project: PortfolioProject;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
        />
      </div>
      
      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge 
              key={tag}
              variant={tag === "STP" ? "default" : tag === "ETP" ? "secondary" : "outline"}
              className="text-xs sm:text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
          {project.title}
        </h3>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-3 sm:mb-4">
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-muted-foreground">Capacity:</span>
            <span className="font-semibold text-foreground text-right">{project.capacity}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-muted-foreground">Technology:</span>
            <span className="font-semibold text-foreground text-right">{project.technology}</span>
          </div>
          {project.location && (
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-semibold text-foreground text-right">{project.location}</span>
            </div>
          )}
          {project.industry && (
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Industry:</span>
              <span className="font-semibold text-foreground text-right">{project.industry}</span>
            </div>
          )}
        </div>
        
        <Button className="w-full text-sm sm:text-base h-9 sm:h-10">
          View Detailed Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
