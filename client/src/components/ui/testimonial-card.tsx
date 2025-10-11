import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "@/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
            {testimonial.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
            <p className="text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
          </div>
        </div>
        
        <div className="flex text-yellow-400 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        
        <p className="text-muted-foreground italic mb-4 leading-relaxed">
          "{testimonial.content}"
        </p>
        
        <div className="text-primary font-semibold">
          {testimonial.project}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
