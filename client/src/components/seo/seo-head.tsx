import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://dlsenvirotech.com/og-image.jpg",
  schema
}: SEOHeadProps) => {
  const fullTitle = `${title} | DLS Envirotech Corporation`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dlsenvirotech.com';
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DLS Envirotech Corporation" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DLS Envirotech Corporation" />
      
      {/* Schema.org Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

// Organization Schema - Use on all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DLS Envirotech Corporation",
  "alternateName": "DLS Envirotech",
  "description": "Leading water treatment company specializing in STP, ETP, RO plants, and industrial wastewater treatment solutions across 22 countries with 2500+ installations",
  "url": "https://dlsenvirotech.com",
  "logo": "https://dlsenvirotech.com/logo.png",
  "image": "https://dlsenvirotech.com/og-image.jpg",
  "telephone": "+91-9568572005",
  "email": "contact@dlsenvirotech.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Industrial Way",
    "addressLocality": "Water City",
    "addressRegion": "WC",
    "postalCode": "12345",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6139,
    "longitude": 77.2090
  },
  "sameAs": [
    "https://www.facebook.com/dlsenvirotech",
    "https://www.linkedin.com/company/dlsenvirotech",
    "https://twitter.com/dlsenvirotech"
  ],
  "foundingDate": "2009",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 100
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Place",
      "name": "Global"
    }
  ],
  "knowsAbout": [
    "Water Treatment",
    "Sewage Treatment Plant",
    "Effluent Treatment Plant",
    "Wastewater Management",
    "Zero Liquid Discharge",
    "Reverse Osmosis",
    "Industrial Water Treatment"
  ]
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DLS Envirotech Corporation",
  "image": "https://dlsenvirotech.com/og-image.jpg",
  "@id": "https://dlsenvirotech.com",
  "url": "https://dlsenvirotech.com",
  "telephone": "+91-9568572005",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Industrial Way",
    "addressLocality": "Water City",
    "addressRegion": "WC",
    "postalCode": "12345",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// Service Schema Generator
export const createServiceSchema = (
  serviceName: string,
  description: string,
  serviceType: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceType,
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "DLS Envirotech Corporation",
    "telephone": "+91-9568572005",
    "url": "https://dlsenvirotech.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "INR"
    }
  }
});

// FAQ Schema Generator
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// BreadcrumbList Schema Generator
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
