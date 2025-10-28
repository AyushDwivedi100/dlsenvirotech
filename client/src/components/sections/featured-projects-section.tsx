import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/ui/portfolio-card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const FeaturedProjectsSection = () => {
  const featuredProjectIds = ["project-4", "project-13", "project-15"];
  
  const featuredProjects = PORTFOLIO_PROJECTS.filter(project => 
    featuredProjectIds.includes(project.id)
  );

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our flagship environmental technology projects showcasing innovation, 
            sustainability, and excellence in execution.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"
          data-testid="featured-projects-grid"
        >
          {featuredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild data-testid="button-view-all-projects">
            <Link href="/portfolio" className="text-white">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
