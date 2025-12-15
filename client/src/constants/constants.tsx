import { ServiceType, TestimonialType, Division } from "@/types/index";

// Legacy services array (kept for compatibility)
export const SERVICES: ServiceType[] = [];

// 5 Company Divisions with their services
export const DIVISIONS: Division[] = [
  {
    id: "water-soil-treatment",
    number: 1,
    title: "Water and Soil Treatment Division",
    shortTitle: "Water & Soil Treatment",
    description: "Comprehensive water and wastewater treatment solutions including sewage treatment, effluent treatment, and water purification systems for municipal and industrial applications.",
    icon: "Droplets",
    color: "blue",
    services: [
      {
        id: "stp",
        title: "Sewage Treatment Plants (STP)",
        shortTitle: "STP",
        description: "Advanced sewage treatment solutions for municipal and residential wastewater management.",
        fullDescription: "Our Sewage Treatment Plants utilize cutting-edge biological and mechanical processes to treat domestic and municipal wastewater. We design, manufacture, and install STPs ranging from small residential units to large municipal installations, ensuring compliance with CPCB and SPCB discharge norms.",
        features: [
          "Customized designs for various capacities",
          "CPCB & SPCB compliance guaranteed",
          "Energy-efficient operations",
          "Minimal footprint designs",
          "Automated monitoring systems",
          "Comprehensive O&M support"
        ],
        technologies: ["SBR (Sequencing Batch Reactor)", "MBR (Membrane Bioreactor)", "MBBR (Moving Bed Biofilm Reactor)", "ABR (Anaerobic Baffled Reactor)", "ZLD (Zero Liquid Discharge)", "UASB (Upflow Anaerobic Sludge Blanket)"],
        types: ["Residential STP", "Commercial STP", "Industrial STP", "Municipal STP", "Packaged STP", "Containerized STP"],
        applications: ["Housing societies", "Hotels & resorts", "Hospitals", "Educational institutions", "Commercial complexes", "Municipal corporations"],
        benefits: ["Water reuse for gardening", "Reduced water bills", "Environmental compliance", "Sustainable operations"],
        icon: "Droplets"
      },
      {
        id: "wtp",
        title: "Water Treatment Plants (WTP)",
        shortTitle: "WTP",
        description: "Complete water purification systems for drinking water and process water applications.",
        fullDescription: "We provide end-to-end water treatment solutions that transform raw water into safe, potable water meeting IS 10500 standards. Our WTPs are designed for municipalities, industries, and commercial establishments requiring high-quality treated water.",
        features: [
          "Multi-stage filtration systems",
          "Automated chemical dosing",
          "Real-time quality monitoring",
          "High recovery rates",
          "Low maintenance design",
          "Remote monitoring capability"
        ],
        technologies: ["Conventional Treatment", "RO (Reverse Osmosis)", "UF (Ultrafiltration)", "Activated Carbon Filtration", "Ion Exchange", "Ozonation"],
        types: ["Drinking Water Treatment", "Process Water Treatment", "Demineralization Plants", "Softening Plants", "Iron Removal Plants"],
        applications: ["Municipal water supply", "Industrial process water", "Pharmaceutical industry", "Food & beverage industry", "Power plants"],
        benefits: ["Safe drinking water", "Consistent water quality", "Reduced health risks", "Process optimization"],
        icon: "Droplets"
      },
      {
        id: "fstp",
        title: "Faecal Sludge Treatment Plants (FSTP)",
        shortTitle: "FSTP",
        description: "Specialized treatment systems for faecal sludge from septic tanks and pit latrines.",
        fullDescription: "Our FSTP solutions address the critical need for proper faecal sludge management in areas without sewerage networks. We design co-treatment facilities that can handle both faecal sludge and septage, producing safe effluent and nutrient-rich biosolids.",
        features: [
          "Pathogen elimination",
          "Nutrient recovery",
          "Biosolids production",
          "Odor control systems",
          "Compact modular designs",
          "Low energy consumption"
        ],
        technologies: ["Planted Drying Beds", "Anaerobic Digestion", "Co-composting", "Mechanical Dewatering", "Thermal Drying"],
        types: ["Standalone FSTP", "Co-treatment with STP", "Decentralized FSTP", "Mobile FSTP Units"],
        applications: ["Urban local bodies", "Rural sanitation", "Smart city projects", "Swachh Bharat Mission"],
        benefits: ["Improved sanitation", "Resource recovery", "Environmental protection", "Public health improvement"],
        icon: "Recycle"
      },
      {
        id: "etp",
        title: "Effluent Treatment Plants (ETP)",
        shortTitle: "ETP",
        description: "Industrial wastewater treatment systems ensuring regulatory compliance and environmental protection.",
        fullDescription: "Our Effluent Treatment Plants are engineered to handle complex industrial wastewaters containing various pollutants. We design customized solutions based on industry-specific requirements, ensuring treated effluent meets discharge standards or can be reused.",
        features: [
          "Industry-specific designs",
          "Multi-stage treatment",
          "Chemical & biological processes",
          "Sludge management systems",
          "Online monitoring",
          "Zero liquid discharge options"
        ],
        technologies: ["Physico-chemical Process", "UFMTP (Ultra Filtration Membrane Treatment Process)", "DAF (Dissolved Air Flotation)", "Activated Sludge Process", "MBBR", "Electrocoagulation"],
        types: ["Textile ETP", "Pharmaceutical ETP", "Chemical Industry ETP", "Food Processing ETP", "Dairy ETP", "Paper Mill ETP", "Leather Industry ETP"],
        applications: ["Textile mills", "Pharmaceutical companies", "Chemical industries", "Food processing units", "Distilleries", "Paper mills"],
        benefits: ["Regulatory compliance", "Water recycling", "Reduced disposal costs", "Environmental sustainability"],
        icon: "Building2"
      },
      {
        id: "wbp",
        title: "Water Bottling Plants (WBP)",
        shortTitle: "WBP",
        description: "Complete turnkey solutions for packaged drinking water and mineral water production.",
        fullDescription: "We provide comprehensive water bottling plant solutions from water treatment to filling and packaging. Our plants meet BIS standards for packaged drinking water and are designed for optimal production efficiency.",
        features: [
          "BIS/FSSAI compliant designs",
          "Multi-stage purification",
          "Automated bottling lines",
          "Quality control systems",
          "Hygienic design standards",
          "Turnkey project execution"
        ],
        technologies: ["RO Purification", "UV Sterilization", "Ozonation", "Mineral Addition", "Automated Filling"],
        types: ["Packaged Drinking Water Plants", "Mineral Water Plants", "Bulk Water Filling", "Pet Bottle Plants", "Jar Filling Plants"],
        applications: ["Packaged water brands", "Corporate water supply", "Hotel chains", "Institutional use"],
        benefits: ["Consistent water quality", "Brand building", "Revenue generation", "Safe drinking water supply"],
        icon: "GlassWater"
      }
    ]
  },
  {
    id: "solid-waste-management",
    number: 2,
    title: "Solid Waste Management Plants",
    shortTitle: "Solid Waste Management",
    description: "Complete solid waste management solutions including material recovery, composting, and sanitary landfill facilities for municipalities and industries.",
    icon: "Recycle",
    color: "green",
    services: [
      {
        id: "mrf",
        title: "Material Recovery Facility Plants (MRF)",
        shortTitle: "MRF",
        description: "Advanced sorting and processing facilities for recyclable materials recovery from mixed waste.",
        fullDescription: "Our Material Recovery Facilities are designed to maximize resource recovery from municipal solid waste. Using a combination of manual and automated sorting technologies, we help municipalities and industries recover valuable recyclables while minimizing landfill waste.",
        features: [
          "Multi-stream sorting capability",
          "Automated sorting systems",
          "High recovery rates",
          "Quality output materials",
          "Modular scalable designs",
          "Safe working environment"
        ],
        technologies: ["Trommel Screens", "Magnetic Separators", "Eddy Current Separators", "Air Classifiers", "Optical Sorters", "Ballistic Separators"],
        types: ["Single Stream MRF", "Dual Stream MRF", "Mixed Waste MRF", "Construction & Demolition MRF", "E-waste MRF"],
        applications: ["Municipal corporations", "Industrial estates", "Commercial complexes", "Smart city projects"],
        benefits: ["Resource recovery", "Reduced landfill waste", "Revenue from recyclables", "Environmental sustainability"],
        icon: "Recycle"
      },
      {
        id: "w2c",
        title: "Waste to Compost Plants (W2C)",
        shortTitle: "W2C",
        description: "Organic waste composting systems converting biodegradable waste into high-quality compost.",
        fullDescription: "Our Waste to Compost plants transform organic waste from kitchens, markets, and gardens into nutrient-rich compost. We offer various composting technologies suitable for different scales and waste characteristics.",
        features: [
          "Rapid composting technology",
          "Odor control systems",
          "Leachate treatment",
          "Quality compost production",
          "Automated process control",
          "Minimal land requirement"
        ],
        technologies: ["Windrow Composting", "In-vessel Composting", "Vermicomposting", "Aerated Static Pile", "Mechanical Composting"],
        types: ["Centralized Composting", "Decentralized Composting", "Community Composting", "Industrial Composting"],
        applications: ["Vegetable markets", "Bulk waste generators", "Housing societies", "Hotels & restaurants", "Food processing units"],
        benefits: ["Organic fertilizer production", "Waste diversion from landfills", "Carbon footprint reduction", "Circular economy"],
        icon: "Sprout"
      },
      {
        id: "slf",
        title: "Sanitary Landfill Plants (SLF)",
        shortTitle: "SLF",
        description: "Engineered sanitary landfill facilities with proper containment and environmental protection systems.",
        fullDescription: "We design and construct scientific sanitary landfills that safely contain non-recyclable waste while protecting groundwater and the environment. Our landfills include proper liner systems, leachate collection, and gas management.",
        features: [
          "Engineered liner systems",
          "Leachate collection & treatment",
          "Landfill gas management",
          "Environmental monitoring",
          "Proper capping systems",
          "Post-closure care plans"
        ],
        technologies: ["HDPE Liner Systems", "GCL Systems", "Leachate Treatment", "Landfill Gas Recovery", "Bio-reactor Landfills"],
        types: ["Municipal Solid Waste Landfill", "Hazardous Waste Landfill", "Industrial Waste Landfill", "Secure Landfill"],
        applications: ["Municipal corporations", "Industrial clusters", "Hazardous waste disposal", "Legacy waste remediation"],
        benefits: ["Safe waste disposal", "Environmental protection", "Gas recovery potential", "Land reclamation"],
        icon: "Mountain"
      }
    ]
  },
  {
    id: "o2-air-purification",
    number: 3,
    title: "O2 & Air Purification Division",
    shortTitle: "O2 & Air Purification",
    description: "Oxygen generation systems and air purification solutions for medical, industrial, and environmental applications.",
    icon: "Wind",
    color: "cyan",
    services: [
      {
        id: "o2-plants",
        title: "Oxygen (O2) Plants",
        shortTitle: "O2 Plants",
        description: "On-site oxygen generation systems for medical and industrial applications.",
        fullDescription: "Our PSA and VPSA oxygen plants provide reliable on-site oxygen generation, eliminating dependency on cylinder supply. We offer solutions for hospitals, industrial units, and aquaculture facilities with purity levels up to 95%.",
        features: [
          "On-site generation",
          "High purity output (up to 95%)",
          "Continuous operation",
          "Low operating costs",
          "Automated controls",
          "Remote monitoring"
        ],
        technologies: ["PSA (Pressure Swing Adsorption)", "VPSA (Vacuum Pressure Swing Adsorption)", "Membrane Technology"],
        types: ["Medical Oxygen Plants", "Industrial Oxygen Plants", "Aquaculture Oxygen Plants", "Portable Oxygen Units"],
        applications: ["Hospitals", "Steel industries", "Glass manufacturing", "Aquaculture farms", "Wastewater treatment"],
        benefits: ["Cost savings", "Uninterrupted supply", "Independence from suppliers", "Consistent quality"],
        icon: "Wind"
      },
      {
        id: "mgps",
        title: "Medical O2 Gas Pipelines (MGPS)",
        shortTitle: "MGPS",
        description: "Complete medical gas pipeline systems for hospitals and healthcare facilities.",
        fullDescription: "We design, install, and commission Medical Gas Pipeline Systems (MGPS) that safely distribute medical gases throughout healthcare facilities. Our systems comply with Indian standards and international best practices.",
        features: [
          "Complete gas distribution",
          "Safety alarm systems",
          "Zone isolation valves",
          "Manifold rooms",
          "Outlet points installation",
          "Compliance with standards"
        ],
        technologies: ["Copper Pipeline Systems", "Automatic Manifolds", "Digital Alarm Systems", "Zone Valve Boxes"],
        types: ["Oxygen Pipeline", "Nitrous Oxide Pipeline", "Medical Air Pipeline", "Vacuum Pipeline", "AGSS (Anaesthetic Gas Scavenging)"],
        applications: ["Hospitals", "Nursing homes", "ICU & OT complexes", "Dental clinics", "Research laboratories"],
        benefits: ["Patient safety", "Reliable gas supply", "Reduced cylinder handling", "Compliance with regulations"],
        icon: "Stethoscope"
      },
      {
        id: "smoke-tower",
        title: "Smoke Towers",
        shortTitle: "Smoke Towers",
        description: "Industrial smoke and fume extraction systems for air quality management.",
        fullDescription: "Our smoke tower solutions provide effective extraction and treatment of industrial smoke, fumes, and particulate matter. We design systems that meet emission norms while ensuring worker safety and environmental protection.",
        features: [
          "High extraction efficiency",
          "Particulate removal",
          "Fume treatment",
          "Corrosion resistant construction",
          "Low noise operation",
          "Easy maintenance"
        ],
        technologies: ["Wet Scrubbers", "Dry Scrubbers", "Electrostatic Precipitators", "Bag Filters"],
        types: ["Industrial Smoke Towers", "Kitchen Exhaust Towers", "Fume Extraction Systems", "Dust Collection Towers"],
        applications: ["Manufacturing units", "Foundries", "Commercial kitchens", "Welding shops", "Chemical plants"],
        benefits: ["Emission compliance", "Worker health protection", "Improved air quality", "Environmental compliance"],
        icon: "Factory"
      },
      {
        id: "air-gun",
        title: "Air Guns",
        shortTitle: "Air Guns",
        description: "Compressed air cleaning and blowing systems for industrial applications.",
        fullDescription: "We manufacture and supply high-efficiency air guns and blowing systems for industrial cleaning, drying, and cooling applications. Our products are designed for ergonomic operation and energy efficiency.",
        features: [
          "High blowing force",
          "Energy efficient design",
          "Ergonomic handling",
          "Multiple nozzle options",
          "Noise reduction",
          "Durable construction"
        ],
        technologies: ["Venturi Nozzles", "Safety Air Guns", "High Flow Systems"],
        types: ["Safety Air Guns", "High Force Air Guns", "Ionizing Air Guns", "Static Elimination Guns"],
        applications: ["Manufacturing plants", "Assembly lines", "Cleaning operations", "Drying applications", "Cooling processes"],
        benefits: ["Improved productivity", "Worker safety", "Reduced air consumption", "Effective cleaning"],
        icon: "Zap"
      },
      {
        id: "air-blower",
        title: "Air Blowers",
        shortTitle: "Air Blowers",
        description: "Industrial air blowers for aeration, pneumatic conveying, and process applications.",
        fullDescription: "We supply a range of air blowers suitable for wastewater aeration, pneumatic conveying, and various industrial processes. Our blowers are selected for optimal efficiency and long service life.",
        features: [
          "High efficiency operation",
          "Low noise levels",
          "Robust construction",
          "Variable speed options",
          "Easy maintenance",
          "Long service life"
        ],
        technologies: ["Roots Blowers", "Centrifugal Blowers", "Regenerative Blowers", "Turbo Blowers"],
        types: ["Aeration Blowers", "Conveying Blowers", "Combustion Blowers", "Cooling Blowers"],
        applications: ["Wastewater treatment", "Pneumatic conveying", "Fluidization", "Combustion air supply", "Industrial cooling"],
        benefits: ["Reliable operation", "Energy savings", "Process optimization", "Reduced maintenance"],
        icon: "Fan"
      }
    ]
  },
  {
    id: "chemical-biochemical-treatment",
    number: 4,
    title: "Chemical & Biochemical Treatment Division",
    shortTitle: "Chemical & Biochemical Treatment",
    description: "Bio-remediation and biochemical solutions for waste treatment, including biogas generation and culture-based remediation technologies.",
    icon: "FlaskConical",
    color: "purple",
    services: [
      {
        id: "biogas-plants",
        title: "Bio Gas Plants",
        shortTitle: "Bio Gas",
        description: "Anaerobic digestion systems for biogas generation from organic waste.",
        fullDescription: "Our biogas plants convert organic waste into clean energy through anaerobic digestion. We design systems for various feedstocks including food waste, agricultural residue, and sewage sludge, producing biogas for power generation or direct use.",
        features: [
          "Multiple feedstock capability",
          "High gas yield",
          "Automated feeding systems",
          "Gas purification options",
          "Digestate management",
          "Power generation integration"
        ],
        technologies: ["CSTR (Continuous Stirred Tank Reactor)", "Plug Flow Digesters", "UASB Reactors", "Dry Anaerobic Digestion"],
        types: ["Food Waste Biogas Plants", "Agricultural Biogas Plants", "Sewage Sludge Digesters", "Industrial Waste Biogas"],
        applications: ["Hotels & restaurants", "Food processing units", "Farms", "Municipal waste", "Distilleries"],
        benefits: ["Renewable energy", "Waste reduction", "Carbon credits", "Fertilizer production"],
        icon: "Flame"
      },
      {
        id: "bio-culture-solid-waste",
        title: "Bio Culture Remediation for Solid Waste",
        shortTitle: "Bio Culture - Solid Waste",
        description: "Microbial solutions for accelerated decomposition and odor control in solid waste management.",
        fullDescription: "We provide specialized bio-culture formulations that accelerate the decomposition of organic solid waste while controlling odors. Our solutions enhance composting efficiency and improve waste management operations.",
        features: [
          "Accelerated decomposition",
          "Odor elimination",
          "Pathogen reduction",
          "Enhanced composting",
          "Leachate quality improvement",
          "Easy application"
        ],
        technologies: ["Microbial Consortiums", "Enzyme Formulations", "Bio-augmentation", "Bio-stimulation"],
        types: ["Composting Accelerators", "Landfill Bio-cultures", "Odor Control Cultures", "Leachate Treatment Cultures"],
        applications: ["Composting plants", "Landfill sites", "Transfer stations", "Bulk waste generators"],
        benefits: ["Faster processing", "Reduced odor complaints", "Better compost quality", "Improved hygiene"],
        icon: "Leaf"
      },
      {
        id: "bio-culture-stp",
        title: "Bio Culture Remediation for STP",
        shortTitle: "Bio Culture - STP",
        description: "Biological solutions to enhance sewage treatment plant performance and efficiency.",
        fullDescription: "Our bio-culture products are designed to improve the biological treatment efficiency of STPs. They help in achieving better BOD/COD removal, handling shock loads, and recovering from upsets.",
        features: [
          "Enhanced BOD/COD removal",
          "Shock load handling",
          "Quick startup",
          "Sludge reduction",
          "Nitrification enhancement",
          "Filamentous control"
        ],
        technologies: ["Nitrifying Bacteria", "Denitrifying Bacteria", "Phosphorus Removing Bacteria", "Specialized Consortiums"],
        types: ["Startup Cultures", "Maintenance Cultures", "Problem-solving Cultures", "Specialty Cultures"],
        applications: ["Municipal STPs", "Industrial STPs", "Package STPs", "MBR Systems"],
        benefits: ["Improved treatment", "Consistent performance", "Reduced chemical use", "Better compliance"],
        icon: "Droplets"
      },
      {
        id: "bio-culture-etp",
        title: "Bio Culture Remediation for ETP",
        shortTitle: "Bio Culture - ETP",
        description: "Specialized microbial formulations for industrial effluent treatment enhancement.",
        fullDescription: "We develop industry-specific bio-culture solutions that address the unique challenges of industrial effluent treatment. Our products help ETPs achieve better performance with specific pollutant degradation capabilities.",
        features: [
          "Industry-specific formulations",
          "Toxicity tolerance",
          "Specific pollutant degradation",
          "Salt tolerance",
          "pH adaptability",
          "Heavy metal tolerance"
        ],
        technologies: ["Acclimatized Cultures", "Specialty Degraders", "Bioaugmentation Products"],
        types: ["Textile ETP Cultures", "Pharmaceutical ETP Cultures", "Chemical ETP Cultures", "Food Industry Cultures"],
        applications: ["Textile ETPs", "Pharmaceutical ETPs", "Chemical industry ETPs", "Petrochemical ETPs"],
        benefits: ["Better COD removal", "Color removal", "Toxicity reduction", "Improved compliance"],
        icon: "Building2"
      },
      {
        id: "bio-remediation-fresh-waste",
        title: "Bio Remediation, Segregation & Treatment of Fresh Waste",
        shortTitle: "Fresh Waste Bio-Remediation",
        description: "Complete bio-remediation solutions for fresh waste treatment and management.",
        fullDescription: "We provide comprehensive bio-remediation solutions for fresh waste at source, including segregation assistance and treatment. Our approach minimizes waste going to landfills while maximizing resource recovery.",
        features: [
          "Source segregation support",
          "On-site treatment",
          "Rapid stabilization",
          "Resource recovery",
          "Odor control",
          "Vector control"
        ],
        technologies: ["Bio-digestion", "Vermi-processing", "Black Soldier Fly", "Microbial Treatment"],
        types: ["Kitchen Waste Treatment", "Market Waste Treatment", "Garden Waste Treatment", "Mixed Organic Waste"],
        applications: ["Housing societies", "Commercial kitchens", "Vegetable markets", "Hotels", "Institutions"],
        benefits: ["Waste minimization", "On-site processing", "Reduced transportation", "Compost generation"],
        icon: "Recycle"
      },
      {
        id: "bio-methanation",
        title: "Bio Methanation Plants",
        shortTitle: "Bio Methanation",
        description: "Controlled anaerobic digestion systems for methane-rich biogas production.",
        fullDescription: "Our bio-methanation plants are optimized for maximum methane production from organic waste. We design systems with proper process control to achieve high-quality biogas suitable for grid injection or vehicle fuel.",
        features: [
          "High methane content",
          "Process optimization",
          "Gas upgrading options",
          "Stable operation",
          "Digestate quality",
          "Grid injection ready"
        ],
        technologies: ["Two-stage Digestion", "Temperature-phased Digestion", "High-solid Digestion", "Gas Upgrading (CBG)"],
        types: ["Food Waste Bio-methanation", "Agricultural Bio-methanation", "Industrial Bio-methanation", "CBG Plants"],
        applications: ["Large organic waste generators", "Agricultural clusters", "Industrial estates", "Municipal waste"],
        benefits: ["CBG production", "Revenue generation", "Carbon credits", "Sustainable energy"],
        icon: "Zap"
      }
    ]
  },
  {
    id: "manufacturing-fabrication",
    number: 5,
    title: "Manufacturing/Fabrication Division",
    shortTitle: "Manufacturing & Fabrication",
    description: "In-house manufacturing of environmental equipment, machinery, and infrastructure products for waste management and renewable energy applications.",
    icon: "Factory",
    color: "orange",
    services: [
      {
        id: "mrf-equipment",
        title: "MRF Equipment Manufacturing",
        shortTitle: "MRF Equipment",
        description: "Complete range of material recovery facility equipment and machinery manufacturing.",
        fullDescription: "We manufacture a comprehensive range of MRF equipment including sorting systems, conveyors, and processing machinery. Our in-house fabrication ensures quality control and customization to specific requirements.",
        features: [
          "Custom fabrication",
          "Quality materials",
          "Robust construction",
          "Easy maintenance",
          "Spare parts availability",
          "Installation support"
        ],
        technologies: ["Heavy Fabrication", "Precision Engineering", "Automation Integration"],
        types: ["Trommel Screens", "Conveyor Belts", "Conveyor cum Sorting Tables", "Feed Conveyors", "Material Transportation Systems", "Stabilized Waste Conveyors"],
        applications: ["MRF plants", "Recycling facilities", "Waste processing plants", "Industrial units"],
        benefits: ["Quality equipment", "Customization", "Local support", "Competitive pricing"],
        icon: "Settings"
      },
      {
        id: "processing-machines",
        title: "Waste Processing Machines",
        shortTitle: "Processing Machines",
        description: "Manufacturing of shredders, balers, and other waste processing equipment.",
        fullDescription: "We manufacture heavy-duty waste processing machines designed for Indian waste characteristics. Our machines are built for reliability and efficiency in demanding operating conditions.",
        features: [
          "Heavy-duty construction",
          "High throughput capacity",
          "Low maintenance",
          "Safety features",
          "Energy efficient",
          "Durable components"
        ],
        technologies: ["Shredding Technology", "Hydraulic Systems", "Compaction Technology"],
        types: ["Shredder Cum Chopper", "Hydraulic Bailing Press", "Plastic Shredding Machine", "Composting Machine"],
        applications: ["Recycling centers", "MRF plants", "Composting facilities", "Industries"],
        benefits: ["Volume reduction", "Material preparation", "Efficient recycling", "Revenue enhancement"],
        icon: "Cog"
      },
      {
        id: "solar-electrical",
        title: "Solar & Electrical Products",
        shortTitle: "Solar & Electrical",
        description: "Manufacturing of solar panels, electrical poles, and hybrid solar electrical systems.",
        fullDescription: "We manufacture renewable energy and electrical infrastructure products including solar panels, electrical poles, and innovative bio-solar electrical poles that combine lighting with green aesthetics.",
        features: [
          "Quality components",
          "Durable construction",
          "Weather resistant",
          "Easy installation",
          "Long service life",
          "Warranty support"
        ],
        technologies: ["Solar PV", "LED Lighting", "Hybrid Systems", "Smart Controls"],
        types: ["Electrical Poles", "Electrical Solar Panels", "Bio Solar Electrical Poles"],
        applications: ["Street lighting", "Parks & gardens", "Industrial premises", "Smart cities"],
        benefits: ["Energy savings", "Green infrastructure", "Reduced electricity bills", "Aesthetic value"],
        icon: "Sun"
      },
      {
        id: "environmental-machines",
        title: "Environmental Cleaning Machines",
        shortTitle: "Cleaning Machines",
        description: "Manufacturing of road sweepers, sprinkle machines, and environmental cleaning equipment.",
        fullDescription: "We manufacture a range of environmental cleaning machines for municipalities and industries. Our equipment is designed for Indian conditions with robust construction and easy maintenance.",
        features: [
          "Robust construction",
          "Easy operation",
          "Low maintenance",
          "Spare parts availability",
          "Training support",
          "After-sales service"
        ],
        technologies: ["Mechanical Sweeping", "Vacuum Systems", "Sprinkler Systems"],
        types: ["Smoke Gun", "Topper", "Road Sweeping Machines", "Sprinkle Machine", "Moveable Wet/Dry Dustbin"],
        applications: ["Municipalities", "Smart cities", "Industrial campuses", "Commercial complexes"],
        benefits: ["Clean environment", "Efficient cleaning", "Labor saving", "Better hygiene"],
        icon: "Trash2"
      }
    ]
  }
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
