import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ZoomIn } from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const Gallery = () => {
  const yearsExperience = getYearsOfExperienceString();
  const galleryImages: any[] = [];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Gallery", url: "https://dlsenvirotech.com/gallery" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  return (
    <>
      <SEOHead
        title="Project Gallery | DLS Envirotech"
        description="View our water treatment project gallery: 200+ STP, ETP, RO plant installations globally. Professional photos of industrial wastewater treatment systems. See our work quality! Request free site visit ☎️ +91-9568572005"
        keywords="environmental solutions project gallery photos India, STP sewage treatment plant installation images, WWTP wastewater treatment facility pictures, MBBR moving bed biofilm reactor photos, FSTP faecal sludge treatment plant images, ETP effluent treatment installation photos, WTP water treatment plant pictures, MBR membrane bioreactor photos, SBR sequencing batch reactor images, ZLD zero liquid discharge system pictures, W2C waste to compost plant photos, C&D construction demolition waste facility images, bio-remediation site photos, MGPS medical gas pipeline installation pictures, PSA oxygen plant generator photos, industrial RO plant installation images, cooling tower system pictures, air pollution control equipment photos, MRF material recovery facility images, bio-methanation biogas plant pictures, solid waste management project gallery, turnkey environmental projects photos, Delhi NCR Mumbai Hyderabad Bengaluru Chennai Kolkata installations, India international projects gallery, professional environmental engineering photography"
        canonical="https://dlsenvirotech.com/gallery"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-muted py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Project Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Explore our extensive portfolio of successfully completed water
                treatment installations across various industries and
                applications globally.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
                    {yearsExperience}
                  </div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">
                    Global
                  </div>
                  <div className="text-muted-foreground">Service Reach</div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Coming Soon */}
          <section className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center py-16 md:py-20 bg-muted rounded-lg">
                <div className="max-w-2xl mx-auto px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                    Real Project Gallery Coming Soon
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                    We are currently preparing our authentic project gallery
                    featuring actual installation photos from our completed
                    water treatment projects globally. These real images will
                    showcase our expertise and quality workmanship.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-8">
                    Check back soon to view our comprehensive collection of real
                    project installations, or contact us directly to discuss
                    your water treatment needs.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact" className="text-white">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us for Project Information
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 sm:py-16 md:py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to See Your Project Here?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Join our gallery of successful installations with a custom water
                treatment solution designed specifically for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/contact" className="text-white">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Get Your Quote</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/portfolio">
                    <span className="text-sm sm:text-base">
                      View Case Studies
                    </span>
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

export default Gallery;
