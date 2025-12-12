# DLS Envirotech Corporation - Water Treatment Solutions

## Overview

This project is a React-based static website for DLS Envirotech Corporation, a water treatment solutions company. Its primary purpose is to showcase the company's extensive services, portfolio, and enable consultation requests. The website is configured for static file hosting environments like Hostinger Premium Web Hosting. The business vision is to establish DLS Envirotech as a leader in sustainable water and environmental solutions, focusing on the Indian market with ambitions for nationwide service.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter for client-side routing, supported by `.htaccess` for SPA handling.
- **Styling**: Tailwind CSS, integrated with shadcn/ui components for a consistent design system.
- **State Management**: TanStack Query for server state.

### UI/UX Design

- **Theme**: Professional industrial aesthetic with a light blue accent color. Full dark mode support implemented using CSS variables.
- **Responsiveness**: Mobile-first design approach with comprehensive responsive scaling for all components and typography across various screen sizes (320px to 4K).
- **Accessibility**: Utilizes ARIA labels and semantic HTML.
- **Components**: Leverages shadcn/ui and Radix UI primitives for forms, cards, and dialogs.
- **PWA**: Progressive Web App support with `manifest.json`.
- **Branding**: Incorporated new DLS Envirotech logo and updated brand colors.
- **Navigation**: Enhanced header readability and responsiveness for tablet screens. Slim, modern scrollbar with custom styling.

### Deployment and Hosting

- **Hosting Environment**: Designed exclusively for static file hosting (e.g., Hostinger Premium Web Hosting, which does not support Node.js backends).
- **Automated Deployment**: Includes an automated pre-build script (`client/scripts/prebuild.js`) that handles domain configuration, sitemap date updates, and generation of optimized static files.
- **Apache Configuration**: A comprehensive `.htaccess` file is generated, providing HTTPS enforcement, React Router SPA support, Gzip compression, browser caching, and security headers.
- **SEO Ready**: Automated generation of `sitemap.xml`, `sitemap.txt`, and `robots.txt` with dynamic domain and date updates.
- **Content Strategy**: Focus on India-specific content, authentic testimonials, and upcoming project portfolio.

### Core Features

- Display of water treatment services, including 9 newly added services like CETP, Rain Water Harvesting, Waste-to-Energy, and Solar Energy Solutions.
- Portfolio showcasing capabilities (with "Coming Soon" for real projects).
- Consultation request form (currently uses a mock API).
- Comprehensive SEO optimization across all pages, including meta tags, Schema.org structured data (Organization, LocalBusiness, FAQ, Breadcrumb), Open Graph, and Twitter Card tags.
- Content expanded with founding year, global presence statistics, and detailed service descriptions.

## External Dependencies

- **Wouter**: For client-side routing.
- **TanStack Query**: For server state management.
- **shadcn/ui & Radix UI**: UI component libraries.
- **Tailwind CSS**: For styling.
- **Mock API**: Used for development of the contact form (`createConsultation`). **Note**: This will need replacement with a real external service (e.g., Formspree, EmailJS) for production contact form functionality.
