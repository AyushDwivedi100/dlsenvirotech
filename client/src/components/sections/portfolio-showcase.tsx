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
    { id: "stp", label: "STP Systems" },
    { id: "etp", label: "ETP Plants" },
    { id: "wtp", label: "WTP Systems" },
    { id: "fstp", label: "FSTP Systems" },
    { id: "mrf", label: "MRF Systems" },
    { id: "ats", label: "Air Tower Systems" },
    { id: "psa", label: "PSA Oxygen Generator" },
    { id: "wwtp", label: "Wastewater Treatment Plants" },
    { id: "iwf", label: "Industrial Water Filtration" },
    { id: "wsp", label: "Water Softening Plant" },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Portfolio & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful implementations across 22 countries with detailed technical specifications and performance metrics
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="font-semibold"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/portfolio">
              <FolderOpen className="mr-2 h-5 w-5" />
              View Complete Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
