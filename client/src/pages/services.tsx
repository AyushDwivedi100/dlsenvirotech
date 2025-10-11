import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceCard from "@/components/ui/service-card";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import { SEOHead, organizationSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

const Services = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Services", url: "https://dlsenvirotech.com/services" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEOHead
        title="Water Treatment Services - STP, ETP & Industrial Wastewater Solutions"
        description="Professional water treatment services: Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), RO systems, and industrial wastewater solutions. ISO certified with 2500+ installations across 22 countries. Get free consultation!"
        keywords="water treatment services, STP plant, ETP plant, sewage treatment plant, effluent treatment plant, industrial water treatment, wastewater treatment, RO plant, water purification system, biological treatment, zero liquid discharge, water treatment company India"
        canonical="https://dlsenvirotech.com/services"
        schema={combinedSchema}
      />
      
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-background to-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Professional Water Treatment Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
                Comprehensive environmental technology solutions designed to meet the highest standards 
                of water treatment for industrial and municipal applications.
              </p>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Get Custom Solution</span>
                </Link>
              </Button>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Need a Custom Water Treatment Solution?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8">
                Our expert engineers can design and implement the perfect water treatment system 
                for your specific requirements. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    <span className="text-sm md:text-base">Schedule Consultation</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/portfolio">
                    <span className="text-sm md:text-base">View Case Studies</span>
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
