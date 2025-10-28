import { useState } from "react";
import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PortfolioCard from "@/components/ui/portfolio-card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const Portfolio = () => {
  const yearsExperience = getYearsOfExperienceString();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "swm", label: "Solid Waste Management" },
    { id: "mrf", label: "Material Recovery Facilities" },
    { id: "fstp", label: "FSTP" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "waste-to-energy", label: "Waste-to-Energy" },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Projects", url: "https://dlsenvirotech.com/portfolio" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  return (
    <>
      <SEOHead
        title="Environmental Solutions Portfolio - 200+ Case Studies | DLS Envirotech"
        description="Explore 200+ successful environmental technology projects in India and beyond. Case studies of water treatment, industrial systems, and waste management implementations. View our proven track record in comprehensive environmental solutions globally."
        keywords="environmental solutions portfolio India, water treatment projects, industrial systems case studies, waste management projects, STP installations, ETP implementations, environmental technology company India, international environmental projects, successful projects portfolio"
        canonical="https://dlsenvirotech.com/portfolio"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-muted to-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Project Portfolio & Case Studies
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
                Explore our successful environmental technology implementations
                in India and beyond, including water treatment, industrial solutions,
                and waste management systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-xl mx-auto">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {yearsExperience}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                    India
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Nationwide Service
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Projects */}
          <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bg-muted p-4 sm:p-6 md:p-8 rounded-lg"
                  data-testid="projects-grid"
                >
                  {filteredProjects.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-muted rounded-lg">
                  <p className="text-lg text-muted-foreground">
                    No projects found for this category.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Start Your Environmental Solutions Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our growing list of satisfied clients with a proven track
                record of successful environmental technology implementations.
                Let's discuss your project requirements.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Start Your Project
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
