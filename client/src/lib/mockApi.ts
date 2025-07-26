
// Mock API services to replace server functionality
export interface Consultation {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed';
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  message: string;
  response: string;
  sessionId: string;
  timestamp: Date;
}

export interface Quote {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  capacity?: string;
  location?: string;
  timeline?: string;
  description?: string;
  status: 'pending' | 'sent' | 'accepted';
  createdAt: Date;
}

// Simple chatbot responses based on message content
function generateChatResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('stp') || lowerMessage.includes('sewage')) {
    return "STP (Sewage Treatment Plant) capacity depends on your daily wastewater generation. We offer solutions from 10,000 to 10 million liters per day. Our STPs use advanced biological treatment with MBR technology for high-quality effluent that meets pollution control board standards.";
  }
  
  if (lowerMessage.includes('etp') || lowerMessage.includes('effluent')) {
    return "ETP technology selection depends on effluent characteristics. We design custom solutions for textile, pharmaceutical, chemical, and food processing industries. Our ETPs include physicochemical treatment, biological treatment, and tertiary polishing to achieve zero liquid discharge (ZLD) if required.";
  }
  
  if (lowerMessage.includes('wtp') || lowerMessage.includes('water treatment')) {
    return "Our WTP solutions include reverse osmosis, ultrafiltration, and ion exchange systems. We handle raw water treatment from bore wells, rivers, and municipal supplies. Capacity ranges from 1,000 to 50,000 liters per hour with automated operation and remote monitoring.";
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
    return "Pricing depends on capacity, technology, and site conditions. STP costs range from ₹15-50 lakhs, ETP from ₹20-100 lakhs, and WTP from ₹5-30 lakhs. We provide detailed technical and commercial proposals within 48 hours. Would you like to request a formal quote?";
  }
  
  if (lowerMessage.includes('maintenance') || lowerMessage.includes('service')) {
    return "We offer comprehensive O&M services including daily operation, preventive maintenance, breakdown support, and performance optimization. Our AMC plans start from ₹50,000/year with 24/7 support and guaranteed compliance with environmental norms.";
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! I'm here to help with your water treatment needs. We specialize in STP, ETP, and WTP solutions. What specific information can I provide about our services?";
  }
  
  return "Thank you for your inquiry! Our team specializes in comprehensive water treatment solutions including STPs, ETPs, and WTPs. We provide turnkey solutions from design to commissioning with ongoing support. Can you tell me more about your specific requirements or which service interests you?";
}

// Mock storage using localStorage
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

  // Consultation methods
  async createConsultation(data: Omit<Consultation, 'id' | 'status' | 'createdAt'>): Promise<Consultation> {
    const consultation: Consultation = {
      ...data,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date(),
    };
    
    const consultations = this.getItems<Consultation>('consultations');
    consultations.push(consultation);
    this.setItems('consultations', consultations);
    
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return this.getItems<Consultation>('consultations');
  }

  // Chat methods
  async createChatMessage(data: { message: string; sessionId: string }): Promise<ChatMessage> {
    const response = generateChatResponse(data.message);
    const chatMessage: ChatMessage = {
      id: Date.now().toString(),
      message: data.message,
      response,
      sessionId: data.sessionId,
      timestamp: new Date(),
    };
    
    const messages = this.getItems<ChatMessage>('chat_messages');
    messages.push(chatMessage);
    this.setItems('chat_messages', messages);
    
    return chatMessage;
  }

  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    const messages = this.getItems<ChatMessage>('chat_messages');
    return messages.filter(msg => msg.sessionId === sessionId);
  }

  // Quote methods
  async createQuote(data: Omit<Quote, 'id' | 'status' | 'createdAt'>): Promise<Quote> {
    const quote: Quote = {
      ...data,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date(),
    };
    
    const quotes = this.getItems<Quote>('quotes');
    quotes.push(quote);
    this.setItems('quotes', quotes);
    
    return quote;
  }

  async getQuotes(): Promise<Quote[]> {
    return this.getItems<Quote>('quotes');
  }
}

export const mockStorage = new MockStorage();

// Mock API functions that replace the server endpoints
export const mockApi = {
  // Consultation endpoints
  async createConsultation(data: Omit<Consultation, 'id' | 'status' | 'createdAt'>) {
    return mockStorage.createConsultation(data);
  },

  async getConsultations() {
    return mockStorage.getConsultations();
  },

  // Chat endpoints
  async sendChatMessage(message: string, sessionId: string) {
    const chatMessage = await mockStorage.createChatMessage({ message, sessionId });
    return { response: chatMessage.response };
  },

  async getChatHistory(sessionId: string) {
    return mockStorage.getChatMessages(sessionId);
  },

  // Quote endpoints
  async createQuote(data: Omit<Quote, 'id' | 'status' | 'createdAt'>) {
    return mockStorage.createQuote(data);
  },

  async getQuotes() {
    return mockStorage.getQuotes();
  },
};
