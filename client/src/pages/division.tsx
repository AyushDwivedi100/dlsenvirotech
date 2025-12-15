import { useParams, Link } from "wouter";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DIVISIONS } from "@/constants/constants";
import { ArrowLeft, ArrowRight, Phone, ChevronRight } from "lucide-react";
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

const Division = () => {
  const { divisionId } = useParams<{ divisionId: string }>();
  const division = DIVISIONS.find((d) => d.id === divisionId);

  if (!division) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Division Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The division you're looking for doesn't exist.
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

  const DivisionIcon = getIcon(division.icon);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Services", url: "https://dlsenvirotech.com/services" },
    { name: division.shortTitle, url: `https://dlsenvirotech.com/services/${division.id}` },
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

  return (
    <>
      <SEOHead
        title={`${division.title} | DLS Envirotech`}
        description={division.description}
        keywords={division.services.map(s => s.title).join(", ")}
        canonical={`https://dlsenvirotech.com/services/${division.id}`}
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          {/* Breadcrumb */}
          <div className="bg-muted/50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors" data-testid="link-breadcrumb-home">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services" className="hover:text-foreground transition-colors" data-testid="link-breadcrumb-services">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium">{division.shortTitle}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="bg-muted py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-lg ${colorClasses[division.color] || colorClasses.blue}`}>
                  <DivisionIcon className="h-12 w-12" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-3">
                    Division {division.number}
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {division.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
                    {division.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Our Services in this Division
                </h2>
                <p className="text-muted-foreground">
                  Explore our comprehensive range of {division.shortTitle.toLowerCase()} solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {division.services.map((service) => {
                  const ServiceIcon = getIcon(service.icon);
                  return (
                    <Card
                      key={service.id}
                      className="group hover-elevate cursor-pointer"
                      data-testid={`card-service-${service.id}`}
                    >
                      <Link href={`/services/${division.id}/${service.id}`}>
                        <CardHeader>
                          <div className={`p-3 rounded-lg w-fit mb-3 ${colorClasses[division.color] || colorClasses.blue}`}>
                            <ServiceIcon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.types?.slice(0, 3).map((type, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                            {service.types && service.types.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{service.types.length - 3} more
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-primary font-medium">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8">
                Our expert engineers can design and implement the perfect {division.shortTitle.toLowerCase()} system for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact" className="text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Free Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    All Divisions
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

export default Division;
