import { ServiceType, PortfolioProject, TestimonialType } from "@/types";
import { Droplets, Building2, Recycle, Gauge, Thermometer, Settings } from "lucide-react";

export const SERVICES: ServiceType[] = [
  {
    id: "stp",
    title: "Sewage Treatment Plants (STP)",
    description: "Advanced biological and chemical treatment systems for municipal and residential wastewater management with high efficiency.",
    features: ["Biological Treatment", "Chemical Treatment", "Sludge Management"],
    icon: "Droplets",
    category: "water-treatment"
  },
  {
    id: "etp",
    title: "Effluent Treatment Plants (ETP)",
    description: "Specialized industrial effluent treatment systems ensuring regulatory compliance and environmental protection.",
    features: ["Chemical Treatment", "Physical Separation", "Biological Processing"],
    icon: "Building2",
    category: "industrial"
  },
  {
    id: "wtp",
    title: "Water Treatment Plants (WTP)",
    description: "Comprehensive water purification systems for municipal and industrial applications with advanced filtration technology.",
    features: ["Multi-stage Filtration", "Chemical Dosing", "Quality Monitoring"],
    icon: "Droplets",
    category: "water-treatment"
  },
  {
    id: "industrial-ro",
    title: "Industrial RO Plants",
    description: "High-capacity reverse osmosis plants for industrial water purification and process water treatment.",
    features: ["Multi-stage Filtration", "High Recovery Rate", "Automated Controls"],
    icon: "Gauge",
    category: "industrial"
  },
  {
    id: "water-cooling-tower",
    title: "Water Cooling Towers",
    description: "Industrial cooling tower systems for heat rejection in power plants, manufacturing facilities, and HVAC applications.",
    features: ["Counter Flow Design", "High Efficiency", "Corrosion Resistant"],
    icon: "Thermometer",
    category: "industrial"
  },
  {
    id: "fstp",
    title: "Faecal Sludge Treatment Plants (FSTP)",
    description: "Specialized treatment systems for faecal sludge management with advanced processing and sanitization technology.",
    features: ["Sludge Dewatering", "Pathogen Removal", "Resource Recovery"],
    icon: "Recycle",
    category: "water-treatment"
  },
  {
    id: "mrf",
    title: "Material Recovery Facilities (MRF)",
    description: "Advanced sorting and processing facilities for recyclable materials with automated separation technology.",
    features: ["Automated Sorting", "Material Recovery", "Quality Control"],
    icon: "Recycle",
    category: "waste-management"
  },
  {
    id: "solid-waste-management",
    title: "Solid Waste Management Plants",
    description: "Comprehensive solid waste processing facilities including composting, recycling, and waste-to-energy solutions.",
    features: ["Waste Processing", "Composting", "Energy Recovery"],
    icon: "Recycle",
    category: "waste-management"
  },
  {
    id: "psa-oxygen",
    title: "PSA Oxygen Plants",
    description: "Pressure Swing Adsorption oxygen generation plants for medical, industrial, and aquaculture applications.",
    features: ["High Purity Oxygen", "Energy Efficient", "Automated Operation"],
    icon: "Settings",
    category: "industrial"
  },
  {
    id: "air-pollution-solutions",
    title: "Industrial Air Pollution Solutions",
    description: "Advanced air pollution control systems including scrubbers, baghouse filters, and emission monitoring.",
    features: ["Emission Control", "Air Scrubbers", "Monitoring Systems"],
    icon: "Settings",
    category: "industrial"
  },
  {
    id: "air-tower",
    title: "Air Towers",
    description: "Industrial air circulation and ventilation tower systems for improved air quality and environmental control.",
    features: ["Air Circulation", "Ventilation Control", "Environmental Management"],
    icon: "Settings",
    category: "industrial"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "municipal-stp-50mld",
    title: "Municipal STP - 50 MLD Capacity",
    description: "Advanced biological treatment system for municipal wastewater serving 200,000 population equivalent.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: ["stp", "municipal"],
    tags: ["STP", "Municipal"],
    capacity: "50 MLD",
    technology: "SBR + MBR",
    location: "Gujarat, India"
  },
  {
    id: "textile-etp-zld",
    title: "Textile Industry ETP - ZLD System",
    description: "Zero Liquid Discharge system for textile manufacturing facility with advanced chemical treatment.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: ["etp", "industrial"],
    tags: ["ETP", "Industrial"],
    capacity: "15 MLD",
    technology: "ZLD + RO",
    industry: "Textile"
  },
  {
    id: "pharmaceutical-ro-dm",
    title: "Pharmaceutical RO & DM Plant",
    description: "High-purity water production system for pharmaceutical manufacturing with stringent quality requirements.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: ["industrial"],
    tags: ["RO Plant", "Industrial"],
    capacity: "5000 LPH",
    technology: "RO + EDI",
    industry: "Pharmaceutical"
  },
  {
    id: "cetp-industrial",
    title: "Common Effluent Treatment Plant",
    description: "Centralized treatment facility serving multiple industrial units in manufacturing cluster.",
    image: "https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: ["etp", "industrial"],
    tags: ["CETP", "Industrial"],
    capacity: "25 MLD",
    technology: "MBBR + UF",
    industry: "Manufacturing"
  },
  {
    id: "smart-city-stp",
    title: "Smart City STP with IoT Monitoring",
    description: "Next-generation sewage treatment plant with real-time monitoring and automated control systems.",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: ["stp", "municipal"],
    tags: ["STP", "Municipal"],
    capacity: "100 MLD",
    technology: "Smart SBR",
    location: "Smart City Project"
  },
  {
    id: "power-plant-cooling",
    title: "Power Plant Cooling System",
    description: "Large-scale cooling tower system for thermal power plant with advanced heat rejection technology.",
    image: "https://images.unsplash.com/photo-1473116763246-b726752ebc2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: ["industrial"],
    tags: ["Cooling Tower", "Power Plant"],
    capacity: "50,000 TR",
    technology: "Counter Flow",
    industry: "Power Generation"
  }
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "testimonial-1",
    name: "Arjun Kumar",
    position: "Plant Manager",
    company: "ABC Textiles",
    content: "DLS Envirotech delivered an exceptional ETP solution that not only meets all regulatory requirements but also achieved 40% reduction in our water consumption through their innovative recycling system.",
    rating: 5,
    project: "Zero Liquid Discharge Implementation"
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    position: "Municipal Engineer",
    company: "City Corporation",
    content: "The 50 MLD STP project was completed ahead of schedule with excellent quality. The automated monitoring system has significantly reduced our operational costs and improved treatment efficiency.",
    rating: 5,
    project: "Municipal STP Project"
  },
  {
    id: "testimonial-3",
    name: "Raj Gupta",
    position: "Operations Director",
    company: "PharmaCorp",
    content: "Outstanding technical support and maintenance services. Their RO system consistently produces pharmaceutical-grade water that exceeds USP standards. Highly recommended for critical applications.",
    rating: 5,
    project: "Pharmaceutical Water System"
  }
];

export const QUICK_CHAT_MESSAGES = [
  "What is STP capacity calculation?",
  "ETP technology options",
  "Get pricing quote",
  "RO system specifications",
  "Cooling tower capacity",
  "Maintenance services"
];
