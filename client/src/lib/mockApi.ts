// Import external library for fuzzy string matching
import stringSimilarity from "string-similarity";

// Define the shape of a chat message
export interface ChatMessage {
  id: string;
  message: string;
  response: string;
  sessionId: string;
  timestamp: Date;
  redirectUrl?: string;
}

// Mapping of recognized keywords to chatbot responses and optional redirect URLs
const keywordMap: Record<string, { text: string; redirectUrl?: string }> = {
  stp: {
    text: "We provide MBBR and MBR-based STP (Sewage Treatment Plant) systems for housing societies, hotels, and industries. Plants meet CPCB norms and range from 5 KLD to 10 MLD.",
    redirectUrl: "", // TODO: Add STP service page URL
  },
  "sewage treatment plant": {
    text: "We provide MBBR and MBR-based STP (Sewage Treatment Plant) systems for housing societies, hotels, and industries. Plants meet CPCB norms and range from 5 KLD to 10 MLD.",
    redirectUrl: "",
  },
  etp: {
    text: "Our ETP (Effluent Treatment Plant) systems are custom-designed for textiles, pharma, and chemical industries with ZLD-ready configurations.",
    redirectUrl: "",
  },
  "effluent treatment plant": {
    text: "Our ETP (Effluent Treatment Plant) systems are custom-designed for textiles, pharma, and chemical industries with ZLD-ready configurations.",
    redirectUrl: "",
  },
  wtp: {
    text: "We offer RO, softeners, ultrafiltration and disinfection systems for borewell, river and municipal water.",
    redirectUrl: "",
  },
  "water treatment plant": {
    text: "We offer RO, softeners, ultrafiltration and disinfection systems for borewell, river and municipal water.",
    redirectUrl: "",
  },
  fstp: {
    text: "FSTPs (Faecal Sludge Treatment Plants) by DLS are decentralized/containerized faecal sludge processing units with solar drying & pathogen kill.",
    redirectUrl: "",
  },
  "faecal sludge treatment plant": {
    text: "FSTPs (Faecal Sludge Treatment Plants) by DLS are decentralized/containerized faecal sludge processing units with solar drying & pathogen kill.",
    redirectUrl: "",
  },
  mrf: {
    text: "Our MRF (Material Recovery Facility) systems recover recyclables using conveyors, trommels, and balers for plastic, paper, metal, and glass.",
    redirectUrl: "",
  },
  "material recovery facility": {
    text: "Our MRF (Material Recovery Facility) systems recover recyclables using conveyors, trommels, and balers for plastic, paper, metal, and glass.",
    redirectUrl: "",
  },
  "solid waste": {
    text: "We offer complete Solid Waste Management including segregation, composting, RDF & landfill design.",
    redirectUrl: "",
  },
  "solid waste management": {
    text: "We offer complete Solid Waste Management including segregation, composting, RDF & landfill design.",
    redirectUrl: "",
  },
  psa: {
    text: "PSA Oxygen Plants deliver 93±3% purity. Ideal for hospitals & industries with 10–500 Nm³/hr options.",
    redirectUrl: "",
  },
  "psa oxygen plant": {
    text: "PSA Oxygen Plants deliver 93±3% purity. Ideal for hospitals & industries with 10–500 Nm³/hr options.",
    redirectUrl: "",
  },
  "air pollution": {
    text: "We build air pollution control equipment like scrubbers, carbon units & air towers for industries & public zones.",
    redirectUrl: "",
  },
  "cooling tower": {
    text: "We supply FRP cooling towers for HVAC, process & thermal applications. Models up to 2000 TR.",
    redirectUrl: "",
  },
  "filter press": {
    text: "We supply industrial-grade filter presses for sludge dewatering in STP, ETP, and FSTP applications.",
    redirectUrl: "",
  },
  "sand filter": {
    text: "Sand Filters provide effective pre-treatment in WTP and RO systems for suspended solids removal.",
    redirectUrl: "",
  },
  "water softening": {
    text: "Our Water Softening Plants reduce hardness using ion-exchange resin for domestic and industrial applications.",
    redirectUrl: "",
  },
  "filter vessel": {
    text: "We offer FRP/MS Filter Vessels for media filtration in water and process industries.",
    redirectUrl: "",
  },
  "industrial water filter": {
    text: "DLS supplies cartridge, bag, and media filters for high-flow industrial water treatment.",
    redirectUrl: "",
  },
  "trommel screen": {
    text: "Trommel Screens are used in MRFs and SWM facilities for size-based segregation of waste streams.",
    redirectUrl: "",
  },
  "ion exchange": {
    text: "We supply premium-grade Ion Exchange Resin for softeners, DM, and mixed-bed polishers.",
    redirectUrl: "",
  },
  "wtp o&m": {
    text: "We provide skilled O&M services for existing WTPs including reporting, lab testing, and performance audits.",
    redirectUrl: "",
  },
  "stp o&m": {
    text: "Our STP O&M contracts include trained operators, regular maintenance, and statutory compliance.",
    redirectUrl: "",
  },
  "bio culture": {
    text: "DLS supplies activated bio cultures and bacterial strains for sludge reduction and odor control.",
    redirectUrl: "",
  },
  "bio fertilizer": {
    text: "Our Bio-Fertilizers improve soil health and crop productivity, derived from FSTP outputs.",
    redirectUrl: "",
  },
  "organic capsule": {
    text: "Organic Capsules enriched with microbes aid in septic digestion and biogas plant efficiency.",
    redirectUrl: "",
  },
  "fabrication service": {
    text: "We offer MS/SS tank, skid, and ducting fabrication services for environmental projects.",
    redirectUrl: "",
  },
  disinfectant: {
    text: "We manufacture eco-safe disinfectants for treated water, surfaces, and sludge sanitation.",
    redirectUrl: "",
  },
  "wastewater treatment": {
    text: "Our wastewater solutions include STP, ETP, and decentralized systems for all sectors.",
    redirectUrl: "",
  },
  price: {
    text: "Pricing depends on technology & site needs. STPs ₹15–50L, ETPs ₹25–120L. Request a formal quote?",
    redirectUrl: "",
  },
  maintenance: {
    text: "We offer AMC & O&M with preventive checks, breakdown support, training & pollution compliance.",
    redirectUrl: "",
  },
  hi: {
    text: "Welcome to DLS Envirotech — your partner for turnkey water, waste, and air treatment solutions. Let us know what you're looking for: STP, ETP, WTP, PSA Oxygen, Solid Waste, FSTP, MRF, Cooling Towers, or custom services.",
    redirectUrl: "",
  },
};

