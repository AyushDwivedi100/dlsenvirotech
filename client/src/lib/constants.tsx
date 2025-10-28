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
    technology: "Mechanical Segregation, Composting Technology, Engineered Landfill",
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
    technology: "Integrated Waste Management, Collection & Processing Systems",
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
    technology: "Automated Segregation, Mechanical Sorting, Shredding Systems",
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
    technology: "Engineered Landfill, Leachate Management, Weight Bridge System",
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
    technology: "Mechanical Segregation, Aerobic Composting, Material Recovery",
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
    technology: "Mechanical Segregation, Composting Technology, Recyclable Recovery",
    client: "Kajalgaon Municipal Board, Assam (Chirang BTC)",
    location: "Kajalgaon, Assam"
  },
  {
    id: "project-8",
    title: "MRF & Waste to Compost Plant - Barpeta",
    description: "Establishment and commissioning of Material Recovery Facility and Waste to Compost Plant for comprehensive municipal solid waste management and resource recovery.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Municipal Solid Waste"],
    technology: "Mechanical Segregation, Aerobic Composting, Material Recovery",
    client: "Barpeta Municipal Board, Assam",
    location: "Barpeta, Assam",
    completedDate: "February 2025"
  },
  {
    id: "project-9",
    title: "MRF & Waste to Compost Plant - Bilasipara",
    description: "Establishment and commissioning of Material Recovery Facility and Waste to Compost Plant for municipal solid waste processing and compost production.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Municipal Solid Waste"],
    technology: "Mechanical Segregation, Composting Technology, Resource Recovery",
    client: "Bilasipara Municipal Board, Assam",
    location: "Bilasipara, Assam",
    completedDate: "March 2025"
  },
  {
    id: "project-10",
    title: "MRF & Waste to Compost Plant - Dargaon",
    description: "Establishment and commissioning of Material Recovery Facility and Waste to Compost Plant for efficient municipal waste management and organic composting.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Municipal Waste Management"],
    technology: "Mechanical Segregation, Aerobic Composting, Recyclable Recovery",
    client: "Dargaon Municipal Board, Assam",
    location: "Dargaon, Assam",
    completedDate: "April 2025"
  },
  {
    id: "project-11",
    title: "MRF & Waste to Compost Plant - Dhubri",
    description: "Establishment and commissioning of Material Recovery Facility and Waste to Compost Plant for sustainable municipal solid waste management and resource recovery.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Sustainable Waste Management"],
    technology: "Mechanical Segregation, Composting Technology, Material Recovery",
    client: "Dhubri Municipal Board, Assam",
    location: "Dhubri, Assam",
    completedDate: "April 2025"
  },
  {
    id: "project-12",
    title: "MRF & Waste to Compost Plant Commissioning - Gauripur",
    description: "Commissioning and establishment of Material Recovery Facility and Waste to Compost Plant for comprehensive municipal solid waste processing and management.",
    image: "",
    category: ["swm", "mrf"],
    tags: ["Material Recovery Facility", "Waste to Compost", "Plant Commissioning"],
    technology: "Mechanical Segregation, Composting Technology, Recyclable Recovery",
    client: "Gauripur Municipal Board, Assam",
    location: "Gauripur, Assam",
    completedDate: "April 2025"
  },
  {
    id: "project-13",
    title: "FSTP - Hybrid & Mechanized with Screw Press Technology",
    description: "Design, supply, construction, installation, testing, and commissioning of Faecal Sludge Treatment Plant with hybrid mechanized screw press technology. Includes 3-4 years of operation and maintenance services.",
    image: "",
    category: ["fstp"],
    tags: ["Faecal Sludge Treatment", "Screw Press Technology", "Hybrid System", "Mechanized Treatment", "O&M"],
    capacity: "5 KLD",
    technology: "Hybrid Mechanized System, Screw Press Technology, Advanced Sludge Dewatering",
    client: "Rangia Municipal Board, Assam",
    location: "Village Hekuhti, Rangia, Assam",
    completedDate: "October 2024"
  },
  {
    id: "project-14",
    title: "Solid Waste Management O&M - Kanth & Puwanya",
    description: "Operation and maintenance management of comprehensive solid waste management systems for multiple municipal areas, ensuring efficient waste collection, processing, and disposal.",
    image: "",
    category: ["swm"],
    tags: ["Operation & Maintenance", "Solid Waste Management", "Municipal Services", "Waste Collection"],
    capacity: "15 TPD",
    technology: "Integrated Waste Management, Collection & Processing Systems",
    client: "UP Jal Nigam",
    location: "Nagar Palika Parishad Kanth & Puwanya, Shahjahanpur",
    completedDate: "December 2023"
  },
  {
    id: "project-15",
    title: "Sanitary Landfill Development - Chirang BTC",
    description: "Development of engineered sanitary landfill with comprehensive waste disposal infrastructure for scientific and environmentally safe waste management.",
    image: "",
    category: ["infrastructure"],
    tags: ["Sanitary Landfill", "Infrastructure Development", "Waste Disposal", "Environmental Management"],
    technology: "Engineered Landfill, Leachate Management, Environmental Controls",
    client: "Kajalgaon Municipal Board, Assam (Chirang BTC)",
    location: "Chirang BTC, Assam",
    completedDate: "September 2025"
  }
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Mehta",
    position: "Factory Manager",
    company: "Sterling Dyes & Chemicals, Ahmedabad",
    content: "We were struggling with GPCB compliance for two years. Three different vendors couldn't solve our COD discharge problem. DLS team spent a week understanding our process, then designed a custom ETP that actually works. Our COD levels are now consistently below 250 mg/L. Yes, installation took 2 weeks longer than promised, but the results speak for themselves.",
    rating: 4,
    project: "Custom ETP Installation"
  },
  {
    id: "testimonial-2",
    name: "Priya Nambiar",
    position: "Municipal Engineer",
    company: "Thrissur Municipal Corporation",
    content: "Honestly, we had bad experiences with contractors before. But Mr. Singh visited our site personally and his team delivered exactly what they promised. The 15 MLD STP has been operational for 8 months now without any major issues. Their AMC rates are also very reasonable compared to others we checked.",
    rating: 5,
    project: "Municipal STP - 15 MLD"
  },
  {
    id: "testimonial-3",
    name: "Vikas Agarwal",
    position: "Owner",
    company: "Agarwal Food Processing, Meerut",
    content: "Our old ETP was consuming too much power and chemicals. DLS upgraded the system with better aeration and we're now saving ₹45,000 monthly on operating costs. The payback period will be under 2 years. Good technical knowledge, reasonable pricing.",
    rating: 5,
    project: "ETP Modernization"
  },
  {
    id: "testimonial-4",
    name: "Dr. Sunita Reddy",
    position: "Hospital Administrator",
    company: "Apollo Clinic, Hyderabad",
    content: "We needed a compact STP for our new 50-bed facility. Space was very limited. DLS designed a modular system that fits in just 200 sq ft and handles our biomedical wastewater perfectly. Installation was clean, team was professional, and they trained our maintenance staff properly.",
    rating: 5,
    project: "Hospital STP - Compact Design"
  },
  {
    id: "testimonial-5",
    name: "Harpreet Singh Bhatia",
    position: "Director Operations",
    company: "Bhatia Textiles Ltd., Ludhiana",
    content: "Working with them for 3 years now. They maintain our ETP and cooling towers. Not the cheapest option we had, but definitely the most reliable. Emergency response is good - they came at 11 PM when our pH controller failed. Would recommend for anyone who needs dependable service.",
    rating: 4,
    project: "Ongoing Maintenance Contract"
  },
  {
    id: "testimonial-6",
    name: "Mohammed Farooq",
    position: "Project Head",
    company: "Skyline Developers, Noida",
    content: "We've built 4 residential townships and DLS has done the STP work for all of them. They understand builder timelines and compliance requirements. Their designs pass UPPCB approval without issues. Fair pricing, no surprises during execution.",
    rating: 5,
    project: "Multiple Residential STPs"
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
