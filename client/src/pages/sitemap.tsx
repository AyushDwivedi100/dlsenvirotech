import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Home,
  Building2,
  Users,
  Mail,
  FileText,
  Image,
  UserCircle,
  Droplets,
  Recycle,
  Wind,
  FlaskConical,
  Factory,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SEOHead } from "@/components/seo/seo-head";
import { DIVISIONS } from "@/constants/constants";

const Sitemap = () => {
  const mainPages = [
    {
      title: "Home",
      href: "/",
      icon: Home,
      description: "Company overview, featured services, and client testimonials",
    },
    {
      title: "About Us",
      href: "/about",
      icon: Users,
      description: "Our company history, mission, vision, and values",
    },
    {
      title: "Leadership",
      href: "/leadership",
      icon: UserCircle,
      description: "Meet our leadership team and management",
    },
    {
      title: "Services",
      href: "/services",
      icon: Building2,
      description: "Overview of our 5 specialized environmental divisions",
    },
    {
      title: "Our Clients",
      href: "/clients",
      icon: Users,
      description: "Trusted by 200+ government and private sector clients",
    },
    {
      title: "Gallery",
      href: "/gallery",
      icon: Image,
      description: "Photo gallery of our projects and installations",
    },
    {
      title: "Contact Us",
      href: "/contact",
      icon: Mail,
      description: "Get in touch with our team",
    },
    {
      title: "Get Quote",
      href: "/quote",
      icon: FileText,
      description: "Request a quote for your project requirements",
    },
  ];

  const divisionIcons: Record<string, React.ElementType> = {
    "water-soil-treatment": Droplets,
    "solid-waste-management": Recycle,
    "o2-air-purification": Wind,
    "chemical-biochemical-treatment": FlaskConical,
    "manufacturing-fabrication": Factory,
  };

  return (
    <>
      <SEOHead
        title="Sitemap - Website Navigation | DLS Envirotech"
        description="Complete sitemap of DLS Envirotech Corporation website. Navigate all pages including water treatment services (STP, ETP, WTP), solid waste management, O2 plants, bio-remediation, gallery, and contact information."
        keywords="sitemap, website navigation, DLS Envirotech pages, water treatment services, STP, ETP, solid waste management, environmental solutions"
        canonical="https://dlsenvirotech.com/sitemap"
      />
      <div className="min-h-screen bg-muted">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Sitemap
            </h1>
            <p className="text-lg text-muted-foreground">
              Navigate through all sections of our website
            </p>
          </div>

          {/* Main Pages */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              Main Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mainPages.map((page) => {
                const IconComponent = page.icon;
                return (
                  <Link key={page.href} href={page.href}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border hover:border-primary/30">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-primary/10 rounded-md">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle className="text-base font-semibold">
                            {page.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {page.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Service Divisions */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Our 5 Service Divisions
            </h2>
            <div className="space-y-6">
              {DIVISIONS.map((division) => {
                const DivisionIcon = divisionIcons[division.id] || Building2;
                return (
                  <Card key={division.id} className="overflow-hidden">
                    <CardHeader className="bg-muted/50 pb-3">
                      <Link href={`/services/${division.id}`}>
                        <div className="flex items-center gap-3 cursor-pointer group">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <DivisionIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                              Division {division.number}: {division.title}
                              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {division.description.substring(0, 100)}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Services in this division:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {division.services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${division.id}/${service.id}`}
                          >
                            <div className="p-2 bg-muted rounded-md text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer text-center">
                              {service.shortTitle}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Website Structure Summary */}
          <section className="mb-12">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-xl">Website Structure Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">
                      Company Information
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/" className="hover:text-primary">Home - Landing page</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/about" className="hover:text-primary">About Us - Company info</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/leadership" className="hover:text-primary">Leadership - Management team</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/clients" className="hover:text-primary">Our Clients - Client portfolio</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">
                      Services & Solutions
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/services" className="hover:text-primary">All Services Overview</Link>
                      </li>
                      {DIVISIONS.map((div) => (
                        <li key={div.id} className="flex items-center gap-2">
                          <ChevronRight className="h-3 w-3 text-primary" />
                          <Link href={`/services/${div.id}`} className="hover:text-primary">
                            {div.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">
                      Resources & Contact
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/gallery" className="hover:text-primary">Gallery - Project photos</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/contact" className="hover:text-primary">Contact Us - Get in touch</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/quote" className="hover:text-primary">Get Quote - Request estimate</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <Link href="/sitemap" className="hover:text-primary">Sitemap - This page</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Need help finding something?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for assistance.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
