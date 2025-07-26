import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Phone, Play, Award, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-industrial-50 to-industrial-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
        aria-hidden="true"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <Badge className="mb-6" variant="secondary">
            <Award className="mr-2 h-4 w-4" />
            15+ Years Experience
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-industrial-900 mb-6 leading-tight">
            Advanced Water Treatment 
            <span className="text-primary block">Solutions</span>
          </h1>
          
          <p className="text-xl text-industrial-600 mb-8 leading-relaxed">
            Leading provider of comprehensive wastewater treatment services, specializing in effluent treatment plants, 
            sewage treatment systems, and environmental technology solutions for industrial and municipal applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1596591606975-97ee5ccd3aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Modern sewage treatment plant facility with advanced filtration systems" 
            className="rounded-2xl shadow-2xl w-full h-auto" 
          />
          
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-secondary text-white p-3 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-industrial-900">2500+</p>
                <p className="text-industrial-600">Systems Installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
