import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ZoomIn } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Municipal STP - 50 MLD Capacity",
      category: "Sewage Treatment",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Advanced biological treatment system for municipal wastewater"
    },
    {
      id: 2,
      title: "Industrial ETP System",
      category: "Effluent Treatment",
      image: "https://pixabay.com/get/gdfd372825190f527a6ed096f15189871e818992e0f9e7f8dcb088d69ae7d20e87311e376a3fea8647a087220dd437d1d007e0fcdf9190368d28bafbaced5115e_1280.jpg",
      description: "Zero Liquid Discharge system for textile manufacturing facility"
    },
    {
      id: 3,
      title: "RO Plant Installation",
      category: "Water Purification",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "High-purity water production system for pharmaceutical use"
    },
    {
      id: 4,
      title: "Cooling Tower System",
      category: "Industrial Cooling",
      image: "https://pixabay.com/get/g24db2ab58bacd7159dc7b2822ec0b43adf618f3f56d5d441e0e2e4238035c5de2f71d64a8406e3063a2bc932172dc7d327022a49c345e951804e6d96097ba11d_1280.jpg",
      description: "Large-scale cooling tower for thermal power plant"
    },
    {
      id: 5,
      title: "CETP Construction",
      category: "Common Treatment",
      image: "https://pixabay.com/get/g818b8a11193415799e28325a74ff1f010380388c8ea146c5c5bfcefedc04a2df1d6b14407c80e3d4b1517b9bd714e178352747e0e79879a38e476cd199b1f1e9_1280.jpg",
      description: "Centralized treatment facility for industrial cluster"
    },
    {
      id: 6,
      title: "Smart STP with IoT",
      category: "Smart Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Next-generation sewage treatment with automated monitoring"
    },
    {
      id: 7,
      title: "Waste Heat Recovery",
      category: "Energy Recovery",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e51-ea2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Energy-efficient heat recovery system implementation"
    },
    {
      id: 8,
      title: "Bio-gas Plant",
      category: "Renewable Energy",
      image: "https://pixabay.com/get/g24db2ab58bacd7159dc7b2822ec0b43adf618f3f56d5d441e0e2e4238035c5de2f71d64a8406e3063a2bc932172dc7d327022a49c345e951804e6d96097ba11d_1280.jpg",
      description: "Sustainable bio-gas generation from organic waste"
    },
    {
      id: 9,
      title: "Chemical Plant Setup",
      category: "Chemical Processing",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Complete chemical processing plant installation"
    }
  ];

  const categories = ["All", "Sewage Treatment", "Effluent Treatment", "Water Purification", "Industrial Cooling", "Common Treatment", "Smart Technology", "Energy Recovery", "Renewable Energy", "Chemical Processing"];

  return (
    <>
      <Helmet>
        <title>Project Gallery - Water Treatment Installations | DLS Envirotech</title>
        <meta name="description" content="Browse our comprehensive gallery of water treatment project installations. View photos of STP, ETP, RO plants, cooling towers, and other environmental solutions." />
        <meta name="keywords" content="water treatment gallery, project photos, STP installation, ETP construction, industrial water treatment images" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-industrial-900 mb-6">
                Project Gallery
              </h1>
              <p className="text-xl text-industrial-600 max-w-3xl mx-auto mb-8">
                Explore our extensive portfolio of successfully completed water treatment installations 
                across various industries and applications worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                  <div className="text-industrial-600">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">22</div>
                  <div className="text-industrial-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-industrial-600">Years Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-12">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-sm font-semibold text-primary-light mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <ZoomIn className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-industrial-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-industrial-900 mb-6">
                Ready to See Your Project Here?
              </h2>
              <p className="text-lg text-industrial-600 mb-8">
                Join our gallery of successful installations with a custom water treatment 
                solution designed specifically for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Your Quote
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

export default Gallery;