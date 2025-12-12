import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Phone,
  Award,
  Users,
  Globe,
  Zap,
  Wrench,
  Briefcase,
  FileText,
  Settings as SettingsIcon,
  CheckCircle2,
  Shield,
} from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const About = () => {
  const yearsExperience = getYearsOfExperienceString();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "About Us", url: "https://dlsenvirotech.com/about" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Started with a vision to provide innovative environmental solutions for water treatment, industrial systems, and waste management",
    },
    {
      year: "2012",
      title: "Pan-India Expansion",
      description:
        "Expanded operations nationwide with successful installations across multiple Indian states",
    },
    {
      year: "2015",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2015 certification for quality management",
    },
    {
      year: "2018",
      title: "1000th System",
      description:
        "Milestone achievement of 1000 successful system installations",
    },
    {
      year: "2021",
      title: "Green Technology",
      description:
        "Launched eco-friendly and energy-efficient environmental solutions",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description:
        "Serving clients globally with 200+ successful installations and expanding international service network",
    },
  ];

  const serviceCategories = [
    {
      icon: Briefcase,
      title: "Construction of Environmental Plants",
      description:
        "Complete design, engineering, and construction services for STP, ETP, FSTP, MRF, and other environmental infrastructure projects.",
    },
    {
      icon: Wrench,
      title: "Operation & Maintenance (O&M)",
      description:
        "Comprehensive operation and maintenance services ensuring optimal performance and regulatory compliance of environmental systems.",
    },
    {
      icon: FileText,
      title: "Consultation & Design",
      description:
        "Expert consultation and custom design services for environmental projects tailored to specific client requirements and site conditions.",
    },
    {
      icon: SettingsIcon,
      title: "Upgradation & Retrofitting",
      description:
        "Enhancement and modernization of existing environmental systems to improve efficiency, capacity, and regulatory compliance.",
    },
    {
      icon: CheckCircle2,
      title: "Regulatory Compliance Assistance",
      description:
        "Support services for meeting CPCB, SPCB, and other environmental regulatory requirements with documentation and reporting.",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description:
        "Quality Management System certification ensuring consistent service excellence",
    },
    {
      icon: Shield,
      title: "CPCB Approved",
      description:
        "Central Pollution Control Board approval for environmental projects",
    },
    {
      icon: Shield,
      title: "SPCB Compliance",
      description:
        "State Pollution Control Board compliance for all installations",
    },
    {
      icon: CheckCircle2,
      title: "Capacity Certified",
      description:
        "Certified for STP up to 15 MLD and various environmental systems",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Committed to delivering the highest quality environmental solutions including water treatment, industrial systems, and waste management with rigorous testing and quality control.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Building long-term relationships with our clients through exceptional service and ongoing support.",
    },
    {
      icon: Globe,
      title: "Environmental Responsibility",
      description:
        "Developing sustainable solutions that protect our environment for future generations.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously investing in R&D to develop cutting-edge environmental technologies and methodologies.",
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us | DLS Envirotech"
        description={`${yearsExperience} comprehensive environmental solutions expertise. ISO 9001:2015, CPCB approved. 200+ installations since 2015. Serving municipalities & industries across 4+ countries with 2 manufacturing facilities.`}
        keywords={`about DLS Envirotech Corporation, ISO 9001:2015 certified environmental company India, ${yearsExperience} years wastewater treatment expertise, CPCB SPCB approved contractor, sewage treatment plant STP 15 MLD capacity, WWTP wastewater treatment plant design, MBBR moving bed biofilm reactor specialist, FSTP faecal sludge treatment plant, ETP effluent treatment plant, CETP common effluent treatment, WTP water treatment plant, RWH rain water harvesting, MBR membrane bioreactor technology, SBR sequencing batch reactor systems, Extended Aeration technology, ZLD zero liquid discharge systems, waste to compost W2C plant, waste to energy systems, bio methanation plants, C&D construction demolition waste management recycling, bio-remediation soil water treatment oil spills heavy metals, MGPS medical gas pipeline system hospital infrastructure, PSA oxygen plant generator manufacturer, industrial RO reverse osmosis plant, water cooling tower systems, absorption cooling systems, process cooling solutions, boilers heaters steam generation, turnkey power plants, solar energy solutions, air pollution control equipment, specialty environmental chemicals, MRF material recovery facility, solid waste management solutions, international offices 4+ countries, 2 manufacturing facilities, consultation design services, O&M operation maintenance, upgradation retrofitting services, regulatory compliance assistance, company history milestones 2015, Delhi NCR Mumbai Hyderabad Bengaluru Chennai Kolkata Pune Ahmedabad, Noida UP Jal Nigam Assam, international environmental engineering services global, CPCB compliance environmental consultant India`}
        canonical="https://dlsenvirotech.com/about"
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
                About DLS Envirotech Corporation
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                With {yearsExperience} years of excellence in environmental
                technology, we have established ourselves as a trusted partner
                for comprehensive water treatment, industrial, and waste
                management solutions in India and internationally.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Partner With Us
                </Link>
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-background">
            <AboutSection />
          </section>

          {/* Service Categories */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Our Service Offerings
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                  Comprehensive environmental solutions from design to long-term
                  maintenance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {serviceCategories.map((service) => (
                  <div
                    key={service.title}
                    className="bg-background rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-primary text-white p-3 md:p-4 rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                      <service.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications & Compliance */}
          <section className="bg-background py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Certifications & Compliance
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                  Certified and approved for delivering quality environmental
                  solutions
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="bg-muted rounded-xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-primary text-white p-3 md:p-4 rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <cert.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Our Core Values
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                  The principles that guide our commitment to excellence and
                  environmental responsibility
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="bg-background rounded-xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-primary text-white p-3 md:p-4 rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <value.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-background">
            <TestimonialsSection />
          </section>

          {/* Call to Action */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Ready to Experience Our Expertise?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
                Join thousands of satisfied clients who trust DLS Envirotech for
                their critical water treatment infrastructure needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact" className="text-white">
                    Get Started Today
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href="/portfolio">View Our Work</Link>
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

export default About;
