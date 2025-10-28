import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import FeaturedProjects from "@/components/sections/featured-projects";
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
        title="Best STP, FSTP & Waste Management Company India | DLS Envirotech | 200+ Projects"
        description={`Leading sewage treatment plant (STP), faecal sludge treatment plant (FSTP) & waste management company in India with ${yearsExperience} years expertise, 200+ installations. CPCB approved, ISO certified. MBR, MBBR, SBR technology. Turnkey projects across India & international. Get FREE consultation! ☎️ +91-9568572005`}
        keywords="sewage treatment plant India, STP plant manufacturer, FSTP India, faecal sludge treatment plant, waste management company India, MBBR STP, MBR technology, SBR sewage treatment, effluent treatment plant ETP, packaged STP, wastewater treatment India, CPCB approved STP, bio-methanation plant, solid waste management India, septage treatment plant, industrial wastewater treatment, water recycling plant, zero liquid discharge ZLD, sewage plant installation, STP O&M services, environmental solutions India, Swachh Bharat Mission, Namami Gange, UP Jal Nigam projects, Assam waste management, international environmental projects, turnkey STP contractor, eco-friendly waste treatment"
        canonical="https://dlsenvirotech.com/"
        schema={combinedSchema}
      />
      
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <HeroSection />
          <ServicesOverview />
          <FeaturedProjects />
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
