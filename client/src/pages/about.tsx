import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Award, Users, Globe, Zap, AlertCircle } from "lucide-react";
import Timeline from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import dlsLogo from "@assets/dls-envirotech-logo.png";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";

const About = () => {
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
      year: "2009",
      title: "Company Founded",
      description:
        "Started with a vision to provide innovative water treatment solutions",
    },
    {
      year: "2012",
      title: "First International Project",
      description:
        "Expanded operations beyond India with our first overseas installation",
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
        "Launched eco-friendly and energy-efficient treatment solutions",
    },
    {
      year: "2024",
      title: "Global Presence",
      description:
        "Serving clients across 22 countries with 2500+ installations",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Committed to delivering the highest quality water treatment solutions with rigorous testing and quality control.",
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
        "Continuously investing in R&D to develop cutting-edge treatment technologies and methodologies.",
    },
  ];

  return (
    <>
      <SEOHead
        title="About DLS Envirotech - 15+ Years Leading Water Treatment Company India"
        description="Learn about DLS Envirotech Corporation's 15+ years of expertise in water treatment technology. ISO certified company with 2500+ installations across 22 countries. Our journey from 2009 to becoming a global leader in STP, ETP, and industrial wastewater solutions."
        keywords="about DLS Envirotech, water treatment company India, environmental technology expertise, ISO certified water treatment, company history, water treatment experience, leading STP ETP manufacturer, wastewater treatment expert"
        canonical="https://dlsenvirotech.com/about"
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
                About DLS Envirotech Corporation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                With over 10 years of excellence in water treatment technology,
                we have established ourselves as a trusted partner for
                environmental solutions worldwide.
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
          <AboutSection />

          {/* Our Values */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted">
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

          {/* Timeline */}
          <Timeline milestones={milestones} />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Call to Action */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted">
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
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
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
