/**
 * CLIENTS CONFIGURATION FILE
 * ==========================
 *
 * How to add a new client:
 * 1. Add the client logo image to: client/public/clients/ folder
 * 2. Add a new entry to the CLIENTS array below
 *
 * Example:
 * {
 *   id: "unique-client-id",        // Unique identifier (lowercase, no spaces)
 *   name: "Client Company Name",    // Full company name
 *   logo: "/clients/logo-name.png", // Path to logo in public/clients folder
 *   category: "government",         // Category: "government", "municipal", "private", "international"
 *   website: "https://example.com", // Optional: Client website URL
 * }
 *
 * Supported image formats: .png, .jpg, .jpeg, .svg, .webp
 * Recommended logo size: 200x100 pixels (width x height)
 *
 * Categories available:
 * - "government"   : Government organizations and departments
 * - "municipal"    : Municipal corporations and local bodies
 * - "private"      : Private companies and industries
 * - "international": International organizations and foreign clients
 */

export interface ClientType {
  id: string;
  name: string;
  logo: string;
  category: "government" | "municipal" | "private" | "international";
  website?: string;
}

export const CLIENT_CATEGORIES = [
  { id: "all", label: "All Clients" },
  { id: "government", label: "Government" },
  { id: "municipal", label: "Municipal Bodies" },
  { id: "private", label: "Private Sector" },
  { id: "international", label: "International" },
] as const;

/**
 * ADD YOUR CLIENTS HERE
 * =====================
 * Copy the template below and fill in your client details:
 *
 * {
 *   id: "client-name",
 *   name: "Client Full Name",
 *   logo: "/clients/client-logo.png",
 *   category: "government",
 *   website: "https://clientwebsite.com",
 * },
 */
