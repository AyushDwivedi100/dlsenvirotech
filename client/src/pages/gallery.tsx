import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ZoomIn } from "lucide-react";

const Gallery = () => {
  const galleryImages: any[] = [];

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
                across various industries and applications in India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">India</div>
                  <div className="text-muted-foreground">Nationwide Service</div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Coming Soon */}
          <section className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center py-16 md:py-20 bg-muted rounded-lg">
                <div className="max-w-2xl mx-auto px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                    Real Project Gallery Coming Soon
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                    We are currently preparing our authentic project gallery featuring actual installation photos 
                    from our completed water treatment projects across India. These real images will showcase 
                    our expertise and quality workmanship.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-8">
                    Check back soon to view our comprehensive collection of real project installations, 
                    or contact us directly to discuss your water treatment needs.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us for Project Information
                    </Link>
                  </Button>
                </div>
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