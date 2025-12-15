import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import FeaturedClients from "@/components/sections/featured-clients";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import {
  SEOHead,
  organizationSchema,
  localBusinessSchema,
  createFAQSchema,
} from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const Home = () => {
  const yearsExperience = getYearsOfExperienceString();
  const faqSchema = createFAQSchema([
    {
      question: "What is the difference between STP and ETP?",
      answer:
        "STP (Sewage Treatment Plant) treats domestic wastewater from homes and offices, while ETP (Effluent Treatment Plant) treats industrial wastewater containing chemicals and pollutants. STPs use biological processes, while ETPs may require chemical and physical treatments.",
    },
    {
      question: "How much does a water treatment plant cost?",
      answer:
        "Water treatment plant costs vary based on capacity, technology, and application. Small residential STPs start from ₹2-3 lakhs, while industrial ETP plants can range from ₹10 lakhs to several crores. Contact us for a customized quote.",
    },
    {
      question: "What water treatment services does DLS Envirotech provide?",
      answer:
        "DLS Envirotech provides comprehensive environmental solutions including water treatment (STP, ETP, WWTP, FSTP, MBBR, RO plants), industrial systems (cooling towers, PSA oxygen, MGPS), waste management (solid waste, material recovery, waste to compost, C&D waste management), bio-remediation, zero liquid discharge systems, and complete turnkey projects with installation and maintenance.",
    },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, localBusinessSchema, faqSchema],
  };

  return (
    <>
      <SEOHead
        title="Home | DLS Envirotech - Environmental Solutions"
        description={`${yearsExperience} years WWTP, MBBR, STP, FSTP, W2C, C&D waste, MGPS expertise. ISO certified, CPCB approved. 200+ installations. Bio-remediation. Serving India & global.`}
        keywords="wastewater treatment plant WWTP, MBBR moving bed biofilm reactor, sewage treatment plant India, STP plant manufacturer, FSTP India, faecal sludge treatment plant, waste to compost systems W2C, bio-remediation services, medical gas pipeline system MGPS, construction demolition waste C&D, waste management company India, MBBR STP, MBR technology, SBR sewage treatment, effluent treatment plant ETP, packaged STP, wastewater treatment India, CPCB approved STP, bio-methanation plant, solid waste management India, septage treatment plant, industrial wastewater treatment, water recycling plant, zero liquid discharge ZLD, sewage plant installation, STP O&M services, environmental solutions India, Swachh Bharat Mission, Namami Gange, UP Jal Nigam projects, Assam waste management, international environmental projects, turnkey STP contractor, eco-friendly waste treatment"
        canonical="https://dlsenvirotech.com/"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <section className="bg-muted">
            <HeroSection />
          </section>
          <section className="bg-background">
            <ServicesOverview />
          </section>
          <section className="bg-muted">
            <FeaturedClients />
          </section>
          <section className="bg-background">
            <AboutSection />
            <TestimonialsSection />
          </section>
          <section className="bg-muted">
            <ContactSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
