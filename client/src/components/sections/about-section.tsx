import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "2500+", label: "Systems Installed" },
    { value: "22", label: "Countries Served" },
    { value: "10+", label: "Years Experience" },
    { value: "100+", label: "Team Members" },
  ];

  const features = [
    "ISO 9001:2015 Certified Quality Management",
    "Complete In-house R&D and Design Capabilities",
    "24/7 Technical Support and Maintenance",
    "Comprehensive Warranty and Service Programs",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                10+ Years of Environmental Engineering Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                DLS Envirotech Corporation has established itself as a trusted leader in water treatment technology, 
                delivering innovative solutions that protect the environment while ensuring regulatory compliance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive approach combines cutting-edge technology with proven methodologies to create 
                sustainable water treatment solutions that meet the evolving needs of industries and municipalities worldwide.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-muted p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-4 flex-shrink-0" />
                  <span className="text-foreground font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional engineering team discussing water treatment project plans" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg font-semibold">Years</div>
                <div className="text-sm opacity-90">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
