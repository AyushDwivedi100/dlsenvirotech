import { ServiceType, PortfolioProject, TestimonialType } from "@/types";
import { Droplets, Building2, Recycle, Gauge, Thermometer, Settings } from "lucide-react";

export const SERVICES: ServiceType[] = [
  {
    id: "wastewater-treatment",
    title: "Wastewater Treatment",
    description: "Advanced biological and chemical treatment processes for municipal and industrial wastewater management.",
    features: ["SBR Technology", "MBR Systems", "Zero Liquid Discharge"],
    icon: "Droplets",
    category: "water-treatment"
  },
  {
    id: "effluent-treatment",
    title: "Effluent Treatment Plants",
    description: "Specialized industrial effluent treatment systems ensuring regulatory compliance and environmental protection.",
    features: ["Chemical Treatment", "Physical Separation", "Biological Processing"],
    icon: "Building2",
    category: "industrial"
  },
  {
    id: "solid-waste-management",
    title: "Solid Waste Management",
    description: "Material Recovery Facilities and comprehensive solid waste processing solutions for sustainable waste management.",
    features: ["MRF Systems", "Waste Sorting", "Resource Recovery"],
    icon: "Recycle",
    category: "waste-management"
  },
  {
    id: "ro-dm-plants",
    title: "RO & DM Plants",
    description: "Industrial reverse osmosis and demineralization systems for high-quality water production and purification.",
    features: ["Industrial RO Systems", "Demineralization", "Process Water"],
    icon: "Gauge",
    category: "water-treatment"
  },
  {
    id: "cooling-towers",
    title: "Cooling Tower Systems",
    description: "Advanced cooling tower solutions for industrial process cooling and heat rejection applications.",
    features: ["Cross Flow Towers", "Counter Flow Systems", "Custom Solutions"],
    icon: "Thermometer",
    category: "industrial"
  },
  {
    id: "turnkey-solutions",
    title: "Turnkey Solutions",
    description: "Complete project implementation from design to commissioning for specialized industrial applications.",
    features: ["Design Engineering", "Project Management", "Commissioning"],
    icon: "Settings",
    category: "consulting"
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
