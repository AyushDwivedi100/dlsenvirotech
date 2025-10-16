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
    id: "project-1",
    title: "MRF & Waste to Compost Plant with Sanitary Landfill",
    description: "Establishment and commissioning of comprehensive solid waste management infrastructure including Material Recovery Facility, Waste to Compost Plant, and Sanitary Landfill for municipal waste processing.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Sanitary Landfill", "Municipal Solid Waste"],
    client: "Hailakandi Municipal Board, Assam",
    location: "Hailakandi, Assam",
    completedDate: "July 2025"
  },
  {
    id: "project-2",
    title: "Solid Waste Management Operation & Maintenance",
    description: "Comprehensive operation and maintenance management of solid waste management systems across multiple municipalities, ensuring efficient waste collection, processing, and disposal.",
    image: "",
    category: ["swm"],
    tags: ["Operation & Maintenance", "Solid Waste Management", "Municipal Services"],
    capacity: "15 TPD",
    client: "UP Jal Nigam",
    location: "Allahganj, Jalalabad, Kant, Punvaya",
    completedDate: "July 2024"
  },
  {
    id: "project-3",
    title: "Solid Waste Processing Equipment Installation",
    description: "Installation of advanced waste processing equipment including garbage separator trommel machine, shredding machine with conveyor belt, sorting conveyor machine, weight bridge, and sieving machine for efficient solid waste management.",
    image: "",
    category: ["swm"],
    tags: ["Trommel Machine", "Shredding Machine", "Sorting Conveyor", "Weight Bridge", "Sieving Machine"],
    capacity: "10 TPD",
    client: "Nagar Palika Parishad",
    location: "Amroha, Gajraula",
    completedDate: "November 2022"
  },
  {
    id: "project-4",
    title: "Bio-Methanation Plant & Waste to Compost Facility",
    description: "Establishment of large-scale bio-methanation plant utilizing anaerobic digestion technology for waste-to-energy conversion, combined with waste to compost facility for sustainable waste management and renewable energy generation.",
    image: "",
    category: ["swm", "waste-to-energy"],
    tags: ["Bio-Methanation", "Anaerobic Digestor", "Waste to Compost", "Waste-to-Energy", "Renewable Energy"],
    capacity: "95 TPD",
    technology: "Anaerobic Digestor, Waste-to-Energy Technology",
    client: "Kisan Sahkari Chini Mills Ltd.",
    location: "Najibabad, Bijnor, Uttar Pradesh",
    completedDate: "March 2023"
  },
  {
    id: "project-5",
    title: "Sanitary Landfill & Weight Bridge Establishment",
    description: "Development of engineered sanitary landfill with integrated weight bridge system for scientific waste disposal and accurate waste quantification.",
    image: "",
    category: ["swm"],
    tags: ["Sanitary Landfill", "Weight Bridge", "Waste Disposal"],
    capacity: "30 MT",
    client: "Nagar Palika Parishad Amroha",
    location: "Amroha",
    completedDate: "June 2023"
  },
  {
    id: "project-6",
    title: "MRF & Waste to Compost Plant - Nalbari",
    description: "Establishment of Material Recovery Facility and Waste to Compost Plant for segregation, processing, and conversion of municipal solid waste into valuable resources.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Resource Recovery"],
    client: "Nalbari Municipal Board, Assam",
    location: "Nalbari, Assam",
    completedDate: "June 2025"
  },
  {
    id: "project-7",
    title: "MRF & Waste to Compost Plant - Kajalgaon",
    description: "Establishment of Material Recovery Facility and Waste to Compost Plant for efficient municipal solid waste management and resource recovery.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Municipal Waste"],
    client: "Kajalgaon Municipal Board, Assam (Chirang BTC)",
    location: "Kajalgaon, Assam"
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
  },
  {
    id: "testimonial-4",
    name: "Suresh Patel",
    position: "Environmental Compliance Officer",
    company: "Gujarat Industrial Corporation",
    content: "We've worked with several water treatment vendors, but DLS stands out for their reliability. Their cooling tower system has been running flawlessly for 18 months now, and the energy savings are better than projected.",
    rating: 5,
    project: "Industrial Cooling System"
  },
  {
    id: "testimonial-5",
    name: "Kavita Desai",
    position: "Sustainability Head",
    company: "Green Valley Resorts",
    content: "Initially skeptical about the ROI, but the wastewater recycling system has paid for itself in just 14 months. The team was patient with our queries and provided excellent post-installation training to our staff.",
    rating: 4,
    project: "Resort Water Recycling"
  },
  {
    id: "testimonial-6",
    name: "Dr. Anil Verma",
    position: "Quality Assurance Manager",
    company: "BioMed Laboratories",
    content: "Precision is everything in our industry. The DM plant they installed maintains consistent water purity levels - we've had zero batch rejections due to water quality since installation. Professional team, thorough documentation.",
    rating: 5,
    project: "Laboratory DM Plant"
  },
];

export const QUICK_CHAT_MESSAGES = [
  "What is STP capacity calculation?",
  "ETP technology options",
  "Get pricing quote",
  "RO system specifications",
  "Cooling tower capacity",
  "Maintenance services"
];
