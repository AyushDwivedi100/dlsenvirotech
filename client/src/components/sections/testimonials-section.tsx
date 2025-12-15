import { useState, useEffect, useCallback } from "react";
import TestimonialCard from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalTestimonials = TESTIMONIALS.length;
  const visibleCount = 3;
  const maxIndex = totalTestimonials - visibleCount;

  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const nextSlide = useCallback(() => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, maxIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying || !canGoNext) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, canGoNext, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      if (currentIndex + i < totalTestimonials) {
        indices.push(currentIndex + i);
      }
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Client Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Hear from industry leaders who trust DLS Envirotech for their
            critical water treatment infrastructure
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / totalTestimonials}%)`,
                width: `${(totalTestimonials * 100) / visibleCount}%`,
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-3 md:px-4"
                  style={{
                    width: `${100 / totalTestimonials}%`,
                    flexShrink: 0,
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={!canGoPrev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    visibleIndices.includes(index)
                      ? "bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  } ${index === currentIndex ? "w-6" : ""}`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={!canGoNext}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
