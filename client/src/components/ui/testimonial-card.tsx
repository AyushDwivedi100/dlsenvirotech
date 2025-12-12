import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "@/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-muted">
      <CardContent className="p-5 sm:p-6 md:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-base sm:text-lg md:text-xl font-bold flex-shrink-0">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="ml-3 sm:ml-4 min-w-0">
            <h4 className="font-bold text-foreground text-sm sm:text-base truncate">
              {testimonial.name}
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>

        <div className="flex text-yellow-400 mb-3 sm:mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
          ))}
        </div>

        <p className="text-sm sm:text-base text-muted-foreground italic mb-3 sm:mb-4 leading-relaxed">
          "{testimonial.content}"
        </p>

        <div className="text-sm sm:text-base text-primary font-semibold">
          {testimonial.project}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
