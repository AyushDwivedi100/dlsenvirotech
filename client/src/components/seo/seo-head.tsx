import { Helmet } from "react-helmet";
import { getYearsOfExperienceString } from "@/lib/utils/company-info";

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
const yearsExp = getYearsOfExperienceString();
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DLS Envirotech Corporation",
  "alternateName": "DLS Envirotech",
  "description": `Leading water treatment company in India specializing in STP, ETP, RO plants, and industrial wastewater treatment solutions with 200+ installations nationwide and ${yearsExp} years of expertise`,
  "url": "https://dlsenvirotech.com",
  "logo": "https://dlsenvirotech.com/logo.png",
  "image": "https://dlsenvirotech.com/og-image.jpg",
  "telephone": "+91-9568572005",
  "email": "info.dlsenvirotech@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-25, Sector-6",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5931423,
    "longitude": 77.3212035
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
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "slogan": "Expert Water Treatment Solutions for a Sustainable Future",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "Water Treatment",
    "Sewage Treatment Plant",
    "Effluent Treatment Plant",
    "Wastewater Management",
    "Zero Liquid Discharge",
    "Reverse Osmosis",
    "Industrial Water Treatment",
    "Biological Treatment Systems",
    "Chemical Treatment Solutions",
    "Membrane Bioreactor (MBR)",
    "Sequential Batch Reactor (SBR)"
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
    "streetAddress": "F-25, Sector-6, Noida 201301 (U.P.)",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
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

// Review Schema Generator
export const createReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Water Treatment Solutions",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": reviews.length.toString()
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
});

// Offer Schema Generator (for services with pricing indication)
export const createOfferSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "DLS Envirotech Corporation"
    }
  },
  "availability": "https://schema.org/InStock",
  "priceCurrency": "INR",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
});
