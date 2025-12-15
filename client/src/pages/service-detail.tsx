import { useParams, Link } from "wouter";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DIVISIONS } from "@/constants/constants";
import { ArrowLeft, Phone, ChevronRight, Check, Cog, Layers, Target, Award } from "lucide-react";
import * as LucideIcons from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
  return Icon || LucideIcons.Settings;
};

const ServiceDetail = () => {
  const { divisionId, serviceId } = useParams<{ divisionId: string; serviceId: string }>();
  
  const division = DIVISIONS.find((d) => d.id === divisionId);
  const service = division?.services.find((s) => s.id === serviceId);

  if (!division || !service) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = getIcon(service.icon);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Services", url: "https://dlsenvirotech.com/services" },
    { name: division.shortTitle, url: `https://dlsenvirotech.com/services/${division.id}` },
    { name: service.shortTitle, url: `https://dlsenvirotech.com/services/${division.id}/${service.id}` },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    green: "bg-green-500/10 text-green-600 dark:text-green-400",
    cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  };

  const borderColorClasses: Record<string, string> = {
    blue: "border-blue-500/20",
    green: "border-green-500/20",
    cyan: "border-cyan-500/20",
    purple: "border-purple-500/20",
    orange: "border-orange-500/20",
  };

  return (
    <>
      <SEOHead
        title={`${service.title} | ${division.shortTitle} | DLS Envirotech`}
        description={service.fullDescription}
        keywords={[
          service.title,
          ...(service.technologies || []),
          ...(service.types || []),
          "DLS Envirotech",
          "India"
        ].join(", ")}
        canonical={`https://dlsenvirotech.com/services/${division.id}/${service.id}`}
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Breadcrumb */}
          <div className="bg-muted/50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                <Link href="/" className="hover:text-foreground transition-colors" data-testid="link-breadcrumb-home">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services" className="hover:text-foreground transition-colors" data-testid="link-breadcrumb-services">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href={`/services/${division.id}`} className="hover:text-foreground transition-colors" data-testid="link-breadcrumb-division">
                  {division.shortTitle}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium">{service.shortTitle}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className={`p-4 rounded-lg ${colorClasses[division.color] || colorClasses.blue}`}>
                  <ServiceIcon className="h-12 w-12" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-3">
                    {division.shortTitle}
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {service.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
                    {service.fullDescription}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" asChild>
                      <Link href="/quote" className="text-white">
                        <Phone className="mr-2 h-4 w-4" />
                        Get Quote
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Types/Variants */}
                  {service.types && service.types.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Layers className="h-5 w-5 text-primary" />
                          Types & Variants
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.types.map((type, idx) => (
                            <div
                              key={idx}
                              className={`p-4 rounded-lg border ${borderColorClasses[division.color] || borderColorClasses.blue} bg-muted/30`}
                              data-testid={`type-${idx}`}
                            >
                              <div className="flex items-center gap-2">
                                <Check className={`h-4 w-4 ${colorClasses[division.color]?.split(' ')[1] || 'text-primary'}`} />
                                <span className="font-medium">{type}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Cog className="h-5 w-5 text-primary" />
                          Technologies We Use
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="px-3 py-1.5 text-sm"
                              data-testid={`tech-${idx}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Applications */}
                  {service.applications && service.applications.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Applications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center gap-2" data-testid={`app-${idx}`}>
                              <div className={`h-2 w-2 rounded-full ${colorClasses[division.color]?.split(' ')[0] || 'bg-primary'}`} />
                              <span>{app}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                  {/* Key Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Key Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2" data-testid={`feature-${idx}`}>
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  {service.benefits && service.benefits.length > 0 && (
                    <Card className={`border-2 ${borderColorClasses[division.color] || borderColorClasses.blue}`}>
                      <CardHeader>
                        <CardTitle>Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2" data-testid={`benefit-${idx}`}>
                              <div className={`p-1 rounded-full ${colorClasses[division.color] || colorClasses.blue}`}>
                                <Check className="h-3 w-3" />
                              </div>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Quick Contact */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Get expert consultation for your {service.shortTitle} requirements.
                      </p>
                      <Button variant="secondary" className="w-full" asChild>
                        <Link href="/contact">
                          <Phone className="mr-2 h-4 w-4" />
                          Contact Expert
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Other Services in Division */}
          <section className="py-12 md:py-16 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">
                Other Services in {division.shortTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {division.services
                  .filter((s) => s.id !== service.id)
                  .slice(0, 4)
                  .map((otherService) => {
                    const OtherIcon = getIcon(otherService.icon);
                    return (
                      <Card
                        key={otherService.id}
                        className="hover-elevate cursor-pointer"
                        data-testid={`other-service-${otherService.id}`}
                      >
                        <Link href={`/services/${division.id}/${otherService.id}`}>
                          <CardContent className="pt-6">
                            <div className={`p-2 rounded-lg w-fit mb-3 ${colorClasses[division.color] || colorClasses.blue}`}>
                              <OtherIcon className="h-5 w-5" />
                            </div>
                            <h3 className="font-medium mb-1">{otherService.shortTitle}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {otherService.description}
                            </p>
                          </CardContent>
                        </Link>
                      </Card>
                    );
                  })}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href={`/services/${division.id}`}>
                    View All {division.shortTitle} Services
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

export default ServiceDetail;
