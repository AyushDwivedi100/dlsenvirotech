import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/ui/portfolio-card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Link } from "wouter";
import { FolderOpen } from "lucide-react";

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "swm", label: "Solid Waste Management" },
    { id: "mrf", label: "Material Recovery Facilities" },
    { id: "waste-to-energy", label: "Waste-to-Energy" },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our Completed Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Showcasing our proven expertise in solid waste management, material recovery facilities, and waste-to-energy solutions across India
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="font-semibold text-xs sm:text-sm h-8 sm:h-9 md:h-10 px-3 sm:px-4"
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 sm:mb-12" data-testid="projects-grid">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-muted rounded-lg">
            <p className="text-lg text-muted-foreground">No projects found for this category.</p>
          </div>
        )}

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

export default PortfolioShowcase;
