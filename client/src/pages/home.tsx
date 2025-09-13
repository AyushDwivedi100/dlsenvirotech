import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import PortfolioShowcase from "@/components/sections/portfolio-showcase";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DLS Envirotech Corporation - Water Treatment Solutions | Professional Environmental Technology</title>
        <meta name="description" content="Leading provider of water treatment plants, sewage treatment systems, and effluent treatment solutions with 15+ years of expertise in environmental technology." />
        <meta name="keywords" content="water treatment plants, sewage treatment, effluent treatment, environmental technology, industrial water solutions" />
        <meta property="og:title" content="DLS Envirotech Corporation - Water Treatment Solutions" />
        <meta property="og:description" content="Leading provider of water treatment plants, sewage treatment systems, and effluent treatment solutions with 15+ years of expertise in environmental technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dlsenvirotech.com" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-background">
        <TopBar />
        <Header />
        <main>
          <HeroSection />
          <ServicesOverview />
          <PortfolioShowcase />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </>
  );
};

export default Home;
