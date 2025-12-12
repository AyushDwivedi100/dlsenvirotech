import { CheckCircle } from "lucide-react";
import fstpImage from "@assets/generated_images/FSTP_wastewater_treatment_facility_9bf6216d.png";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";
import { OptimizedImage } from "@/components/ui/optimized-image";

const AboutSection = () => {
  const yearsExperience = getYearsOfExperienceString();

  const stats = [
    { value: "200+", label: "Systems Installed" },
    { value: "4+", label: "Countries Served" },
    { value: yearsExperience, label: "Years Experience" },
    { value: "2", label: "Manufacturing Facilities" },
    { value: "100+", label: "Team Members" },
    { value: "1", label: "International Office" },
  ];

  const features = [
    "ISO 9001:2015 Certified Quality Management",
    "Complete In-house R&D and Design Capabilities",
    "24/7 Technical Support and Maintenance",
    "Comprehensive Warranty and Service Programs",
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                {yearsExperience} Years of Environmental Engineering Excellence
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                DLS Envirotech Corporation provides systems and solutions in the
                critical domains of energy and environment. Our products and
                services help industries achieve better resource productivity
                and improved bottom lines, while maintaining a cleaner
                environment. Our vision for the future is firmly anchored in the
                belief that to stay competitive, business houses need to adopt
                sustainable practices.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our product portfolio covers heating, cooling, water and waste
                management, and specialty environment. We design, build and
                commission large CETP, ETP, STP, WWTP, WTP, RWH, steam and power
                generation, turnkey power plants, waste-to-energy systems and
                air pollution control projects with energy efficient and
                eco-friendly technologies.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-muted to-muted/50 p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start sm:items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <OptimizedImage
                src={fstpImage}
                alt="Faecal sludge treatment plant FSTP with wastewater management systems"
                className="object-cover aspect-[4/3] lg:aspect-[3/4]"
                loading="lazy"
                testId="img-about-fstp"
              />
            </div>

            {/* Experience Badge - Repositioned */}
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl backdrop-blur-sm bg-primary/95">
              <div className="text-center text-white">
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {yearsExperience}
                </div>
                <div className="text-sm sm:text-base font-semibold">Years</div>
                <div className="text-xs opacity-90">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
