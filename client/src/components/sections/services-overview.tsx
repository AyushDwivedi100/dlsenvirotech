import ServiceCard from "@/components/ui/service-card";
import { SERVICES } from "@/constants/constants";

const ServicesOverview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Our Specialized Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive environmental technology solutions including water
            treatment (WWTP, MBBR, STP, FSTP), industrial systems (MGPS, cooling
            towers, PSA oxygen), waste management (W2C, C&D waste, MRF), and
            bio-remediation tailored for industrial and municipal applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
