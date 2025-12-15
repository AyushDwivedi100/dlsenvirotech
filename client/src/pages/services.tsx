import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DIVISIONS } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createServiceSchema,
} from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
  return Icon || LucideIcons.Settings;
};

const Services = () => {
  const yearsExperience = getYearsOfExperienceString();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Services", url: "https://dlsenvirotech.com/services" },
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "What environmental solutions does DLS Envirotech provide?",
      answer:
        "DLS Envirotech provides comprehensive environmental solutions including water treatment (STP, ETP, WTP, WWTP, FSTP, MBBR, RO systems), industrial systems (cooling towers, PSA oxygen plants, air pollution control, air towers, MGPS), waste management (solid waste management, material recovery facilities, waste to compost systems, C&D waste management), and bio-remediation. We offer complete turnkey solutions with installation and maintenance across India.",
    },
    {
      question: "How long does it take to install environmental systems?",
      answer:
        "Installation time varies based on system size and complexity. Small residential STPs typically take 2-4 weeks, while large industrial plants may require 3-6 months for complete installation. Industrial systems and waste management facilities are assessed individually. We provide detailed project timelines during consultation.",
    },
    {
      question: "Do you provide maintenance services for all your systems?",
      answer:
        "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) and 24/7 support for all our environmental systems including water treatment plants, industrial solutions, and waste management facilities. Our maintenance services include regular inspections, consumable replacement, performance optimization, and emergency repairs.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve diverse industries including pharmaceuticals, textiles, chemicals, food & beverage, hospitality, real estate, manufacturing, hospitals, educational institutions, IT parks, power plants, and municipal corporations in India and internationally for water treatment, industrial systems, and waste management solutions.",
    },
    {
      question: "Are your systems compliant with environmental regulations?",
      answer:
        "Yes, all our environmental solutions are designed to meet and exceed Indian environmental regulations including CPCB guidelines, state pollution control board norms, and ISO certifications. We ensure full compliance for discharge standards, air quality norms, and waste management regulations.",
    },
  ]);

  const environmentalSolutionsSchema = createServiceSchema(
    "Environmental Solutions",
    "Comprehensive environmental technology solutions including water treatment (STP, ETP, WTP, WWTP, FSTP, MBBR, RO), industrial systems (cooling towers, PSA oxygen plants, air pollution control, MGPS), waste management (solid waste plants, material recovery facilities, waste to compost systems, C&D waste management), and bio-remediation for industrial and municipal applications",
    "Environmental Services"
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

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    green: "bg-green-500/10 text-green-600 dark:text-green-400",
    cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  };

  return (
    <>
      <SEOHead
        title="Our Services | DLS Envirotech"
        description={`WWTP, MBBR, STP, FSTP, W2C, C&D waste, MGPS, bio-remediation services. CPCB approved. ${yearsExperience} experience, 200+ installations. Turnkey projects India.`}
        keywords="wastewater treatment plant WWTP, MBBR moving bed biofilm reactor, sewage treatment plant services, STP installation India, FSTP services, faecal sludge treatment, MBBR technology India, MBR membrane bioreactor, SBR sequencing batch reactor, waste to compost systems W2C, bio-remediation services India, medical gas pipeline system MGPS, construction demolition waste management C&D, packaged STP plant, solid waste management services, bio-methanation plant, material recovery facility MRF, effluent treatment plant ETP, wastewater treatment services, industrial ETP installation, cooling tower manufacturer, PSA oxygen plant, air pollution control, septage treatment, water recycling services, zero liquid discharge, STP O&M services, CPCB compliant STP, environmental engineering services, waste to compost plant, sanitary landfill development, turnkey environmental projects India"
        canonical="https://dlsenvirotech.com/services"
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
                Comprehensive Environmental Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
                Our company is organized into 5 specialized divisions to deliver
                advanced water treatment, industrial solutions, and waste
                management systems for industrial and municipal applications.
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

          {/* Divisions Grid */}
          <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Our 5 Divisions
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our specialized divisions offering comprehensive environmental solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {DIVISIONS.map((division) => {
                  const DivisionIcon = getIcon(division.icon);
                  return (
                    <Card
                      key={division.id}
                      className="group hover-elevate cursor-pointer h-full"
                      data-testid={`card-division-${division.id}`}
                    >
                      <Link href={`/services/${division.id}`}>
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-3 rounded-lg ${colorClasses[division.color] || colorClasses.blue}`}>
                              <DivisionIcon className="h-6 w-6" />
                            </div>
                            <Badge variant="outline">Division {division.number}</Badge>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {division.title}
                          </CardTitle>
                          <CardDescription>
                            {division.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {division.services.map((service) => (
                              <Badge key={service.id} variant="secondary" className="text-xs">
                                {service.shortTitle}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center text-sm text-primary font-medium">
                            Explore Division
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  );
                })}
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
                Our expert engineers can design and implement the perfect
                environmental system for your specific requirements. Contact us for
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
                  <Link href="/clients">
                    <span className="text-sm md:text-base">
                      View Our Clients
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
