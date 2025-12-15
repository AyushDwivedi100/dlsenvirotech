import { useState } from "react";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  CLIENTS,
  CLIENT_CATEGORIES,
  getClientsByCategory,
} from "@/constants/clients";
import { Building2 } from "lucide-react";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";

const PLACEHOLDER_LOGO =
  "https://www.fmt.se/wp-content/uploads/2023/02/logo-placeholder-image.png";

const ClientCard = ({
  client,
}: {
  client: {
    id: string;
    name: string;
    logo: string;
    category: string;
    website?: string;
  };
}) => {
  const [imageSrc, setImageSrc] = useState(client.logo);

  const getCategoryLabel = (category: string) => {
    const cat = CLIENT_CATEGORIES.find((c) => c.id === category);
    return cat?.label || category;
  };

  const content = (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="bg-white rounded-md p-1 flex items-center justify-center mb-3">
        <img
          src={imageSrc}
          alt={client.name}
          className="max-h-12 sm:max-h-32 w-auto object-contain"
          loading="lazy"
          onError={() => setImageSrc(PLACEHOLDER_LOGO)}
        />
      </div>
      <span className="text-sm text-foreground font-medium leading-tight line-clamp-2 mb-1">
        {client.name}
      </span>
      <span className="text-xs text-muted-foreground">
        {getCategoryLabel(client.category)}
      </span>
    </div>
  );

  return (
    <div
      className="flex items-center justify-center p-4 sm:p-6 bg-card rounded-lg border border-border hover-elevate transition-all duration-300 min-h-[140px] sm:min-h-[160px]"
      data-testid={`client-card-${client.id}`}
      title={client.name}
    >
      {client.website ? (
        <a
          href={client.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-full"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

const CATEGORY_ORDER = ["government", "private", "international", "municipal"];

const OurClients = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const rawClients = getClientsByCategory(selectedCategory);

  const filteredClients = [...rawClients].sort((a, b) => {
    const orderA = CATEGORY_ORDER.indexOf(a.category);
    const orderB = CATEGORY_ORDER.indexOf(b.category);
    return orderA - orderB;
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Our Clients", url: "https://dlsenvirotech.com/clients" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  return (
    <>
      <SEOHead
        title="Our Clients | DLS Envirotech - Trusted by Government & Industry"
        description="Trusted by UP Jal Nigam, Municipal Boards across Assam, and leading industries. Our clients include government organizations, municipal bodies, and private sector companies for water treatment and waste management projects."
        keywords="DLS Envirotech clients, UP Jal Nigam, Assam municipal boards, water treatment clients India, STP project clients, waste management clients, government environmental projects, municipal corporation projects, industrial water treatment clients"
        canonical="https://dlsenvirotech.com/clients"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <section className="py-12 sm:py-16 md:py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our Valued Clients
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Trusted by government organizations, municipal bodies, and
                  leading industries across India for comprehensive
                  environmental solutions
                </p>
              </div>

              {CLIENTS.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {filteredClients.map((client) => (
                      <ClientCard key={client.id} client={client} />
                    ))}
                  </div>

                  {filteredClients.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        No clients found in this category.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-6">
                    <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    Client Portfolio Coming Soon
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We are updating our client portfolio. Check back soon to see
                    the organizations we have partnered with.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OurClients;
