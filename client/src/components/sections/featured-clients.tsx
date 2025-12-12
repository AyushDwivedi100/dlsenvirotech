import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Building2 } from "lucide-react";
import { CLIENTS, getFeaturedClients } from "@/constants/clients";
import { useState } from "react";

const PLACEHOLDER_LOGO = "https://www.fmt.se/wp-content/uploads/2023/02/logo-placeholder-image.png";

const ClientCard = ({
  client,
}: {
  client: { id: string; name: string; logo: string; website?: string };
}) => {
  const [imageSrc, setImageSrc] = useState(client.logo);

  const content = (
    <img
      src={imageSrc}
      alt={client.name}
      className="max-h-12 sm:max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      loading="lazy"
      onError={() => setImageSrc(PLACEHOLDER_LOGO)}
    />
  );

  return (
    <div
      className="flex items-center justify-center p-4 sm:p-6 bg-card rounded-lg border border-border hover-elevate transition-all duration-300 min-h-[100px] sm:min-h-[120px]"
      data-testid={`client-logo-${client.id}`}
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

const FeaturedClients = () => {
  const featuredClients = getFeaturedClients();
  const hasClients = CLIENTS.length > 0;

  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      data-testid="section-featured-clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our Valued Clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Trusted by government organizations, municipal bodies, and leading
            industries across India and internationally for comprehensive
            environmental solutions
          </p>
        </div>

        {hasClients && featuredClients.length > 0 ? (
          <>
            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {featuredClients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto text-white"
                data-testid="button-view-all-clients"
              >
                <Link href="/clients">
                  <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">View All Clients</span>
                </Link>
              </Button>
            </div>
          </>
        ) : (
          /* Placeholder when no clients are added yet */
          <div className="text-center py-12 sm:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-6">
              <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Client Logos Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We are updating our client portfolio. Check back soon to see the
              organizations we have partnered with.
            </p>
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto text-white"
              data-testid="button-view-all-clients"
            >
              <Link href="/clients">
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">View All Clients</span>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedClients;
