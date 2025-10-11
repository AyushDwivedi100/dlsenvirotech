import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact-section";
import { SEOHead, organizationSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

const Contact = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Contact Us", url: "https://dlsenvirotech.com/contact" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEOHead
        title="Contact Water Treatment Experts - Free Consultation for STP, ETP & Industrial Solutions"
        description="Contact DLS Envirotech for professional water treatment consultation. Expert engineers available 24/7. Call +91-9568572005 or email contact@dlsenvirotech.com for STP, ETP, and industrial wastewater solutions. Free site visit and quote!"
        keywords="contact water treatment company, water treatment consultation, STP expert, ETP consultant, industrial wastewater expert, water treatment engineer, free water treatment consultation India"
        canonical="https://dlsenvirotech.com/contact"
        schema={combinedSchema}
      />
      
      <div className="min-h-screen bg-white dark:bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-900 mb-4 md:mb-6">
                Contact Our Water Treatment Experts
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-industrial-600 max-w-3xl mx-auto mb-6 md:mb-8">
                Get professional consultation for your water treatment requirements. Our team of experts 
                is ready to provide customized solutions for your specific needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm md:text-base text-industrial-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-secondary mb-2">24hrs</div>
                  <div className="text-sm md:text-base text-industrial-600">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-accent mb-2">Free</div>
                  <div className="text-sm md:text-base text-industrial-600">Consultation</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
