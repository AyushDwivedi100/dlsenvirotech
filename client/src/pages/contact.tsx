import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contact-section";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get Water Treatment Consultation | DLS Envirotech</title>
        <meta name="description" content="Contact DLS Envirotech for professional water treatment consultation. Call +919568572005 or email contact@dlsenvirotech.com for expert environmental solutions." />
        <meta name="keywords" content="contact water treatment company, environmental technology consultation, STP ETP consultation, water treatment expert" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-industrial-900 mb-6">
                Contact Our Water Treatment Experts
              </h1>
              <p className="text-xl text-industrial-600 max-w-3xl mx-auto mb-8">
                Get professional consultation for your water treatment requirements. Our team of experts 
                is ready to provide customized solutions for your specific needs.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-industrial-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">24hrs</div>
                  <div className="text-industrial-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">Free</div>
                  <div className="text-industrial-600">Consultation</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </>
  );
};

export default Contact;
