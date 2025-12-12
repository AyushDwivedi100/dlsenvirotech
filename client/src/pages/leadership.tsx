import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Award, Building2, Briefcase, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Leadership = () => {
  const yearsExperience = getYearsOfExperienceString();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Leadership", url: "https://dlsenvirotech.com/leadership" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  const achievements = [
    {
      icon: Building2,
      value: "120+",
      label: "Solid Waste Management Projects",
      description: "Successfully delivered worldwide",
    },
    {
      icon: Target,
      value: "60+",
      label: "Large Sewage Treatment Plants",
      description: "STP installations globally",
    },
    {
      icon: Award,
      value: "32+",
      label: "Faecal Sludge Treatment Plants",
      description: "FSTP projects completed",
    },
    {
      icon: Briefcase,
      value: yearsExperience,
      label: "Years of Experience",
      description: "In environmental engineering",
    },
  ];

  return (
    <>
      <SEOHead
        title="Leadership | DLS Envirotech"
        description={`Mr. S.K. Singh, MD of DLS Envirotech. ${yearsExperience} experience. Led 120+ waste projects, 60+ STP, 32+ FSTP worldwide. CPCB approved. Vision: sustainable solutions globally.`}
        keywords={`S.K. Singh DLS Envirotech managing director, ${yearsExperience} years environmental engineering leadership, STP sewage treatment plant expert worldwide, WWTP wastewater treatment specialist global, MBBR moving bed biofilm reactor expert international, FSTP faecal sludge treatment plant specialist, ETP WTP expert, MBR SBR ZLD technology leader, waste to compost W2C director, C&D construction demolition waste management, bio-remediation solutions expert, MGPS medical gas pipeline specialist, PSA oxygen plant director, industrial RO plant expert, cooling tower specialist, air pollution control leader, MRF material recovery facility specialist, bio-methanation expert, waste management leader worldwide, CPCB NABL approved contractor, international projects director, turnkey environmental projects director, sustainable development leader, international environmental consultant, global environmental solutions, Delhi NCR Mumbai Hyderabad Bengaluru Chennai`}
        canonical="https://dlsenvirotech.com/leadership"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Leadership
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Meet the visionary leader driving sustainable environmental
                  solutions worldwide
                </p>
              </motion.div>

              {/* Director Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-5xl mx-auto"
              >
                <Card className="overflow-hidden shadow-2xl border-2">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-0">
                      {/* Photo Section */}
                      <div className="md:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-8 md:p-12">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
                          <OptimizedImage
                            src="/director-photo.png"
                            alt="Mr. S.K. Singh, Managing Director"
                            className="relative rounded-2xl shadow-2xl max-w-sm md:max-w-none object-cover"
                            loading="lazy"
                            testId="img-director-photo"
                          />
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="md:col-span-3 p-8 md:p-12 bg-background">
                        <div className="mb-6">
                          <h2
                            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                            data-testid="text-director-name"
                          >
                            Mr. S.K. Singh
                          </h2>
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/10 px-4 py-2 rounded-lg">
                              <p
                                className="text-base md:text-lg font-semibold text-primary"
                                data-testid="text-director-title"
                              >
                                Managing Director
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Credentials */}
                        <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-3 text-foreground/80">
                            <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                            <span
                              className="text-base md:text-lg"
                              data-testid="text-director-experience"
                            >
                              {yearsExperience} Years of Professional Experience
                            </span>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted p-4 rounded-lg text-center">
                            <p
                              className="text-2xl font-bold text-primary"
                              data-testid="text-stat-swm"
                            >
                              120+
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              SWM Projects
                            </p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg text-center">
                            <p
                              className="text-2xl font-bold text-primary"
                              data-testid="text-stat-stp"
                            >
                              60+
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              STP Installations
                            </p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg text-center">
                            <p
                              className="text-2xl font-bold text-primary"
                              data-testid="text-stat-fstp"
                            >
                              32+
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              FSTP Projects
                            </p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg text-center">
                            <p
                              className="text-2xl font-bold text-primary"
                              data-testid="text-stat-years"
                            >
                              {yearsExperience}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Years Experience
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Director's Message */}
          <section className="bg-background py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Director's Message
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <Card className="shadow-lg border-l-4 border-l-primary">
                  <CardContent className="p-8 md:p-12">
                    <div
                      className="prose prose-lg max-w-none"
                      data-testid="text-director-message"
                    >
                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        At DLS Envirotech Corporation Pvt. Ltd., we are
                        committed to driving sustainable development through
                        innovative and reliable environmental and pollution
                        control solutions.
                      </p>

                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        With over {yearsExperience} years of professional
                        experience, I have witnessed how scientific approach and
                        responsible engineering can transform communities and
                        industries towards a cleaner, greener future.
                      </p>

                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        Under our leadership, DLS Envirotech has successfully
                        completed more than 120+ Solid Waste Management
                        projects, 60+ large Sewage Treatment Plants (STP), and
                        32+ large Faecal Sludge Treatment Plants (FSTP) across
                        multiple regions worldwide. These achievements are a
                        reflection of our dedication, technical expertise, and
                        client trust. We are committed to bringing our expertise
                        to projects globally, serving clients wherever
                        environmental solutions are needed.
                      </p>

                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                        Our vision is clear — to provide sustainable, efficient,
                        and affordable environmental solutions that ensure
                        compliance and contribute to a pollution-free world. We
                        continue to invest in advanced technologies, skill
                        development, and transparent project execution to
                        maintain the highest standards in our field.
                      </p>

                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                        Together, with our clients, partners, and team, we are
                        building a cleaner and more sustainable tomorrow.
                      </p>

                      <div className="mt-8 pt-6 border-t border-border">
                        <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          — Mr. S.K. Singh
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300 mt-1">
                          Managing Director
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          DLS Envirotech Corporation Pvt. Ltd
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Key Achievements Section */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Key Achievements
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                  Milestones that showcase our commitment to environmental
                  excellence
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="text-center h-full hover:shadow-xl transition-shadow">
                      <CardContent className="p-6 md:p-8">
                        <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <achievement.icon className="h-8 w-8 text-primary" />
                        </div>
                        <p
                          className="text-3xl md:text-4xl font-bold text-primary mb-2"
                          data-testid={`text-achievement-${index}`}
                        >
                          {achievement.value}
                        </p>
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                          {achievement.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-background py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8 md:p-12">
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
                      To provide{" "}
                      <span className="font-semibold text-primary">
                        sustainable, efficient, and affordable environmental
                        solutions
                      </span>{" "}
                      worldwide, ensuring compliance and contributing to a{" "}
                      <span className="font-semibold text-primary">
                        pollution-free world
                      </span>
                      . We continue to invest in advanced technologies, skill
                      development, and transparent project execution to maintain
                      the highest standards in our field.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Partner with Industry-Leading Expertise
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Experience the difference that {yearsExperience} years of
                environmental engineering excellence can make to your project,
                anywhere in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                  data-testid="button-contact-leader"
                >
                  <Link href="/contact" className="text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                  data-testid="button-view-projects"
                >
                  <Link href="/portfolio">View Our Projects</Link>
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

export default Leadership;
