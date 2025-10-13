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
    timeline: "",
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

      const response = await fetch('/quote-handler.php', {
        method: 'POST',
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
          timeline: "",
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
        title="Get Free Quote for Water Treatment - STP, ETP Plants | DLS Envirotech"
        description="Request FREE quote for water treatment solutions. Get competitive pricing for STP, ETP, RO plants & industrial wastewater systems. 24-hour response guaranteed! Call ☎️ +91-9568572005 or submit online form now."
        keywords="water treatment quote India, STP plant cost, ETP price estimate, water treatment pricing, sewage plant quote, industrial water treatment cost, RO plant quotation India, free water treatment consultation"
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
                  Get a customized solution for your water treatment needs. Fill
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="location"
                        placeholder="Project Location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("timeline", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Project Timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">
                            Immediate (1-2 weeks)
                          </SelectItem>
                          <SelectItem value="short">
                            Short-term (1-3 months)
                          </SelectItem>
                          <SelectItem value="medium">
                            Medium-term (3-6 months)
                          </SelectItem>
                          <SelectItem value="long">
                            Long-term (6+ months)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

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
