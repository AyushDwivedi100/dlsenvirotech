import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import ServicesOverview from "@/components/sections/services-overview";
import PortfolioShowcase from "@/components/sections/portfolio-showcase";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import { SEOHead, organizationSchema, localBusinessSchema, createFAQSchema } from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

const Home = () => {
  const yearsExperience = getYearsOfExperienceString();
  const faqSchema = createFAQSchema([
    {
      question: "What is the difference between STP and ETP?",
      answer: "STP (Sewage Treatment Plant) treats domestic wastewater from homes and offices, while ETP (Effluent Treatment Plant) treats industrial wastewater containing chemicals and pollutants. STPs use biological processes, while ETPs may require chemical and physical treatments."
    },
    {
      question: "How much does a water treatment plant cost?",
      answer: "Water treatment plant costs vary based on capacity, technology, and application. Small residential STPs start from ₹2-3 lakhs, while industrial ETP plants can range from ₹10 lakhs to several crores. Contact us for a customized quote."
    },
    {
      question: "What water treatment services does DLS Envirotech provide?",
      answer: "DLS Envirotech provides comprehensive water treatment solutions including STP, ETP, RO plants, industrial wastewater treatment, zero liquid discharge systems, cooling towers, and complete turnkey projects with installation and maintenance."
    }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, localBusinessSchema, faqSchema]
  };

  return (
    <>
      <SEOHead
        title="Best Water Treatment Company India - STP, ETP & Industrial Solutions | DLS Envirotech"
        description={`#1 Water Treatment Company in India with 200+ installations & ${yearsExperience} years expertise, open to international projects. STP, ETP, RO plants & industrial wastewater solutions. ISO certified. Get FREE consultation & site visit! Call ☎️ +91-9568572005 today!`}
        keywords="best water treatment company India, STP plant manufacturer India, ETP plant installation, sewage treatment plant India, effluent treatment plant, industrial water treatment India, international water treatment projects, wastewater treatment company, RO plant supplier, zero liquid discharge ZLD, biological wastewater treatment, water purification India, global environmental solutions, top water treatment company"
        canonical="https://dlsenvirotech.com/"
        schema={combinedSchema}
      />
      
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <HeroSection />
          <FeaturedProjectsSection />
          <ServicesOverview />
          <PortfolioShowcase />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
