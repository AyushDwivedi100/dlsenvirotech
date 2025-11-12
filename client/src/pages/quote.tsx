import { useState } from "react";
import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  SEOHead,
  organizationSchema,
  createBreadcrumbSchema,
} from "@/components/seo/seo-head";

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    capacity: "",
    location: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const response = await fetch("/quote-handler.php", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Submitted!",
          description:
            "Thank you for your request. We'll prepare your quote and get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          capacity: "",
          location: "",
          description: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://dlsenvirotech.com/" },
    { name: "Get Quote", url: "https://dlsenvirotech.com/quote" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema],
  };

  return (
    <>
      <SEOHead
        title="Get Free Quote for Environmental Solutions - Water, Industrial & Waste Systems | DLS Envirotech"
        description="Request FREE quote for environmental technology solutions. Get competitive pricing for water treatment, industrial systems, and waste management. 24-hour response guaranteed! Call ☎️ +91-9568572005 or submit online form now."
        keywords="free quote environmental solutions India, STP sewage treatment plant cost pricing, WWTP wastewater treatment quotation, MBBR moving bed biofilm reactor pricing, FSTP faecal sludge treatment quote, ETP effluent treatment plant cost, WTP water treatment quotation, MBR membrane bioreactor pricing, SBR sequencing batch reactor quote, ZLD zero liquid discharge cost, waste to compost W2C plant pricing, C&D construction demolition waste management quotation, bio-remediation solutions pricing, MGPS medical gas pipeline cost quote hospitals, PSA oxygen plant generator pricing, industrial RO reverse osmosis quotation, cooling tower installation cost, air pollution control equipment pricing, MRF material recovery facility quote, bio-methanation biogas plant cost, turnkey environmental project proposal, tender support documentation, free consultation site visit, 24-hour response, competitive pricing India, CPCB NABL approved contractor quotation, Delhi NCR Mumbai Hyderabad Bengaluru Chennai Kolkata Pune Ahmedabad, DLS Envirotech Noida pricing, call +91-9568572005 quote, international environmental solutions cost"
        canonical="https://dlsenvirotech.com/quote"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-muted">
        <TopBar />
        <Header />

        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Request a Quote
                </h1>
                <p className="text-xl text-muted-foreground">
                  Get a customized solution for your environmental technology needs. Fill
                  out the form below and we'll provide you with a detailed quote
                  within 24 hours.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Service Type *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stp">
                            Sewage Treatment Plant
                          </SelectItem>
                          <SelectItem value="etp">
                            Effluent Treatment Plant
                          </SelectItem>
                          <SelectItem value="wtp">
                            Water Treatment Plant
                          </SelectItem>
                          <SelectItem value="industrial-ro">
                            Industrial RO Plant
                          </SelectItem>
                          <SelectItem value="cooling-tower">
                            Water Cooling Tower
                          </SelectItem>
                          <SelectItem value="fstp">
                            Faecal Sludge Treatment Plant
                          </SelectItem>
                          <SelectItem value="mrf">
                            Material Recovery Facility
                          </SelectItem>
                          <SelectItem value="swmp">
                            Solid Waste Management Plant
                          </SelectItem>
                          <SelectItem value="oxygen-plant">
                            PSA Oxygen Plant
                          </SelectItem>
                          <SelectItem value="air-pollution">
                            Industrial Air Pollution Solutions
                          </SelectItem>
                          <SelectItem value="air-tower">
                            Air Tower
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance Services
                          </SelectItem>
                          <SelectItem value="consultation">
                            Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        name="capacity"
                        placeholder="Required Capacity (e.g., 10,000 L/day)"
                        value={formData.capacity}
                        onChange={handleChange}
                      />
                    </div>

                    <Input
                      name="location"
                      placeholder="Project Location"
                      value={formData.location}
                      onChange={handleChange}
                    />

                    <Textarea
                      name="description"
                      placeholder="Project Description - Please provide details about your requirements, current challenges, and any specific needs..."
                      rows={6}
                      value={formData.description}
                      onChange={handleChange}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="text-white w-full"
                    >
                      {isSubmitting ? "Submitting..." : "Request Quote"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
