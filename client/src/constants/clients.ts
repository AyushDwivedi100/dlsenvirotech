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
    logo: "/clients/irctc.jpg",
    category: "government",
    website: "https://www.irctc.co.in",
  },
  {
    id: "airports-authority-india",
    name: "Airports Authority of India (AAI)",
    logo: "/clients/airports-authority-india.jpg",
    category: "government",
    website: "https://www.aai.aero",
  },
  {
    id: "ongc",
    name: "Oil and Natural Gas Corporation Limited (ONGC)",
    logo: "/clients/ongc.jpg",
    category: "government",
    website: "https://www.ongcindia.com",
  },
  {
    id: "indian-oil",
    name: "Indian Oil Corporation Limited (IOCL)",
    logo: "/clients/indian-oil.jpg",
    category: "government",
    website: "https://iocl.com",
  },
  {
    id: "all-india-radio",
    name: "All India Radio (Prasar Bharati)",
    logo: "/clients/all-india-radio.jpg",
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
    id: "kisan-sahkari-chini-mills",
    name: "Kisan Sahkari Chini Mills Ltd., Najibabad",
    logo: "/clients/kisan-sahkari.png",
    category: "private",
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
  "irctc",
  "airports-authority-india",
  "ongc",
  "indian-oil",
  "all-india-radio",
  "up-jal-nigam",
  "nagar-palika-amroha",
  "kisan-sahkari-chini-mills",
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
