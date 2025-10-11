# DLS Envirotech Corporation - Water Treatment Solutions

## Overview

This is a full-stack web application for DLS Envirotech Corporation, a water treatment solutions company. The application serves as a comprehensive business website showcasing their services, portfolio, and providing client interaction capabilities through consultation requests and an AI chatbot.

## Recent Changes (October 2025)

✓ Updated company logo to new DLS Envirotech branding (dls-envirotech-logo.png)
✓ Updated primary contact phone number to +919568572005 across all pages
✓ Added createConsultation method to mockApi for contact form functionality

## Previous Changes (January 2025)

✓ Replaced placeholder factory icons with actual DLS company logo throughout the site
✓ Updated navigation menu structure: About Us, Services, Projects, Gallery, Contact Us, Get Quote
✓ Removed Home link from navigation (logo serves as home link)
✓ Added visual active state indicators for current page in navigation
✓ Replaced all placeholder images with high-quality professional water treatment facility photos
✓ Created comprehensive Gallery page with project installation images
✓ Enhanced navigation with underline indicators and background highlights for active states

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server concerns:

- **Frontend**: React SPA with TypeScript, built using Vite
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Built for production with static file serving

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom industrial color scheme

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for consultations and chat functionality
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reload with Vite middleware integration

### Database Schema
- **Users**: Authentication system (id, username, password)
- **Consultations**: Client consultation requests with contact info and service details
- **Chat Messages**: AI chatbot conversation history with session tracking

### UI/UX Design
- **Theme**: Industrial/professional with blue and green accent colors
- **Components**: Comprehensive shadcn/ui component set including forms, cards, dialogs
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Accessibility**: ARIA labels and semantic HTML structure

## Data Flow

### Client Interaction Flow
1. User visits website and browses services/portfolio
2. User can request consultation via contact form
3. Form data sent to `/api/consultations` endpoint
4. Consultation stored and user receives confirmation
5. Optional: User interacts with chatbot for immediate assistance

### Chat System Flow
1. User opens chatbot widget
2. Messages sent to `/api/chat` endpoint with session ID
3. Simple response generation (placeholder for AI integration)
4. Chat history maintained per session

### Content Management
- Static content defined in constants files
- Services, portfolio projects, and testimonials configured as data objects
- Dynamic rendering of cards and sections based on data

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Components**: Radix UI primitives, Lucide React icons
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS, class-variance-authority for component variants

### Backend Dependencies
- **Express.js**: Web framework with middleware support
- **Database**: Drizzle ORM with PostgreSQL adapter (Neon serverless)
- **Validation**: Zod schemas for type-safe data validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Tailwind
- **ESBuild**: Fast JavaScript bundling for production

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with TypeScript execution via tsx
- In-memory storage for rapid development iteration
- Replit-specific tooling and error overlay

### Production Build
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Serving**: Express serves both API routes and static frontend files

### Environment Configuration
- Database URL configured via environment variables
- Separate development and production configurations
- Static asset serving handled by Express in production
- Error handling with structured JSON responses

### Scalability Considerations
- Interface-based storage allows easy migration from in-memory to database
- Modular component architecture supports feature expansion
- RESTful API design enables mobile app integration
- Session-based chat system ready for multi-user scaling