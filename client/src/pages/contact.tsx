import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact-section";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";

const Contact = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Contact Us", url: "https://dlsenvirotech.com/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact DLS Envirotech Corporation",
    description: "Get in touch with DLS Envirotech for water treatment, industrial systems, and waste management solutions. 24/7 expert support available.",
    url: "https://dlsenvirotech.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "DLS Envirotech Corporation",
      telephone: "+91-9568572005",
      email: "info.dlsenvirotech@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "F-25, Sector-6",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9568572005",
        contactType: "customer service",
        areaServed: ["IN", "Worldwide"],
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    },
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema, contactPageSchema],
  };

  return (
    <>
      <SEOHead
        title="Contact Us | DLS Envirotech"
        description="STP, FSTP & waste management consultation. 24/7 expert engineers. Noida: F-25, Sector-6. Call +91-9568572005. Free site visit & quote. India & international."
        keywords="contact DLS Envirotech Noida environmental solutions, STP sewage treatment plant inquiry quote, WWTP wastewater treatment consultation, MBBR moving bed biofilm reactor inquiry, FSTP faecal sludge treatment consultation India, ETP WTP quote request, MBR SBR ZLD system inquiry, waste to compost W2C plant consultation, C&D construction demolition waste management inquiry, bio-remediation solutions contact, MGPS medical gas pipeline consultation hospitals, PSA oxygen plant generator inquiry, industrial RO reverse osmosis consultation, cooling tower installation quote, air pollution control equipment inquiry, MRF material recovery facility consultation, bio-methanation plant inquiry, free site visit consultation, 24/7 environmental support, CPCB NABL approved contractor contact, DLS Envirotech Noida office F-25 Sector-6, call +91-9568572005, UP Jal Nigam contractor, Delhi NCR Mumbai Hyderabad Bengaluru Chennai Kolkata Pune, international environmental services inquiry"
        canonical="https://dlsenvirotech.com/contact"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Contact Our Environmental Solutions Experts
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
                Get professional consultation for your water treatment,
                industrial systems, or waste management requirements. Our team
                of experts is ready to provide customized solutions for your
                specific needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Support Available
                  </div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-secondary mb-2">
                    24hrs
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Response Time
                  </div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-accent mb-2">
                    Free
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    Consultation
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-background">
            <ContactSection />
          </section>

          {/* Map Section */}
          <section className="bg-muted py-12 sm:py-14 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Visit Our Office
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Find us on the map and visit our office for a personal
                  consultation.
                </p>
              </div>
              <div className="max-w-6xl mx-auto">
                <div
                  className="relative w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d218.95132058230632!2d77.3212035!3d28.5931423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a2e27d47d5%3A0x1c361a852fb0f86d!2sDLS%20ENVIROTECH%20CORPORATION%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1760335331290!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DLS Envirotech Corporation Office Location"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
