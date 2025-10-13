import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/ui/portfolio-card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Link } from "wouter";
import { FolderOpen, Phone } from "lucide-react";

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

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Project Portfolio & Case Studies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Explore our successful implementations across India with detailed
            technical specifications and performance metrics
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

        {/* Portfolio Coming Soon */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16 md:py-20 bg-muted rounded-lg">
              <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Real Project Portfolio Coming Soon
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  We are currently updating our portfolio with detailed case
                  studies and project documentation of our actual installations.
                  Our real project gallery will be available here soon,
                  showcasing our proven expertise in water treatment solutions
                  across India.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-8">
                  In the meantime, feel free to contact us to learn more about
                  our successful installations and how we can help with your
                  water treatment requirements.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact" className="text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us for Project Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-10 sm:mt-12">
          <Button size="lg" asChild className="w-full sm:w-auto text-white">
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
