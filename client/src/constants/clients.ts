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
    id: "airports-authority-india",
    name: "Airports Authority of India (AAI)",
    logo: "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Preview-9.png",
    category: "government",
    website: "https://www.aai.aero",
  },
  {
    id: "irctc",
    name: "Indian Railway Catering and Tourism Corporation Limited (IRCTC)",
    logo: "https://www.irctc.co.in/nget/assets/images/logo.png",
    category: "government",
    website: "https://www.irctc.co.in",
  },
  {
    id: "indian-oil",
    name: "Indian Oil Corporation Limited (IOCL)",
    logo: "https://images.seeklogo.com/logo-png/19/1/indian-oil-logo-png_seeklogo-198933.png",
    category: "government",
    website: "https://iocl.com",
  },
  {
    id: "ongc",
    name: "Oil and Natural Gas Corporation Limited (ONGC)",
    logo: "https://www.ongcindia.com/documents/77751/2132071/ongcLogo.jpg",
    category: "government",
    website: "https://www.ongcindia.com",
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
    name: "UP Jal Nigam",
    logo: "/clients/up-jal-nigam.png",
    category: "government",
  },
  {
    id: "indian-army",
    name: "Indian Army",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Indian_Army_Seal.svg/1200px-Indian_Army_Seal.svg.png",
    category: "government",
  },
  {
    id: "bhel",
    name: "Bharat Heavy Electricals Limited (BHEL)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Bharat_Heavy_Electricals_Limited_logo.svg/1200px-Bharat_Heavy_Electricals_Limited_logo.svg.png",
    category: "government",
    website: "https://www.bhel.com",
  },
  {
    id: "mp-tourism",
    name: "Madhya Pradesh Tourism",
    logo: "https://www.mptourism.com/images/logo.png",
    category: "government",
    website: "https://www.mptourism.com",
  },
  {
    id: "dda",
    name: "Delhi Development Authority (DDA)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Delhi_Development_Authority_Logo.svg/1200px-Delhi_Development_Authority_Logo.svg.png",
    category: "government",
    website: "https://www.dda.gov.in",
  },
  {
    id: "haryana-police-housing",
    name: "Haryana Police Housing Corporation",
    logo: "https://www.hphc.gov.in/images/logo.png",
    category: "government",
    website: "https://www.hphc.gov.in",
  },
  {
    id: "hindustan-petroleum",
    name: "Hindustan Petroleum Corporation Limited (HPCL)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Hindustan_Petroleum_Logo.svg/1200px-Hindustan_Petroleum_Logo.svg.png",
    category: "government",
    website: "https://www.hindustanpetroleum.com",
  },
  {
    id: "indian-railways",
    name: "Indian Railways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Indian_Railway_Logo.svg/1200px-Indian_Railway_Logo.svg.png",
    category: "government",
    website: "https://indianrailways.gov.in",
  },
  {
    id: "cpwd",
    name: "Central Public Works Department (CPWD)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://cpwd.gov.in",
  },
  {
    id: "nagpur-metro",
    name: "Nagpur Metro Rail Corporation Limited",
    logo: "https://www.nagpurmetrorail.com/images/logo.png",
    category: "government",
    website: "https://www.nagpurmetrorail.com",
  },
  {
    id: "pwd-delhi",
    name: "Public Works Department, Delhi",
    logo: "https://delhi.gov.in/sites/default/files/logo_delhi_0.png",
    category: "government",
    website: "https://delhi.gov.in/department/pwd",
  },
  {
    id: "goa-tourism",
    name: "Goa Tourism Development Corporation",
    logo: "https://goatourism.gov.in/images/logo.png",
    category: "government",
    website: "https://goatourism.gov.in",
  },
  {
    id: "verka",
    name: "Punjab State Co-operative Milk Producers Federation (Verka)",
    logo: "https://verka.coop/images/verka-logo.png",
    category: "government",
    website: "https://verka.coop",
  },
  {
    id: "delhi-metro",
    name: "Delhi Metro Rail Corporation (DMRC)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Delhi_Metro_logo.svg/1200px-Delhi_Metro_logo.svg.png",
    category: "government",
    website: "https://www.delhimetrorail.com",
  },
  {
    id: "up-jal-nigam-urban",
    name: "Uttar Pradesh Jal Nigam (Urban)",
    logo: "https://upjn.org/images/logo.png",
    category: "government",
    website: "https://upjn.org",
  },
  {
    id: "haryana-forest",
    name: "Haryana Forest Department",
    logo: "https://haryanaforest.gov.in/images/logo.png",
    category: "government",
    website: "https://haryanaforest.gov.in",
  },
  {
    id: "pwd-west-bengal",
    name: "Public Works Department, Government of West Bengal",
    logo: "https://wbpwd.gov.in/images/logo.png",
    category: "government",
    website: "https://wbpwd.gov.in",
  },
  {
    id: "ministry-of-defence",
    name: "Ministry of Defence, Government of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://mod.gov.in",
  },
  {
    id: "greater-noida-authority",
    name: "Greater Noida Industrial Development Authority",
    logo: "https://www.greaternoidaauthority.in/images/logo.png",
    category: "government",
    website: "https://www.greaternoidaauthority.in",
  },
  {
    id: "msme",
    name: "Ministry of Micro, Small and Medium Enterprises (MSME)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://msme.gov.in",
  },
  {
    id: "mohua-cpwd",
    name: "Ministry of Housing & Urban Affairs - CPWD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png",
    category: "government",
    website: "https://mohua.gov.in",
  },
  {
    id: "ntpc",
    name: "NTPC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/NTPC_Logo.svg/1200px-NTPC_Logo.svg.png",
    category: "government",
    website: "https://www.ntpc.co.in",
  },
  {
    id: "bihar-health",
    name: "Bihar State Health Department (Bihar Sarkar Swasthya Vibhag)",
    logo: "https://state.bihar.gov.in/health/images/logo.png",
    category: "government",
    website: "https://state.bihar.gov.in/health",
  },
  {
    id: "incredible-india",
    name: "Ministry of Tourism, Government of India (Incredible India)",
    logo: "https://tourism.gov.in/sites/default/files/incredible-india-logo.png",
    category: "government",
    website: "https://www.incredibleindia.org",
  },
  {
    id: "haryana-energy",
    name: "Haryana Energy Department",
    logo: "https://hareda.gov.in/images/logo.png",
    category: "government",
    website: "https://hareda.gov.in",
  },

  // ===== PRIVATE CLIENTS =====
  {
    id: "tata",
    name: "Tata Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png",
    category: "private",
    website: "https://www.tata.com",
  },
  {
    id: "acc",
    name: "ACC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/ACC_Limited_logo.svg/1200px-ACC_Limited_logo.svg.png",
    category: "private",
    website: "https://www.acclimited.com",
  },
  {
    id: "airtel",
    name: "Bharti Airtel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Airtel_logo.svg/1200px-Airtel_logo.svg.png",
    category: "private",
    website: "https://www.airtel.in",
  },
  {
    id: "dabur",
    name: "Dabur India Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dabur_Logo.svg/1200px-Dabur_Logo.svg.png",
    category: "private",
    website: "https://www.dabur.com",
  },
  {
    id: "dayanand-medical-college",
    name: "Dayanand Medical College & Hospital, Ludhiana",
    logo: "https://www.dmch.edu/images/dmch-logo.png",
    category: "private",
    website: "https://www.dmch.edu",
  },
  {
    id: "haldirams",
    name: "Haldiram's",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Haldiram%27s_logo.svg/1200px-Haldiram%27s_logo.svg.png",
    category: "private",
    website: "https://www.haldirams.com",
  },
  {
    id: "hng",
    name: "Hindusthan National Glass & Industries Limited",
    logo: "https://www.hngil.com/images/logo.png",
    category: "private",
    website: "https://www.hngil.com",
  },
  {
    id: "larsen-toubro",
    name: "Larsen & Toubro Limited (L&T)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/L%26T_logo.svg/1200px-L%26T_logo.svg.png",
    category: "private",
    website: "https://www.larsentoubro.com",
  },
  {
    id: "medanta",
    name: "Medanta - The Medicity",
    logo: "https://www.medanta.org/assets/images/logo.svg",
    category: "private",
    website: "https://www.medanta.org",
  },
  {
    id: "orient-electric",
    name: "Orient Electric Limited",
    logo: "https://www.orientelectric.com/images/orient-electric-logo.png",
    category: "private",
    website: "https://www.orientelectric.com",
  },
  {
    id: "parle",
    name: "Parle Products Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Parle_Products_logo.svg/1200px-Parle_Products_logo.svg.png",
    category: "private",
    website: "https://www.parleproducts.com",
  },
  {
    id: "radisson-blu",
    name: "Radisson Blu Hotels & Resorts",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Radisson_Blu_logo.svg/1200px-Radisson_Blu_logo.svg.png",
    category: "private",
    website: "https://www.radissonhotels.com",
  },
  {
    id: "relaxo",
    name: "Relaxo Footwears Limited",
    logo: "https://www.relaxofootwear.com/images/logo.png",
    category: "private",
    website: "https://www.relaxofootwear.com",
  },
  {
    id: "ultratech-cement",
    name: "UltraTech Cement Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/UltraTech_Cement_Logo.svg/1200px-UltraTech_Cement_Logo.svg.png",
    category: "private",
    website: "https://www.ultratechcement.com",
  },
  {
    id: "volkswagen",
    name: "Volkswagen India Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png",
    category: "private",
    website: "https://www.volkswagen.co.in",
  },
  {
    id: "videocon",
    name: "Videocon Industries Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Videocon_logo.svg/1200px-Videocon_logo.svg.png",
    category: "private",
  },
  {
    id: "whirlpool",
    name: "Whirlpool of India Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Whirlpool_Corporation_Logo.svg/1200px-Whirlpool_Corporation_Logo.svg.png",
    category: "private",
    website: "https://www.whirlpoolindia.com",
  },
  {
    id: "bonn",
    name: "Bonn Group of Industries",
    logo: "https://www.bonngroup.in/images/logo.png",
    category: "private",
    website: "https://www.bonngroup.in",
  },
  {
    id: "hindustan-times",
    name: "Hindustan Times",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hindustan_Times_logo.svg/1200px-Hindustan_Times_logo.svg.png",
    category: "private",
    website: "https://www.hindustantimes.com",
  },
  {
    id: "thermax",
    name: "Thermax Limited",
    logo: "https://www.thermaxglobal.com/wp-content/uploads/2020/03/Thermax-Logo.png",
    category: "private",
    website: "https://www.thermaxglobal.com",
  },
  {
    id: "the-leela",
    name: "The Leela Palaces, Hotels and Resorts",
    logo: "https://www.theleela.com/assets/images/logo.svg",
    category: "private",
    website: "https://www.theleela.com",
  },
  {
    id: "trident-hotels",
    name: "Trident Hotels",
    logo: "https://www.tridenthotels.com/images/logo.png",
    category: "private",
    website: "https://www.tridenthotels.com",
  },
  {
    id: "adani",
    name: "Adani Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Adani_Logo.svg/1200px-Adani_Logo.svg.png",
    category: "private",
    website: "https://www.adani.com",
  },
  {
    id: "ambuja-cement",
    name: "Ambuja Cements Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Ambuja_Cements_Logo.svg/1200px-Ambuja_Cements_Logo.svg.png",
    category: "private",
    website: "https://www.ambujacement.com",
  },
  {
    id: "amity-university",
    name: "Amity University",
    logo: "https://www.amity.edu/images/logo.png",
    category: "private",
    website: "https://www.amity.edu",
  },
  {
    id: "asian-paints",
    name: "Asian Paints Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Asian_Paints_Logo.svg/1200px-Asian_Paints_Logo.svg.png",
    category: "private",
    website: "https://www.asianpaints.com",
  },
  {
    id: "unilever",
    name: "Hindustan Unilever Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unilever_logo_2023.svg/1200px-Unilever_logo_2023.svg.png",
    category: "private",
    website: "https://www.hul.co.in",
  },
  {
    id: "triveni-engineering",
    name: "Triveni Engineering & Industries Ltd",
    logo: "https://www.trivenigroup.com/images/logo.png",
    category: "private",
    website: "https://www.trivenigroup.com",
  },
  {
    id: "somany",
    name: "Somany Ceramics Limited",
    logo: "https://www.somanyceramics.com/images/logo.png",
    category: "private",
    website: "https://www.somanyceramics.com",
  },
  {
    id: "raheja",
    name: "Raheja Developers Limited",
    logo: "https://www.rahejadevelopers.com/images/logo.png",
    category: "private",
    website: "https://www.rahejadevelopers.com",
  },
  {
    id: "dmart",
    name: "Avenue Supermarts Limited (DMart)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/DMart_logo.svg/1200px-DMart_logo.svg.png",
    category: "private",
    website: "https://www.dmartindia.com",
  },
  {
    id: "gima",
    name: "GIMA (Garden Industries Manufacturers Association)",
    logo: "https://www.gima.in/images/logo.png",
    category: "private",
  },
  {
    id: "kisan-sahkari-chini-mills",
    name: "Kisan Sahkari Chini Mills Ltd., Najibabad",
    logo: "/clients/kisan-sahkari.png",
    category: "private",
  },
  {
    id: "liberty",
    name: "Liberty Shoes Limited",
    logo: "https://www.libertyshoes.com/images/logo.png",
    category: "private",
    website: "https://www.libertyshoes.com",
  },
  {
    id: "dlf",
    name: "DLF Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/DLF_Logo.svg/1200px-DLF_Logo.svg.png",
    category: "private",
    website: "https://www.dlf.in",
  },
  {
    id: "hmel",
    name: "HPCL-Mittal Energy Limited (HMEL)",
    logo: "https://www.hmel.in/images/hmel-logo.png",
    category: "private",
    website: "https://www.hmel.in",
  },
  {
    id: "fortis-hospitals",
    name: "Fortis Healthcare Limited",
    logo: "https://www.fortishealthcare.com/images/logo.svg",
    category: "private",
    website: "https://www.fortishealthcare.com",
  },
  {
    id: "nerolac",
    name: "Kansai Nerolac Paints Limited",
    logo: "https://www.nerolac.com/images/logo.png",
    category: "private",
    website: "https://www.nerolac.com",
  },

  // ===== INTERNATIONAL CLIENTS =====
  {
    id: "mitsubishi",
    name: "Mitsubishi Electric India Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mitsubishi_logo.svg/1200px-Mitsubishi_logo.svg.png",
    category: "international",
    website: "https://www.mitsubishielectric.in",
  },
  {
    id: "hyatt",
    name: "Hyatt Hotels Corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Hyatt_Logo.svg/1200px-Hyatt_Logo.svg.png",
    category: "international",
    website: "https://www.hyatt.com",
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

// Featured clients list (empty array means show first 8 clients)
export const FEATURED_CLIENT_IDS: string[] = [
  "tata",
  "indian-oil",
  "bhel",
  "ntpc",
  "delhi-metro",
  "adani",
  "dlf",
  "larsen-toubro",
  "asian-paints",
  "unilever",
  "airtel",
  "whirlpool",
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
