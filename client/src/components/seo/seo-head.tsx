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
  "alternateName": ["DLS Envirotech", "DLS Envirotech Corporation Pvt. Ltd"],
  "description": `Leading wastewater treatment (WWTP, STP, FSTP, MBBR), solid waste management (W2C, C&D, MRF), bio-remediation & medical gas pipeline (MGPS) company in India. CPCB approved, ISO 9001:2015 certified. 200+ installations across India with ${yearsExp} years expertise. MBR, MBBR, SBR technology. International projects.`,
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
    "https://www.indiamart.com/dlsenvirotechcorporation/",
    "https://www.facebook.com/dlsenvirotech",
    "https://www.linkedin.com/company/dlsenvirotech",
    "https://twitter.com/dlsenvirotech"
  ],
  "foundingDate": "2015",
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
      "@type": "State",
      "name": "Uttar Pradesh"
    },
    {
      "@type": "State",
      "name": "Assam"
    }
  ],
  "slogan": "Comprehensive Environmental Solutions for Industry & Municipalities Worldwide",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "Sewage Treatment Plant (STP)",
    "Wastewater Treatment Plant (WWTP)",
    "Moving Bed Biofilm Reactor (MBBR)",
    "Faecal Sludge Treatment Plant (FSTP)",
    "Effluent Treatment Plant (ETP)",
    "Common Effluent Treatment Plant (CETP)",
    "Water Treatment Plant (WTP)",
    "Rain Water Harvesting (RWH)",
    "Solid Waste Management",
    "Material Recovery Facility (MRF)",
    "Waste to Compost Systems (W2C)",
    "Waste-to-Energy Systems",
    "Construction & Demolition Waste Management (C&D)",
    "Bio-Methanation Plant",
    "Bio-Remediation Solutions",
    "Medical Gas Pipeline System (MGPS)",
    "MBBR Technology",
    "MBR Membrane Bioreactor",
    "SBR Sequencing Batch Reactor",
    "Extended Aeration Technology",
    "Packaged STP",
    "Industrial RO Plants",
    "Water Cooling Towers",
    "Absorption Cooling Systems",
    "Process Cooling Solutions",
    "Boilers & Heaters",
    "Steam Generation Systems",
    "Turnkey Power Plants",
    "Solar Energy Solutions",
    "PSA Oxygen Plants",
    "Air Pollution Control",
    "Specialty Environmental Chemicals",
    "Septage Treatment",
    "Water Recycling",
    "Zero Liquid Discharge (ZLD)",
    "Industrial Wastewater Treatment",
    "Sanitary Landfill",
    "CPCB Compliance",
    "SPCB Compliance",
    "Environmental Engineering",
    "Turnkey Projects",
    "STP O&M Services",
    "Operation & Maintenance (O&M)",
    "Consultation & Design Services",
    "Upgradation & Retrofitting",
    "Regulatory Compliance Assistance",
    "Organic Waste Composting",
    "Soil Remediation",
    "Water Purification",
    "Oil Spills Treatment",
    "Heavy Metals Remediation",
    "Hospital Infrastructure"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "ISO 9001:2015 Certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "CPCB Approved Contractor"
    }
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
