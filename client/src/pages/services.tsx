import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceCard from "@/components/ui/service-card";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Water Treatment Services - STP, ETP, RO Plants | DLS Envirotech</title>
        <meta name="description" content="Comprehensive water treatment services including sewage treatment plants, effluent treatment plants, RO systems, and industrial cooling towers. Professional environmental solutions." />
        <meta name="keywords" content="STP, ETP, sewage treatment plant, effluent treatment plant, RO plant, cooling tower, water treatment services" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-industrial-900 mb-6">
                Professional Water Treatment Services
              </h1>
              <p className="text-xl text-industrial-600 max-w-3xl mx-auto mb-8">
                Comprehensive environmental technology solutions designed to meet the highest standards 
                of water treatment for industrial and municipal applications.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Custom Solution
                </Link>
              </Button>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-industrial-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-industrial-900 mb-6">
                Need a Custom Water Treatment Solution?
              </h2>
              <p className="text-lg text-industrial-600 mb-8">
                Our expert engineers can design and implement the perfect water treatment system 
                for your specific requirements. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </>
  );
};

export default Services;
