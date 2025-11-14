import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/ui/portfolio-card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Link } from "wouter";
import { FolderOpen } from "lucide-react";

const FeaturedProjects = () => {

  // Show 3 flagship projects: Bio-Methanation, FSTP Rangia, Sanitary Landfill
  const featuredProjectIds = ["project-4", "project-13", "project-15"];
  const previewProjects = PORTFOLIO_PROJECTS.filter(project => 
    featuredProjectIds.includes(project.id)
  );

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Showcasing our proven expertise in solid waste management, material recovery facilities, and waste-to-energy solutions in India and beyond
          </p>
        </div>

        {/* Projects Grid - Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 sm:mb-12" data-testid="projects-preview-grid">
          {previewProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Button size="lg" asChild className="w-full sm:w-auto text-white" data-testid="button-view-portfolio">
            <Link href="/portfolio">
              <FolderOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">
                View Complete Portfolio
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
