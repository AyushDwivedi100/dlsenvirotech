import { ServiceType, TestimonialType } from "@/types/index";

export const SERVICES: ServiceType[] = [
  {
    id: "stp",
    title: "Sewage Treatment Plants (STP)",
    description:
      "Advanced sewage treatment plants using Extended Aeration, Moving Bed Biofilm Reactor (MBBR), and Sequencing Batch Reactors (SBR) technologies. Capacity up to 15 MLD with CPCB and SPCB compliance for municipal and residential wastewater management.",
    features: [
      "Extended Aeration, MBBR & SBR Technologies",
      "Capacity: Up to 15 MLD",
      "CPCB & SPCB Compliance",
      "Sustainable Water Reuse for Irrigation",
      "Nutrient Removal & Sludge Handling",
      "Comprehensive O&M Services",
    ],
    icon: "Droplets",
    category: "water-treatment",
  },
  {
    id: "etp",
    title: "Effluent Treatment Plants (ETP)",
    description:
      "Specialized industrial effluent treatment systems ensuring regulatory compliance and environmental protection.",
    features: [
      "Chemical Treatment",
      "Physical Separation",
      "Biological Processing",
    ],
    icon: "Building2",
    category: "industrial",
  },
  {
    id: "wtp",
    title: "Water Treatment Plants (WTP)",
    description:
      "Comprehensive water purification systems for municipal and industrial applications with advanced filtration technology.",
    features: [
      "Multi-stage Filtration",
      "Chemical Dosing",
      "Quality Monitoring",
    ],
    icon: "Droplets",
    category: "water-treatment",
  },
  {
    id: "industrial-ro",
    title: "Industrial RO Plants",
    description:
      "High-capacity reverse osmosis plants for industrial water purification and process water treatment.",
    features: [
      "Multi-stage Filtration",
      "High Recovery Rate",
      "Automated Controls",
    ],
    icon: "Gauge",
    category: "industrial",
  },
  {
    id: "water-cooling-tower",
    title: "Water Cooling Towers",
    description:
      "Industrial cooling tower systems for heat rejection in power plants, manufacturing facilities, and HVAC applications.",
    features: ["Counter Flow Design", "High Efficiency", "Corrosion Resistant"],
    icon: "Thermometer",
    category: "industrial",
  },
  {
    id: "fstp",
    title: "Faecal Sludge Treatment Plants (FSTP)",
    description:
      "Specialized treatment systems for faecal sludge management with advanced processing and sanitization technology.",
    features: ["Sludge Dewatering", "Pathogen Removal", "Resource Recovery"],
    icon: "Recycle",
    category: "water-treatment",
  },
  {
    id: "mrf",
    title: "Material Recovery Facilities (MRF)",
    description:
      "Advanced sorting and processing facilities for recyclable materials with automated separation technology.",
    features: ["Automated Sorting", "Material Recovery", "Quality Control"],
    icon: "Recycle",
    category: "waste-management",
  },
  {
    id: "solid-waste-management",
    title: "Solid Waste Management Plants",
    description:
      "Comprehensive solid waste processing facilities including composting, recycling, and waste-to-energy solutions.",
    features: ["Waste Processing", "Composting", "Energy Recovery"],
    icon: "Recycle",
    category: "waste-management",
  },
  {
    id: "psa-oxygen",
    title: "PSA Oxygen Plants",
    description:
      "Pressure Swing Adsorption oxygen generation plants for medical, industrial, and aquaculture applications.",
    features: ["High Purity Oxygen", "Energy Efficient", "Automated Operation"],
    icon: "Settings",
    category: "industrial",
  },
  {
    id: "air-pollution-solutions",
    title: "Industrial Air Pollution Solutions",
    description:
      "Advanced air pollution control systems including scrubbers, baghouse filters, and emission monitoring.",
    features: ["Emission Control", "Air Scrubbers", "Monitoring Systems"],
    icon: "Settings",
    category: "industrial",
  },
  {
    id: "air-tower",
    title: "Air Towers",
    description:
      "Industrial air circulation and ventilation tower systems for improved air quality and environmental control.",
    features: [
      "Air Circulation",
      "Ventilation Control",
      "Environmental Management",
    ],
    icon: "Settings",
    category: "industrial",
  },
  {
    id: "wwtp",
    title: "Wastewater Treatment Plants (WWTP)",
    description:
      "Comprehensive wastewater treatment solutions for industrial and municipal applications with advanced purification and recycling technology.",
    features: [
      "Primary Treatment",
      "Secondary Treatment",
      "Tertiary Treatment",
      "Water Recycling",
    ],
    icon: "Waves",
    category: "water-treatment",
  },
  {
    id: "mbbr",
    title: "Moving Bed Biofilm Reactor (MBBR)",
    description:
      "Advanced MBBR technology for efficient biological wastewater treatment with compact design and high treatment capacity.",
    features: [
      "Biofilm Technology",
      "Compact Design",
      "High Efficiency",
      "Low Maintenance",
    ],
    icon: "Droplets",
    category: "water-treatment",
  },
  {
    id: "w2c",
    title: "Waste to Compost Systems (W2C)",
    description:
      "Organic waste composting systems converting biodegradable waste into high-quality compost for sustainable waste management.",
    features: [
      "Aerobic Composting",
      "Odor Control",
      "Quality Compost Production",
      "Organic Waste Processing",
    ],
    icon: "Sprout",
    category: "waste-management",
  },
  {
    id: "bio-remediation",
    title: "Bio-Remediation Solutions",
    description:
      "Eco-friendly biological treatment using specific microorganisms to degrade pollutants including oil spills, heavy metals, and industrial chemicals. Comprehensive remediation for contaminated sites, water bodies, and landfills with sustainable results.",
    features: [
      "Microbial Treatment for Pollutants",
      "Oil Spills & Heavy Metals Degradation",
      "Industrial Chemicals Remediation",
      "Contaminated Sites & Landfills Restoration",
      "Water Bodies Purification",
      "Eco-Friendly & Sustainable Process",
      "Long-term Environmental Health",
      "CPCB Compliance",
    ],
    icon: "Leaf",
    category: "environmental",
  },
  {
    id: "mgps",
    title: "Medical Gas Pipeline System (MGPS)",
    description:
      "Complete medical gas pipeline systems for hospitals including oxygen, nitrous oxide, and vacuum systems with safety features.",
    features: [
      "Oxygen Pipeline",
      "Nitrous Oxide System",
      "Vacuum System",
      "Safety Controls",
    ],
    icon: "Stethoscope",
    category: "medical",
  },
  {
    id: "cd-waste",
    title: "Construction & Demolition Waste Management",
    description:
      "End-to-end C&D waste management with dedicated fleet for collection & transportation. On-site/off-site segregation into concrete, metals, wood, plastics, bricks, and soil. Complete recycling process: primary crushing, screening, magnetic separation, producing recycled aggregates and sand substitutes.",
    features: [
      "Collection & Transportation Fleet",
      "On-site/Off-site Segregation",
      "Concrete, Metals, Wood, Plastics Processing",
      "Primary Crushing & Screening",
      "Magnetic Separation for Metals",
      "Recycled Aggregates & Sand Production",
      "Mobile Processing Units Available",
      "Safe Disposal for Non-Recyclables",
    ],
    icon: "Trash2",
    category: "waste-management",
  },
  {
    id: "cetp",
    title: "Common Effluent Treatment Plants (CETP)",
    description:
      "Centralized effluent treatment plants serving multiple industries, providing cost-effective and efficient treatment solutions with shared infrastructure and regulatory compliance.",
    features: [
      "Multi-Industry Service",
      "Cost-Effective Shared Infrastructure",
      "CPCB & SPCB Compliance",
      "Advanced Treatment Technology",
    ],
    icon: "Building2",
    category: "industrial",
  },
  {
    id: "rwh",
    title: "Rain Water Harvesting (RWH)",
    description:
      "Comprehensive rainwater harvesting systems for water conservation, groundwater recharge, and sustainable water management for residential, commercial, and industrial applications.",
    features: [
      "Water Conservation Systems",
      "Groundwater Recharge",
      "Storage & Filtration",
      "Sustainable Water Management",
    ],
    icon: "CloudRain",
    category: "water-treatment",
  },
  {
    id: "waste-to-energy",
    title: "Waste-to-Energy Systems",
    description:
      "Advanced waste-to-energy solutions converting municipal and industrial waste into renewable energy through incineration, gasification, and bio-methanation technologies.",
    features: [
      "Waste Incineration Systems",
      "Gasification Technology",
      "Bio-methanation Plants",
      "Renewable Energy Generation",
    ],
    icon: "Zap",
    category: "energy",
  },
  {
    id: "power-generation",
    title: "Turnkey Power Plants",
    description:
      "Complete turnkey power generation solutions including design, construction, and commissioning of steam and power generation plants for industrial and utility applications.",
    features: [
      "Steam Generation Systems",
      "Power Plant Design & Build",
      "Turnkey Project Execution",
      "Commissioning & O&M",
    ],
    icon: "Zap",
    category: "energy",
  },
  {
    id: "boilers-heaters",
    title: "Boilers & Heaters",
    description:
      "Industrial boilers and process heating systems for various applications including steam generation, hot water production, and thermal oil heating with high efficiency.",
    features: [
      "Steam Boilers",
      "Hot Water Systems",
      "Thermal Oil Heaters",
      "Process Heating Solutions",
    ],
    icon: "Flame",
    category: "industrial",
  },
  {
    id: "absorption-cooling",
    title: "Absorption Cooling Systems",
    description:
      "Energy-efficient absorption cooling systems utilizing waste heat or solar energy for air conditioning and refrigeration applications in industrial and commercial settings.",
    features: [
      "Waste Heat Utilization",
      "Solar Cooling Integration",
      "Energy Efficient Operation",
      "Industrial & Commercial Applications",
    ],
    icon: "Snowflake",
    category: "industrial",
  },
  {
    id: "process-cooling",
    title: "Process Cooling Solutions",
    description:
      "Customized process cooling systems for industrial applications including chilled water systems, glycol cooling, and specialized cooling for manufacturing processes.",
    features: [
      "Chilled Water Systems",
      "Glycol Cooling",
      "Custom Process Cooling",
      "Industrial Applications",
    ],
    icon: "Snowflake",
    category: "industrial",
  },
  {
    id: "solar-solutions",
    title: "Solar Energy Solutions",
    description:
      "Renewable solar energy systems including solar water heating, solar power generation, and solar-assisted environmental technologies for sustainable operations.",
    features: [
      "Solar Water Heating",
      "Solar Power Generation",
      "Solar-Assisted Cooling",
      "Sustainable Energy Solutions",
    ],
    icon: "Sun",
    category: "energy",
  },
  {
    id: "specialty-chemicals",
    title: "Specialty Environmental Chemicals",
    description:
      "High-performance specialty chemicals for water treatment, air pollution control, and environmental management applications with eco-friendly formulations.",
    features: [
      "Water Treatment Chemicals",
      "Air Pollution Control Agents",
      "Eco-Friendly Formulations",
      "Custom Chemical Solutions",
    ],
    icon: "FlaskConical",
    category: "environmental",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Mehta",
    position: "Factory Manager",
    company: "Sterling Dyes & Chemicals, Ahmedabad",
    content:
      "We were struggling with GPCB compliance for two years. Three different vendors couldn't solve our COD discharge problem. DLS team spent a week understanding our process, then designed a custom ETP that actually works. Our COD levels are now consistently below 250 mg/L. Yes, installation took 2 weeks longer than promised, but the results speak for themselves.",
    rating: 4,
    project: "Custom ETP Installation",
  },
  {
    id: "testimonial-2",
    name: "Priya Nambiar",
    position: "Municipal Engineer",
    company: "Thrissur Municipal Corporation",
    content:
      "Honestly, we had bad experiences with contractors before. But Mr. Singh visited our site personally and his team delivered exactly what they promised. The 15 MLD STP has been operational for 8 months now without any major issues. Their AMC rates are also very reasonable compared to others we checked.",
    rating: 5,
    project: "Municipal STP - 15 MLD",
  },
  {
    id: "testimonial-3",
    name: "Vikas Agarwal",
    position: "Owner",
    company: "Agarwal Food Processing, Meerut",
    content:
      "Our old ETP was consuming too much power and chemicals. DLS upgraded the system with better aeration and we're now saving ₹45,000 monthly on operating costs. The payback period will be under 2 years. Good technical knowledge, reasonable pricing.",
    rating: 5,
    project: "ETP Modernization",
  },
  {
    id: "testimonial-4",
    name: "Dr. Sunita Reddy",
    position: "Hospital Administrator",
    company: "Apollo Clinic, Hyderabad",
    content:
      "We needed a compact STP for our new 50-bed facility. Space was very limited. DLS designed a modular system that fits in just 200 sq ft and handles our biomedical wastewater perfectly. Installation was clean, team was professional, and they trained our maintenance staff properly.",
    rating: 5,
    project: "Hospital STP - Compact Design",
  },
  {
    id: "testimonial-5",
    name: "Harpreet Singh Bhatia",
    position: "Director Operations",
    company: "Bhatia Textiles Ltd., Ludhiana",
    content:
      "Working with them for 3 years now. They maintain our ETP and cooling towers. Not the cheapest option we had, but definitely the most reliable. Emergency response is good - they came at 11 PM when our pH controller failed. Would recommend for anyone who needs dependable service.",
    rating: 4,
    project: "Ongoing Maintenance Contract",
  },
  {
    id: "testimonial-6",
    name: "Mohammed Farooq",
    position: "Project Head",
    company: "Skyline Developers, Noida",
    content:
      "We've built 4 residential townships and DLS has done the STP work for all of them. They understand builder timelines and compliance requirements. Their designs pass UPPCB approval without issues. Fair pricing, no surprises during execution.",
    rating: 5,
    project: "Multiple Residential STPs",
  },
];

export const QUICK_CHAT_MESSAGES = [
  "What is STP capacity calculation?",
  "ETP technology options",
  "Get pricing quote",
  "RO system specifications",
  "Cooling tower capacity",
  "Maintenance services",
];
