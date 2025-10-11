import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Phone, Play, Award, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center bg-gradient-to-br from-background to-muted py-12 md:py-16 lg:py-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://www.venwiz.com/wp-content/uploads/2024/05/Understanding-the-Different-Types-of-Sewage-Treatment-Plant-Part-1.jpg')",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          <Badge className="mb-4 md:mb-6" variant="secondary">
            <Award className="mr-2 h-4 w-4" />
            15+ Years Experience
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Professional STP, ETP & Industrial Water Treatment
            <span className="text-primary block mt-2">Solutions in India</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Leading water treatment company specializing in Sewage Treatment Plants (STP), 
            Effluent Treatment Plants (ETP), RO systems, and industrial wastewater solutions. 
            ISO certified with 2500+ installations across 22 countries. Expert environmental 
            technology for all municipal and industrial applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base">Get Free Consultation</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/portfolio">
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base">View Our Work</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <img
            src="https://alantech.in/storage/blogs/modern-sewage-treatment-plant.webp"
            alt="Professional STP ETP water treatment plant facility - DLS Envirotech sewage and effluent treatment solutions with advanced biological and chemical filtration systems"
            className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto"
          />

          <div className="hidden md:flex absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-card border border-border p-4 lg:p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="bg-secondary text-secondary-foreground p-2 lg:p-3 rounded-lg">
                <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold text-foreground">2500+</p>
                <p className="text-sm lg:text-base text-muted-foreground">Systems Installed</p>
              </div>
            </div>
          </div>
          
          {/* Mobile stats badge - below image */}
          <div className="md:hidden mt-4 bg-card border border-border p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">2500+</p>
                <p className="text-sm text-muted-foreground">Systems Installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
