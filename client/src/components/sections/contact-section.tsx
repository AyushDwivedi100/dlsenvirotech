import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactFormData } from "@/types";
import { 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Download,
  Headphones,
  MapPin,
  Globe,
  Truck,
  Wrench,
  Send
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    capacity: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Request Submitted",
        description: "We'll contact you within 24 hours with a detailed proposal.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        capacity: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const serviceOptions = [
    { value: "stp", label: "Sewage Treatment Plant" },
    { value: "etp", label: "Effluent Treatment Plant" },
    { value: "ro", label: "RO & DM Plants" },
    { value: "cooling", label: "Cooling Tower Systems" },
    { value: "turnkey", label: "Turnkey Solutions" },
    { value: "maintenance", label: "Maintenance Services" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-industrial-900 mb-4">
            Get Professional Consultation
          </h2>
          <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
            Schedule a consultation with our water treatment experts to discuss your specific requirements and get customized solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-industrial-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-industrial-900 mb-6">
                Request Free Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="serviceType">Service Required *</Label>
                  <Select 
                    value={formData.serviceType} 
                    onValueChange={(value) => handleInputChange("serviceType", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="capacity">Treatment Capacity</Label>
                  <Input
                    id="capacity"
                    value={formData.capacity}
                    onChange={(e) => handleInputChange("capacity", e.target.value)}
                    placeholder="e.g., 10 MLD, 5000 LPH"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your project requirements, timeline, and any specific challenges"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={submitMutation.isPending}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {submitMutation.isPending ? "Submitting..." : "Request Consultation"}
                </Button>
                
                <p className="text-sm text-industrial-600 text-center">
                  * Required fields. We'll respond within 24 hours with a detailed proposal.
                </p>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-industrial-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-900 mb-1">Phone Number</h4>
                    <p className="text-industrial-600">+1 956 857 2005</p>
                    <p className="text-sm text-industrial-500">Available 24/7 for emergency support</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary text-white p-3 rounded-lg mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-900 mb-1">Email Address</h4>
                    <p className="text-industrial-600">contact@dlsenvirotech.com</p>
                    <p className="text-sm text-industrial-500">Technical inquiries and project discussions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent text-white p-3 rounded-lg mr-4 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-900 mb-1">Business Hours</h4>
                    <p className="text-industrial-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-industrial-500">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Action Buttons */}
            <Card className="bg-industrial-50">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-industrial-900 mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <Button className="w-full" variant="default">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Site Visit
                  </Button>
                  <Button className="w-full" variant="secondary">
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Headphones className="mr-2 h-5 w-5" />
                    Technical Support
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Service Areas */}
            <div>
              <h4 className="text-xl font-bold text-industrial-900 mb-4">Service Coverage</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span className="text-industrial-600">Pan India Service</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-primary mr-2" />
                  <span className="text-industrial-600">22 Countries</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-primary mr-2" />
                  <span className="text-industrial-600">Express Delivery</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="h-4 w-4 text-primary mr-2" />
                  <span className="text-industrial-600">On-site Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
