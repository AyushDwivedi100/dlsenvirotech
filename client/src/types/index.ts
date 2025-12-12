export interface ServiceType {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  project: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  capacity?: string;
  message?: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  response: string;
  isUser: boolean;
  timestamp: Date;
}
