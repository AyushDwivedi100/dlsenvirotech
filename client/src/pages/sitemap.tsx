import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Home,
  Building2,
  Briefcase,
  Image,
  Users,
  Mail,
  FileText,
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SEOHead } from "@/components/seo/seo-head";

const Sitemap = () => {
  const sitePages = [
    {
      title: "Home",
      href: "/",
      icon: Home,
      description: "Company overview and featured services",
    },
    {
      title: "About Us",
      href: "/about",
      icon: Users,
      description: "Our company history, mission, and team",
    },
    {
      title: "Services",
      href: "/services",
      icon: Building2,
      description: "Water treatment solutions and environmental services",
    },
    {
      title: "Projects",
      href: "/portfolio",
      icon: Briefcase,
      description: "Portfolio of completed projects and case studies",
    },
    {
      title: "Gallery",
      href: "/gallery",
      icon: Image,
      description: "Photo gallery of our projects and facilities",
    },
    {
      title: "Contact Us",
      href: "/contact",
      icon: Mail,
      description: "Contact information and inquiry form",
    },
    {
      title: "Get Quote",
      href: "/quote",
      icon: FileText,
      description: "Request a quote for your project requirements",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sitemap - Website Navigation"
        description="Complete sitemap of DLS Envirotech Corporation website. Find all pages including water treatment services, STP plants, ETP systems, projects, gallery, and contact information."
        keywords="sitemap, website navigation, DLS Envirotech pages, water treatment services"
        canonical="https://dlsenvirotech.com/sitemap"
      />
      <div className="min-h-screen bg-muted">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Sitemap
            </h1>
            <p className="text-lg text-muted-foreground">
              Navigate through all sections of our website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitePages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Link key={page.href} href={page.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-semibold">
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

          <div className="mt-12 p-6 bg-background rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Website Structure
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Main Pages
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Home - Landing page with company overview</li>
                  <li>• About Us - Company information and team</li>
                  <li>• Services - Water treatment solutions</li>
                  <li>• Projects - Portfolio and case studies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Additional Resources
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gallery - Project photos and facilities</li>
                  <li>• Contact Us - Get in touch with our team</li>
                  <li>• Get Quote - Request project estimates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
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
