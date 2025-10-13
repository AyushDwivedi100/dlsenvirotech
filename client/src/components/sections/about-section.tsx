import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "2500+", label: "Systems Installed" },
    { value: "India", label: "Nationwide Service" },
    { value: "15+", label: "Years Experience" },
    { value: "100+", label: "Team Members" },
  ];

  const features = [
    "ISO 9001:2015 Certified Quality Management",
    "Complete In-house R&D and Design Capabilities",
    "24/7 Technical Support and Maintenance",
    "Comprehensive Warranty and Service Programs",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                15+ Years of Environmental Engineering Excellence
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                DLS Envirotech Corporation has established itself as a trusted leader in water treatment technology, 
                delivering innovative solutions that protect the environment while ensuring regulatory compliance.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our comprehensive approach combines cutting-edge technology with proven methodologies to create 
                sustainable water treatment solutions that meet the evolving needs of industries and municipalities across India.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="bg-gradient-to-br from-muted to-muted/50 p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-foreground/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Features List */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start sm:items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional engineering team discussing water treatment project plans" 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/4]" 
                loading="lazy"
              />
            </div>
            
            {/* Experience Badge - Repositioned */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl backdrop-blur-sm bg-primary/95">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1">15+</div>
                <div className="text-sm sm:text-base font-semibold">Years</div>
                <div className="text-xs opacity-90">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
