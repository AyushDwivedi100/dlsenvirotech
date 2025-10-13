import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceCard from "@/components/ui/service-card";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createServiceSchema,
} from "@/components/seo/seo-head";

const Services = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Services", url: "https://dlsenvirotech.com/services" },
  ]);

  const faqSchema = createFAQSchema([
    {
      question:
        "What environmental solutions does DLS Envirotech provide?",
      answer:
        "DLS Envirotech provides comprehensive environmental solutions including water treatment (STP, ETP, WTP, RO systems, FSTP), industrial systems (cooling towers, PSA oxygen plants, air pollution control, air towers), and waste management (solid waste management plants, material recovery facilities). We offer complete turnkey solutions with installation and maintenance across India.",
    },
    {
      question: "How long does it take to install environmental systems?",
      answer:
        "Installation time varies based on system size and complexity. Small residential STPs typically take 2-4 weeks, while large industrial plants may require 3-6 months for complete installation. Industrial systems and waste management facilities are assessed individually. We provide detailed project timelines during consultation.",
    },
    {
      question:
        "Do you provide maintenance services for all your systems?",
      answer:
        "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) and 24/7 support for all our environmental systems including water treatment plants, industrial solutions, and waste management facilities. Our maintenance services include regular inspections, consumable replacement, performance optimization, and emergency repairs.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve diverse industries including pharmaceuticals, textiles, chemicals, food & beverage, hospitality, real estate, manufacturing, hospitals, educational institutions, IT parks, power plants, and municipal corporations across India for water treatment, industrial systems, and waste management solutions.",
    },
    {
      question:
        "Are your systems compliant with environmental regulations?",
      answer:
        "Yes, all our environmental solutions are designed to meet and exceed Indian environmental regulations including CPCB guidelines, state pollution control board norms, and ISO certifications. We ensure full compliance for discharge standards, air quality norms, and waste management regulations.",
    },
  ]);

  const environmentalSolutionsSchema = createServiceSchema(
    "Environmental Solutions",
    "Comprehensive environmental technology solutions including water treatment (STP, ETP, WTP, RO, FSTP), industrial systems (cooling towers, PSA oxygen plants, air pollution control), and waste management (solid waste plants, material recovery facilities) for industrial and municipal applications",
    "Environmental Services",
  );

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      breadcrumbSchema,
      faqSchema,
      environmentalSolutionsSchema,
    ],
  };

  return (
    <>
      <SEOHead
        title="Environmental Solutions India - Water Treatment, Industrial Systems & Waste Management | DLS Envirotech"
        description="Leading environmental technology company in India: Water treatment (STP, ETP, RO), industrial solutions (cooling towers, PSA oxygen, air pollution control), waste management systems. 2500+ installations, 15+ years expertise, ISO certified. ☎️ +91-9568572005"
        keywords="environmental solutions India, water treatment services, industrial solutions, waste management, STP plant, ETP plant, cooling towers, PSA oxygen plants, air pollution control, solid waste management, material recovery facilities, environmental technology company India"
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
                Comprehensive Environmental Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
                Advanced water treatment, industrial solutions, and waste management systems designed to meet the highest environmental standards for industrial and municipal applications.
              </p>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact" className="text-white">
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">
                    Get Custom Solution
                  </span>
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
                Need a Custom Solution?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8">
                Our expert engineers can design and implement the perfect water
                treatment system for your specific requirements. Contact us for
                a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact" className="text-white">
                    <span className="text-sm md:text-base">
                      Schedule Consultation
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href="/portfolio">
                    <span className="text-sm md:text-base">
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

export default Services;
