import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema, insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation endpoints
  app.post("/api/consultations", async (req, res) => {
    try {
      const consultation = insertConsultationSchema.parse(req.body);
      const created = await storage.createConsultation(consultation);
      res.json(created);
    } catch (error) {
      res.status(400).json({ error: "Invalid consultation data" });
    }
  });

  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch consultations" });
    }
  });

  app.patch("/api/consultations/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updated = await storage.updateConsultationStatus(id, status);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ error: "Consultation not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update consultation" });
    }
  });

  // Chat endpoints
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      const response = generateChatResponse(message);
      
      const chatMessage = insertChatMessageSchema.parse({
        message,
        response,
        sessionId,
      });
      
      const created = await storage.createChatMessage(chatMessage);
      res.json({ response: created.response });
    } catch (error) {
      res.status(400).json({ error: "Invalid chat message" });
    }
  });

  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch chat messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateChatResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('stp') || lowerMessage.includes('sewage')) {
    return "STP (Sewage Treatment Plant) capacity depends on population and flow rate. For residential: 135-200 liters/person/day. For commercial: varies by type. Would you like a detailed calculation for your project?";
  } else if (lowerMessage.includes('etp') || lowerMessage.includes('effluent')) {
    return "ETP technology selection depends on effluent characteristics. We offer: Physical-Chemical treatment, Biological treatment (ASP, SBR, MBR), and Advanced treatment (RO, UF). What's your industry type?";
  } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return "Pricing depends on capacity, technology, and site conditions. STP: ₹8-15 lakhs/MLD, ETP: ₹12-25 lakhs/MLD. Would you like a detailed quote? Please share your requirements.";
  } else if (lowerMessage.includes('capacity')) {
    return "We handle all capacities: Small (1-10 KLD), Medium (10-100 KLD), Large (100+ KLD). What's your daily flow requirement?";
  } else if (lowerMessage.includes('ro') || lowerMessage.includes('reverse osmosis')) {
    return "Our RO systems provide high-quality purified water. Industrial RO plants range from 500 LPH to 50,000+ LPH capacity. Applications include process water, boiler feed, and pharmaceutical use.";
  } else if (lowerMessage.includes('cooling tower')) {
    return "We manufacture counter-flow and cross-flow cooling towers from 10 TR to 5000 TR capacity. Features include high efficiency fills, drift eliminators, and corrosion-resistant construction.";
  } else if (lowerMessage.includes('maintenance') || lowerMessage.includes('amc')) {
    return "We provide comprehensive AMC services including: Monthly maintenance, Chemical supply, Performance monitoring, Emergency support. Our AMC covers all major components and ensures optimal performance.";
  } else {
    return "I can help with technical questions about water treatment systems. For detailed discussions, please call +1 956 857 2005 or schedule a consultation. What specific information do you need?";
  }
}
