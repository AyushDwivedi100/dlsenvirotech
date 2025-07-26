import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock, CheckCircle, Calculator, FileText, Users } from "lucide-react";

const quoteFormSchema = z.object({
  // Contact Information
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  
  // Project Details
  projectType: z.string().min(1, "Please select a project type"),
  capacity: z.string().min(1, "Please specify the capacity"),
  location: z.string().min(2, "Please enter the project location"),
  timeline: z.string().min(1, "Please select a timeline"),
  
  // Requirements
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().min(10, "Please provide project description (minimum 10 characters)"),
  
  // Additional
  hasPermits: z.boolean().default(false),
  needsConsultation: z.boolean().default(false),
  urgentProject: z.boolean().default(false),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const Quote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      capacity: "",
      location: "",
      timeline: "",
      services: [],
      budget: "",
      description: "",
      hasPermits: false,
      needsConsultation: false,
      urgentProject: false,
    },
  });

  const submitQuoteMutation = useMutation({
    mutationFn: (data: QuoteFormData) => apiRequest('/api/quotes', 'POST', data),
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours with a detailed quote.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    submitQuoteMutation.mutate(data);
  };

  const projectTypes = [
    "Sewage Treatment Plant (STP)",
    "Effluent Treatment Plant (ETP)",
    "Water Treatment Plant (WTP)",
    "Reverse Osmosis (RO) Plant",
    "Cooling Tower System",
    "Bio-gas Plant",
    "Chemical Processing Plant",
    "Turnkey Project",
    "Other"
  ];

  const serviceOptions = [
    "Design & Engineering",
    "Installation & Commissioning",
    "Operation & Maintenance",
    "Upgradation & Retrofitting",
    "Consultation Services",
    "Training & Support",
    "Annual Maintenance Contract",
    "Emergency Services"
  ];

  const budgetRanges = [
    "Under ₹10 Lakh",
    "₹10 Lakh - ₹50 Lakh",
    "₹50 Lakh - ₹1 Crore",
    "₹1 Crore - ₹5 Crore",
    "₹5 Crore - ₹10 Crore",
    "Above ₹10 Crore",
    "Prefer not to disclose"
  ];

  const timelineOptions = [
    "Immediate (Within 1 month)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)",
    "Planning phase"
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Quote Submitted Successfully | DLS Envirotech</title>
          <meta name="description" content="Your quote request has been successfully submitted. Our team will contact you soon with a detailed proposal." />
        </Helmet>
        
        <div className="min-h-screen bg-white">
          <Header />
          <main className="py-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-industrial-900 mb-6">
                Quote Request Submitted!
              </h1>
              <p className="text-lg text-industrial-600 mb-8">
                Thank you for choosing DLS Envirotech Corporation. Our technical team will review 
                your requirements and contact you within 24 hours with a detailed quote and project proposal.
              </p>
              <div className="bg-industrial-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-industrial-900 mb-4">What happens next?</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Technical review of your requirements (2-4 hours)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Detailed quote preparation with specifications (12-24 hours)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personal consultation call to discuss your project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Site visit arrangement (if required)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setIsSubmitted(false)}>
                  Submit Another Quote
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </div>
          </main>
          <Footer />
          <ChatbotWidget />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Get Quote - Water Treatment Solutions | DLS Envirotech</title>
        <meta name="description" content="Get a detailed quote for your water treatment project. Professional STP, ETP, RO plant design and installation services with competitive pricing." />
        <meta name="keywords" content="water treatment quote, STP cost, ETP pricing, RO plant quote, sewage treatment cost estimate" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-industrial-50 to-industrial-100 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Calculator className="h-12 w-12 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-industrial-900 mb-6">
                Get Your Project Quote
              </h1>
              <p className="text-xl text-industrial-600 mb-8">
                Receive a detailed, customized quote for your water treatment project. 
                Our experts will review your requirements and provide competitive pricing within 24 hours.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">24 Hour Response</div>
                </div>
                <div className="text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Detailed Proposal</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Expert Consultation</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quote Form */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company/Organization *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>

                  {/* Project Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Project Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {projectTypes.map((type) => (
                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="capacity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Capacity/Flow Rate *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 10 MLD, 1000 LPH, 500 KLD" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Location *</FormLabel>
                              <FormControl>
                                <Input placeholder="City, State, Country" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timelineOptions.map((option) => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Services & Budget */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5" />
                        Services & Budget
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <FormLabel>Required Services * (Select all that apply)</FormLabel>
                            <div className="grid md:grid-cols-2 gap-3">
                              {serviceOptions.map((service) => (
                                <FormField
                                  key={service}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => {
                                    return (
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(service)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, service])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== service
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {service}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>

                  {/* Project Description */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Description & Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Detailed Project Description *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide detailed information about your project requirements, including specific challenges, existing infrastructure, regulatory requirements, and any special considerations..."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="space-y-3">
                        <FormField
                          control={form.control}
                          name="hasPermits"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Environmental permits and approvals are already obtained
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="needsConsultation"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                I would like to schedule a consultation call before receiving the quote
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="urgentProject"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                This is an urgent project requiring immediate attention
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="px-12"
                      disabled={submitQuoteMutation.isPending}
                    >
                      {submitQuoteMutation.isPending ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                    <p className="text-sm text-industrial-600 mt-4">
                      By submitting this form, you agree to our terms of service and privacy policy. 
                      We'll contact you within 24 hours with a detailed quote.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 bg-industrial-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-industrial-900 mb-8">
                Need Immediate Assistance?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-industrial-900 mb-2">Call Us</h3>
                  <p className="text-industrial-600">+91 98765 43210</p>
                  <p className="text-sm text-industrial-500">Mon-Sat 9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-industrial-900 mb-2">Email Us</h3>
                  <p className="text-industrial-600">quotes@dlsenvirotech.com</p>
                  <p className="text-sm text-industrial-500">24/7 Email Support</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-industrial-900 mb-2">Visit Us</h3>
                  <p className="text-industrial-600">Head Office</p>
                  <p className="text-sm text-industrial-500">Schedule an appointment</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </>
  );
};

export default Quote;