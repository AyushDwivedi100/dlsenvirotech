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
          className="w-full h-48 object-cover"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge 
              key={tag}
              variant={tag === "STP" ? "default" : tag === "ETP" ? "secondary" : "outline"}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Capacity:</span>
            <span className="font-semibold text-foreground">{project.capacity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Technology:</span>
            <span className="font-semibold text-foreground">{project.technology}</span>
          </div>
          {project.location && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span className="font-semibold text-foreground">{project.location}</span>
            </div>
          )}
          {project.industry && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Industry:</span>
              <span className="font-semibold text-foreground">{project.industry}</span>
            </div>
          )}
        </div>
        
        <Button className="w-full">
          View Detailed Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