export const CLIENTS: ClientType[] = [
  // ===== GOVERNMENT CLIENTS =====
  {
    id: "irctc",
    name: "Indian Railway Catering and Tourism Corporation Limited (IRCTC)",
    logo: "https://www.irctc.co.in/nget/assets/images/logo.png",
    category: "government",
    website: "https://www.irctc.co.in",
  },
  {
    id: "airports-authority-india",
    name: "Airports Authority of India (AAI)",
    logo: "https://www.aai.aero/sites/default/files/logo_15042021.png",
    category: "government",
    website: "https://www.aai.aero",
  },
  {
    id: "ongc",
    name: "Oil and Natural Gas Corporation Limited (ONGC)",
    logo: "https://www.ongcindia.com/documents/77751/2132071/ongcLogo.jpg",
    category: "government",
    website: "https://www.ongcindia.com",
  },
  {
    id: "indian-oil",
    name: "Indian Oil Corporation Limited (IOCL)",
    logo: "https://images.seeklogo.com/logo-png/19/1/indian-oil-logo-png_seeklogo-198933.png",
    category: "government",
    website: "https://iocl.com",
  },
  {
    id: "all-india-radio",
    name: "All India Radio (Prasar Bharati)",
    logo: "https://www.newsonair.gov.in/wp-content/uploads/2025/11/Akhashvani-1.png",
    category: "government",
    website: "https://newsonair.gov.in",
  },
  {
    id: "up-jal-nigam",
    name: "UP Jal Nigam (Urban)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Uttar_Pradesh_Jal_Nigam_Logo.svg/150px-Uttar_Pradesh_Jal_Nigam_Logo.svg.png",
    category: "government",
  },
  {
    id: "cpwd",
    name: "Central Public Works Department (CPWD)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/150px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://cpwd.gov.in",
  },
  {
    id: "bhel",
    name: "Bharat Heavy Electricals Limited (BHEL)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Bharat_Heavy_Electricals_Limited_logo.svg/200px-Bharat_Heavy_Electricals_Limited_logo.svg.png",
    category: "government",
    website: "https://www.bhel.com",
  },
  {
    id: "indian-army",
    name: "Indian Army (Bhartiya Sena)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Indian_Army_Seal.svg/150px-Indian_Army_Seal.svg.png",
    category: "government",
  },
  {
    id: "dda",
    name: "Delhi Development Authority (DDA)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/DDA_LOGO.png/150px-DDA_LOGO.png",
    category: "government",
    website: "https://dda.gov.in",
  },
  {
    id: "ministry-of-defence",
    name: "Ministry of Defence",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/150px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://mod.gov.in",
  },
  {
    id: "ministry-housing-urban",
    name: "Ministry of Housing & Urban Affairs (CPWD)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/150px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://mohua.gov.in",
  },
  {
    id: "indian-railways",
    name: "Indian Railways",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Indian_Railways.svg/150px-Indian_Railways.svg.png",
    category: "government",
    website: "https://indianrailways.gov.in",
  },
  {
    id: "hp-petroleum",
    name: "Hindustan Petroleum Corporation Limited (HPCL)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/HPCL_Logo.svg/200px-HPCL_Logo.svg.png",
    category: "government",
    website: "https://www.hindustanpetroleum.com",
  },
  {
    id: "ntpc",
    name: "NTPC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/NTPC_Logo.svg/200px-NTPC_Logo.svg.png",
    category: "government",
    website: "https://www.ntpc.co.in",
  },
  {
    id: "msme",
    name: "Ministry of MSME",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/150px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://msme.gov.in",
  },
  {
    id: "pwd-delhi",
    name: "Public Works Department, Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/150px-Emblem_of_India.svg.png",
    category: "government",
  },
  {
    id: "pwd-west-bengal",
    name: "Public Works Department, West Bengal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Seal_of_West_Bengal.svg/150px-Seal_of_West_Bengal.svg.png",
    category: "government",
  },
  {
    id: "haryana-police-housing",
    name: "Haryana Police Housing Corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Haryana_seal.svg/150px-Haryana_seal.svg.png",
    category: "government",
  },
  {
    id: "bihar-health",
    name: "Bihar State Health Department",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bihar_Seal.svg/150px-Bihar_Seal.svg.png",
    category: "government",
  },
  {
    id: "goa-tourism",
    name: "Goa Tourism Development Corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Seal_of_Goa.svg/150px-Seal_of_Goa.svg.png",
    category: "government",
  },
  {
    id: "mp-tourism",
    name: "Madhya Pradesh Tourism",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Seal_of_Madhya_Pradesh.svg/150px-Seal_of_Madhya_Pradesh.svg.png",
    category: "government",
  },
  {
    id: "ministry-tourism",
    name: "Ministry of Tourism, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/150px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://tourism.gov.in",
  },

  // ===== PRIVATE SECTOR CLIENTS =====
  {
    id: "dlf",
    name: "DLF Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/DLF_logo.svg/200px-DLF_logo.svg.png",
    category: "private",
    website: "https://www.dlf.in",
  },
  {
    id: "unilever",
    name: "Hindustan Unilever Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Unilever_logo.svg/200px-Unilever_logo.svg.png",
    category: "private",
    website: "https://www.hul.co.in",
  },
  {
    id: "tata",
    name: "Tata Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png",
    category: "private",
    website: "https://www.tata.com",
  },
  {
    id: "acc",
    name: "ACC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/ACC_Limited_logo.svg/200px-ACC_Limited_logo.svg.png",
    category: "private",
    website: "https://www.acclimited.com",
  },
  {
    id: "airtel",
    name: "Bharti Airtel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Airtel_logo_2020.svg/200px-Airtel_logo_2020.svg.png",
    category: "private",
    website: "https://www.airtel.in",
  },
  {
    id: "dabur",
    name: "Dabur India Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Dabur.svg/200px-Dabur.svg.png",
    category: "private",
    website: "https://www.dabur.com",
  },
  {
    id: "haldirams",
    name: "Haldiram's",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Haldiram%27s_logo.png/200px-Haldiram%27s_logo.png",
    category: "private",
    website: "https://www.haldirams.com",
  },
  {
    id: "larsen-toubro",
    name: "Larsen & Toubro (L&T)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/LT_logo.png/200px-LT_logo.png",
    category: "private",
    website: "https://www.larsentoubro.com",
  },
  {
    id: "medanta",
    name: "Medanta - The Medicity",
    logo: "https://www.medanta.org/assets/images/logo.png",
    category: "private",
    website: "https://www.medanta.org",
  },
  {
    id: "orient-electric",
    name: "Orient Electric",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Orient_Electric_logo.svg/200px-Orient_Electric_logo.svg.png",
    category: "private",
    website: "https://www.orientelectric.com",
  },
  {
    id: "parle",
    name: "Parle Products",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Parle_Products_logo.svg/200px-Parle_Products_logo.svg.png",
    category: "private",
    website: "https://www.parleproducts.com",
  },
  {
    id: "radisson-blu",
    name: "Radisson Blu Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Radisson_Blu_logo.svg/200px-Radisson_Blu_logo.svg.png",
    category: "private",
    website: "https://www.radissonhotels.com",
  },
  {
    id: "relaxo",
    name: "Relaxo Footwears",
    logo: "https://www.relaxofootwear.com/images/relaxo-logo.png",
    category: "private",
    website: "https://www.relaxofootwear.com",
  },
  {
    id: "ultratech-cement",
    name: "UltraTech Cement",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/UltraTech_Cement_Logo.svg/200px-UltraTech_Cement_Logo.svg.png",
    category: "private",
    website: "https://www.ultratechcement.com",
  },
  {
    id: "volkswagen",
    name: "Volkswagen India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png",
    category: "international",
    website: "https://www.volkswagen.co.in",
  },
  {
    id: "videocon",
    name: "Videocon Industries",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Videocon_logo.svg/200px-Videocon_logo.svg.png",
    category: "private",
  },
  {
    id: "whirlpool",
    name: "Whirlpool India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Whirlpool_Corporation_Logo.svg/200px-Whirlpool_Corporation_Logo.svg.png",
    category: "international",
    website: "https://www.whirlpoolindia.com",
  },
  {
    id: "bonn",
    name: "Bonn Group of Industries",
    logo: "https://www.bonnbread.com/wp-content/uploads/2022/07/logo.png",
    category: "private",
    website: "https://www.bonnbread.com",
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi Electric India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mitsubishi_logo.svg/200px-Mitsubishi_logo.svg.png",
    category: "international",
    website: "https://www.mitsubishielectric.in",
  },
  {
    id: "hyatt",
    name: "Hyatt Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hyatt_Logo.svg/200px-Hyatt_Logo.svg.png",
    category: "international",
    website: "https://www.hyatt.com",
  },
  {
    id: "thermax",
    name: "Thermax Limited",
    logo: "https://www.thermaxglobal.com/wp-content/themes/thermax/assets/images/thermax-logo-new.png",
    category: "private",
    website: "https://www.thermaxglobal.com",
  },
  {
    id: "the-leela",
    name: "The Leela Palaces, Hotels and Resorts",
    logo: "https://www.theleela.com/prod/content/assets/styles/default/public/2021-03/leela-logo.png",
    category: "private",
    website: "https://www.theleela.com",
  },
  {
    id: "trident-hotels",
    name: "Trident Hotels",
    logo: "https://www.tridenthotels.com/images/trident-hotels-logo.png",
    category: "private",
    website: "https://www.tridenthotels.com",
  },
  {
    id: "verka",
    name: "Verka (Punjab State Cooperative Milk Federation)",
    logo: "https://www.verka.coop/images/verka-logo.png",
    category: "government",
    website: "https://www.verka.coop",
  },
  {
    id: "delhi-metro",
    name: "Delhi Metro Rail Corporation (DMRC)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Delhi_Metro_logo.svg/150px-Delhi_Metro_logo.svg.png",
    category: "government",
    website: "https://www.delhimetrorail.com",
  },
  {
    id: "nagpur-metro",
    name: "Nagpur Metro Rail Corporation",
    logo: "https://www.metrorailnagpur.com/images/logo.png",
    category: "government",
    website: "https://www.metrorailnagpur.com",
  },
  {
    id: "adani",
    name: "Adani Group",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Adani_2012_logo.png/200px-Adani_2012_logo.png",
    category: "private",
    website: "https://www.adani.com",
  },
  {
    id: "ambuja-cement",
    name: "Ambuja Cements",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Ambuja_Cements_logo.svg/200px-Ambuja_Cements_logo.svg.png",
    category: "private",
    website: "https://www.ambujacement.com",
  },
  {
    id: "amity-university",
    name: "Amity University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Amity_University_logo.png/200px-Amity_University_logo.png",
    category: "private",
    website: "https://www.amity.edu",
  },
  {
    id: "asian-paints",
    name: "Asian Paints",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/AsianPaints_Logo.svg/200px-AsianPaints_Logo.svg.png",
    category: "private",
    website: "https://www.asianpaints.com",
  },
  {
    id: "triveni",
    name: "Triveni Engineering & Industries Ltd.",
    logo: "https://www.trivenigroup.com/images/logo.png",
    category: "private",
    website: "https://www.trivenigroup.com",
  },
  {
    id: "somany",
    name: "Somany Ceramics",
    logo: "https://www.somanyceramics.com/assets/images/logo.svg",
    category: "private",
    website: "https://www.somanyceramics.com",
  },
  {
    id: "raheja",
    name: "Raheja Developers",
    logo: "https://www.rahejabuilders.com/images/logo.png",
    category: "private",
    website: "https://www.rahejabuilders.com",
  },
  {
    id: "dmart",
    name: "DMart (Avenue Supermarts)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/DMart_logo.png/200px-DMart_logo.png",
    category: "private",
    website: "https://www.dmartindia.com",
  },
  {
    id: "liberty",
    name: "Liberty Shoes",
    logo: "https://www.libertyshoes.com/images/logo.png",
    category: "private",
    website: "https://www.libertyshoes.com",
  },
  {
    id: "amu",
    name: "Aligarh Muslim University (AMU)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Aligarh_Muslim_University_coat_of_arms.svg/150px-Aligarh_Muslim_University_coat_of_arms.svg.png",
    category: "government",
    website: "https://www.amu.ac.in",
  },
  {
    id: "hmel",
    name: "HPCL-Mittal Energy Limited (HMEL)",
    logo: "https://www.hfrefineries.com/images/logo.png",
    category: "private",
    website: "https://www.hfrefineries.com",
  },
  {
    id: "fortis",
    name: "Fortis Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Fortis_Healthcare_logo.svg/200px-Fortis_Healthcare_logo.svg.png",
    category: "private",
    website: "https://www.fortishealthcare.com",
  },
  {
    id: "nerolac",
    name: "Nerolac Paints",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Nerolac_logo.svg/200px-Nerolac_logo.svg.png",
    category: "private",
    website: "https://www.nerolac.com",
  },
  {
    id: "hindustan-times",
    name: "Hindustan Times",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/HT_Media_Logo.svg/200px-HT_Media_Logo.svg.png",
    category: "private",
    website: "https://www.hindustantimes.com",
  },
  {
    id: "dayanand-medical",
    name: "Dayanand Medical College & Hospital, Ludhiana",
    logo: "https://www.dmch.edu/images/logo.png",
    category: "private",
    website: "https://www.dmch.edu",
  },
  {
    id: "kisan-sahkari-chini-mills",
    name: "Kisan Sahkari Chini Mills Ltd., Najibabad",
    logo: "/clients/kisan-sahkari.png",
    category: "private",
  },
  {
    id: "hng",
    name: "Hindusthan National Glass & Industries",
    logo: "https://www.hfrefineries.com/images/logo.png",
    category: "private",
    website: "https://www.hfrefineries.com",
  },

  // ===== MUNICIPAL CLIENTS =====
  {
    id: "nagar-palika-amroha",
    name: "Nagar Palika Parishad, Amroha",
    logo: "/clients/nagar-palika-amroha.png",
    category: "municipal",
  },
  {
    id: "municipal-board-barpeta",
    name: "Municipal Board, Barpeta, Assam",
    logo: "/clients/municipal-barpeta.png",
    category: "municipal",
  },
  {
    id: "municipal-board-bilasipara",
    name: "Municipal Board, Bilasipara, Assam",
    logo: "/clients/municipal-bilasipara.png",
    category: "municipal",
  },
  {
    id: "municipal-board-dhubri",
    name: "Municipal Board, Dhubri, Assam",
    logo: "/clients/municipal-dhubri.png",
    category: "municipal",
  },
  {
    id: "municipal-board-gauripur",
    name: "Municipal Board, Gauripur, Assam",
    logo: "/clients/municipal-gauripur.png",
    category: "municipal",
  },
  {
    id: "municipal-board-kajalgaon",
    name: "Municipal Board, Kajalgaon, Assam",
    logo: "/clients/municipal-kajalgaon.png",
    category: "municipal",
  },
  {
    id: "municipal-board-rangapara",
    name: "Municipal Board, Rangapara, Assam",
    logo: "/clients/municipal-rangapara.png",
    category: "municipal",
  },
  {
    id: "municipal-board-nalbari",
    name: "Municipal Board, Nalbari, Assam",
    logo: "/clients/municipal-nalbari.png",
    category: "municipal",
  },
  {
    id: "municipal-board-hailakandi",
    name: "Municipal Board, Hailakandi, Assam",
    logo: "/clients/municipal-hailakandi.png",
    category: "municipal",
  },
  {
    id: "municipal-board-rangia",
    name: "Municipal Board, Rangia, Assam",
    logo: "/clients/municipal-rangia.png",
    category: "municipal",
  },
];

// Featured clients list (shows on homepage)
export const FEATURED_CLIENT_IDS: string[] = [
  "tata",
  "indian-oil",
  "adani",
  "dlf",
  "delhi-metro",
  "larsen-toubro",
  "airtel",
  "acc",
];

// Helper function to get featured clients
export const getFeaturedClients = (): ClientType[] => {
  if (FEATURED_CLIENT_IDS.length === 0) {
    // If no featured clients specified, return first 8 clients
    return CLIENTS.slice(0, 8);
  }
  return CLIENTS.filter((client) => FEATURED_CLIENT_IDS.includes(client.id));
};

// Helper function to get clients by category
export const getClientsByCategory = (category: string): ClientType[] => {
  if (category === "all") return CLIENTS;
  return CLIENTS.filter((client) => client.category === category);
};
