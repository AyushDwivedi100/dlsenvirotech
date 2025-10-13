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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "stp", label: "STP Systems" },
    { id: "etp", label: "ETP Plants" },
    { id: "industrial", label: "Industrial" },
    { id: "municipal", label: "Municipal" },
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
        title="Water Treatment Projects Portfolio India - 2500+ STP, ETP Case Studies"
        description="Explore 2500+ successful water treatment projects across India. Detailed case studies of STP, ETP, RO plants, and industrial wastewater systems. View our proven track record in sewage and effluent treatment implementations nationwide."
        keywords="water treatment projects India, STP projects, ETP case studies, wastewater treatment portfolio, sewage treatment installations, effluent treatment implementation, industrial water treatment projects, water treatment company track record, successful STP installations India"
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
                Explore our successful water treatment implementations across
                India with proven expertise in STP, ETP, and industrial
                wastewater solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-xl mx-auto">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    15+
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
                    studies and project documentation of our actual
                    installations. Our real project gallery will be available
                    here soon, showcasing our proven expertise in water
                    treatment solutions across India.
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

          {/* Call to Action */}
          <section className="py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Start Your Water Treatment Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our growing list of satisfied clients with a proven track
                record of successful water treatment implementations. Let's
                discuss your project requirements.
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
