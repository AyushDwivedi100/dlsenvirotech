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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "stp", label: "STP Systems" },
    { id: "etp", label: "ETP Plants" },
    { id: "industrial", label: "Industrial" },
    { id: "municipal", label: "Municipal" },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <>
      <Helmet>
        <title>Project Portfolio - Water Treatment Case Studies | DLS Envirotech</title>
        <meta name="description" content="Explore our successful water treatment project implementations across 22 countries. Detailed case studies of STP, ETP, and industrial water treatment systems." />
        <meta name="keywords" content="water treatment projects, case studies, STP projects, ETP implementation, industrial water treatment portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-900 mb-4 md:mb-6">
                Project Portfolio & Case Studies
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-industrial-600 max-w-3xl mx-auto mb-6 md:mb-8">
                Explore our successful implementations across 22 countries with detailed technical 
                specifications and performance metrics from over 2,500 completed systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">2500+</div>
                  <div className="text-sm md:text-base text-industrial-600">Systems Installed</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">22</div>
                  <div className="text-sm md:text-base text-industrial-600">Countries Served</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm md:text-base text-industrial-600">Success Rate</div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Filter and Grid */}
          <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className="font-semibold text-xs sm:text-sm md:text-base"
                    size="sm"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-industrial-600 text-lg">
                    No projects found for the selected filter.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-industrial-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-industrial-900 mb-6">
                Ready to Start Your Water Treatment Project?
              </h2>
              <p className="text-lg text-industrial-600 mb-8">
                Join our growing list of satisfied clients with a proven track record of successful 
                water treatment implementations. Let's discuss your project requirements.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
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
