import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your interest. We'll get back to you soon.",
        });

        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          company: "", 
          subject: "", 
          serviceType: "", 
          message: "" 
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem submitting your message. Please try again.",
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

  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to discuss your water treatment needs? Contact us today for a
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-name"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-email"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-phone"
                />
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-company"
                />
                <Input
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-subject"
                />
                <Input
                  name="serviceType"
                  placeholder="Service Interest (e.g., STP, ETP, RO)"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="h-10 sm:h-11 text-sm sm:text-base"
                  data-testid="input-service-type"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base min-h-[100px]"
                  data-testid="textarea-message"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 sm:h-11 text-sm sm:text-base text-white"
                  data-testid="button-send"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-testid="contact-phone"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Phone</p>
                  <a
                    href="tel:+919568572005"
                    className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors"
                  >
                    +91 9568572005
                  </a>
                </div>
              </div>
              
              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-testid="contact-whatsapp"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/919568572005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors"
                  >
                    +91 9568572005
                  </a>
                </div>
              </div>
              
              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-testid="contact-email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Email</p>
                  <a
                    href="mailto:info.dlsenvirotech@gmail.com"
                    className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors break-all"
                  >
                    info.dlsenvirotech@gmail.com
                  </a>
                </div>
              </div>
              
              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-testid="contact-address"
              >
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">
                    Address
                  </p>
                  <a
                    href="https://maps.app.goo.gl/WyJmtqb2RpRi7Wrq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors"
                  >
                    F-25, Sector-6, Noida 201301 (U.P.)
                  </a>
                </div>
              </div>
              
              <div className="border-t border-border pt-4 sm:pt-5 mt-4 sm:mt-5">
                <div
                  className="flex items-start space-x-3 sm:space-x-4"
                  data-testid="contact-hours"
                >
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm sm:text-base mb-1">Business Hours</p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-testid="contact-support"
              >
                <Headphones className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Customer Support</p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    24/7 Emergency Support Available
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1">
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
