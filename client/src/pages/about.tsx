import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Award, Users, Globe, Zap } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started with a vision to provide innovative water treatment solutions"
    },
    {
      year: "2012",
      title: "First International Project",
      description: "Expanded operations beyond India with our first overseas installation"
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management"
    },
    {
      year: "2018",
      title: "1000th System",
      description: "Milestone achievement of 1000 successful system installations"
    },
    {
      year: "2021",
      title: "Green Technology",
      description: "Launched eco-friendly and energy-efficient treatment solutions"
    },
    {
      year: "2024",
      title: "Global Presence",
      description: "Serving clients across 22 countries with 2500+ installations"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering the highest quality water treatment solutions with rigorous testing and quality control."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term relationships with our clients through exceptional service and ongoing support."
    },
    {
      icon: Globe,
      title: "Environmental Responsibility",
      description: "Developing sustainable solutions that protect our environment for future generations."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously investing in R&D to develop cutting-edge treatment technologies and methodologies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - 15+ Years Water Treatment Expertise | DLS Envirotech</title>
        <meta name="description" content="Learn about DLS Envirotech Corporation's 15+ years of expertise in water treatment technology. Our journey, values, and commitment to environmental solutions." />
        <meta name="keywords" content="about DLS Envirotech, water treatment company, environmental technology expertise, company history, water treatment experience" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-industrial-900 mb-6">
                About DLS Envirotech Corporation
              </h1>
              <p className="text-xl text-industrial-600 max-w-3xl mx-auto mb-8">
                With over 15 years of excellence in water treatment technology, we have established 
                ourselves as a trusted partner for environmental solutions worldwide.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Partner With Us
                </Link>
              </Button>
            </div>
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Our Values */}
          <section className="py-20 bg-industrial-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-industrial-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
                  The principles that guide our commitment to excellence and environmental responsibility
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-primary text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-industrial-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-industrial-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-industrial-900 mb-4">
                  Our Journey
                </h2>
                <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
                  Key milestones in our growth and commitment to environmental excellence
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-industrial-200">
                          <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-industrial-900 mb-2">{milestone.title}</h3>
                          <p className="text-industrial-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Call to Action */}
          <section className="py-20 bg-industrial-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-industrial-900 mb-6">
                Ready to Experience Our Expertise?
              </h2>
              <p className="text-lg text-industrial-600 mb-8">
                Join thousands of satisfied clients who trust DLS Envirotech for their 
                critical water treatment infrastructure needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started Today
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">
                    View Our Work
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

export default About;
