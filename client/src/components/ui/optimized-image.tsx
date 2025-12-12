import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  testId?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  loading = "lazy",
  priority = false,
  testId,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 animate-pulse"
          style={{ backdropFilter: "blur(20px)" }}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchpriority={priority ? "high" : "auto"}
        className={cn(
          "w-full h-auto transition-all duration-700 ease-out",
          isLoaded
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-sm scale-105",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        data-testid={testId}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p className="text-muted-foreground text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  );
};
