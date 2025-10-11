import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ZoomIn } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Municipal STP - 50 MLD Capacity",
      category: "Sewage Treatment",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Advanced biological treatment system for municipal wastewater"
    },
    {
      id: 2,
      title: "Industrial ETP System",
      category: "Effluent Treatment",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Zero Liquid Discharge system for textile manufacturing facility"
    },
    {
      id: 3,
      title: "RO Plant Installation",
      category: "Water Purification",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "High-purity water production system for pharmaceutical use"
    },
    {
      id: 4,
      title: "Cooling Tower System",
      category: "Industrial Cooling",
      image: "https://images.unsplash.com/photo-1473116763246-b726752ebc2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Large-scale cooling tower for thermal power plant"
    },
    {
      id: 5,
      title: "CETP Construction",
      category: "Common Treatment",
      image: "https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Centralized treatment facility for industrial cluster"
    },
    {
      id: 6,
      title: "Smart STP with IoT",
      category: "Smart Technology",
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Next-generation sewage treatment with automated monitoring"
    },
    {
      id: 7,
      title: "Waste Heat Recovery",
      category: "Energy Recovery",
      image: "https://images.unsplash.com/photo-1596591606975-97ee5ccd3aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Energy-efficient heat recovery system implementation"
    },
    {
      id: 8,
      title: "Bio-gas Plant",
      category: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Sustainable bio-gas generation from organic waste"
    },
    {
      id: 9,
      title: "Chemical Plant Setup",
      category: "Chemical Processing",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-muted to-muted py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Project Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Explore our extensive portfolio of successfully completed water treatment installations 
                across various industries and applications worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">2500+</div>
                  <div className="text-muted-foreground">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">22</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
                {galleryImages.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-12">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <div className="text-xs sm:text-sm font-semibold text-primary-light mb-1 sm:mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <div className="bg-background/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                          <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 sm:py-16 md:py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to See Your Project Here?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Join our gallery of successful installations with a custom water treatment 
                solution designed specifically for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Get Your Quote</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/portfolio">
                    <span className="text-sm sm:text-base">View Case Studies</span>
                  </Link>
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

export default Gallery;