import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { mockApi } from "@/lib/mockApi";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mockApi.createConsultation(formData);

      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to discuss your water treatment needs? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-name"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-email"
                />
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-company"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base min-h-[100px]"
                  data-testid="textarea-message"
                />
                <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base" data-testid="button-send">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4" data-testid="contact-phone">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Phone</p>
                  <a href="tel:+919568572005" className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors">
                    +919568572005
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4" data-testid="contact-email">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Email</p>
                  <a href="mailto:info.dlsenvirotech@gmail.com" className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors break-all">
                    info.dlsenvirotech@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4" data-testid="contact-address">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Address</p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    F-25, Sector-6, Noida 201301 (U.P.)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}