// Return the best matching response based on fuzzy similarity
function getBestMatchResponse(message: string): {
  text: string;
  redirectUrl?: string;
} {
  const lowerMessage = message.toLowerCase();
  const words = lowerMessage.split(/\s+/);
  const keys = Object.keys(keywordMap);

  let bestMatch = { target: "", rating: 0 };

  for (const word of words) {
    const result = stringSimilarity.findBestMatch(word, keys);
    if (result.bestMatch.rating > bestMatch.rating) {
      bestMatch = result.bestMatch;
    }
  }

  if (bestMatch.rating >= 0.5) {
    return keywordMap[bestMatch.target];
  }

  return {
    text: "Please specify which service you're looking for.",
  };
}

// LocalStorage-based mock backend
class MockStorage {
  private getStorageKey(type: string): string {
    return `dls_${type}`;
  }

  private getItems<T>(type: string): T[] {
    const data = localStorage.getItem(this.getStorageKey(type));
    return data ? JSON.parse(data) : [];
  }

  private setItems<T>(type: string, items: T[]): void {
    localStorage.setItem(this.getStorageKey(type), JSON.stringify(items));
  }

  // Create and store a chat message
  async createChatMessage(data: {
    message: string;
    sessionId: string;
  }): Promise<ChatMessage & { redirectUrl?: string }> {
    const result = getBestMatchResponse(data.message);

    const chatMessage: ChatMessage = {
      id: Date.now().toString(),
      message: data.message,
      response: result.text,
      sessionId: data.sessionId,
      timestamp: new Date(),
    };

    const messages = this.getItems<ChatMessage>("chat_messages");
    messages.push(chatMessage);
    this.setItems("chat_messages", messages);

    return { ...chatMessage, redirectUrl: result.redirectUrl };
  }

  // Fetch all chat messages for a session
  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    const messages = this.getItems<ChatMessage>("chat_messages");
    return messages.filter((msg) => msg.sessionId === sessionId);
  }
}

export const mockStorage = new MockStorage();

// Exposed API wrapper to interact with chatbot data
export const mockApi = {
  async sendChatMessage(message: string, sessionId: string) {
    const chatMessage = await mockStorage.createChatMessage({
      message,
      sessionId,
    });
    return {
      response: chatMessage.response,
      redirectUrl: chatMessage.redirectUrl,
    };
  },

  async getChatHistory(sessionId: string) {
    return mockStorage.getChatMessages(sessionId);
  },
};
