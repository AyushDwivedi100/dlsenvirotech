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
import { mockApi } from "@/lib/mockApi";

export default function Quote() {
  const { toast } = useToast();
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

    try {
      await mockApi.createQuote(formData);

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
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
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

  return (
    <>
      <Helmet>
        <title>Get Quote - DLS Envirotech Corporation</title>
        <meta
          name="description"
          content="Request a customized quote for your water treatment solution. Fast turnaround, competitive pricing."
        />
      </Helmet>

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
                      className="text-white w-full"
                    >
                      Request Quote
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
