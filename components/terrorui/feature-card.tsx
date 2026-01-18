import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  description: string;
  showGlitch?: boolean;
  showBloodDrip?: boolean;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ image, title, description, className, showGlitch = true, showBloodDrip = true, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative bg-card border border-border hover:border-blood transition-all duration-500 overflow-hidden w-full",
          className
        )}
        {...rest}
      >
        {/* Image */}
        <div className="relative h-48 md:h-64 w-full shrink-0 overflow-hidden">
          {image && (
          <Image
            width={100}
            height={100}
            src={image}
            alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Glitch overlay on hover */}
          {showGlitch && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 static-bg opacity-20" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3
            className={cn(
              "font-horror text-xl md:text-2xl text-toxic mb-2 md:mb-3",
              showBloodDrip && "group-hover:animate-flicker"
            )}
          >
            {title}
          </h3>
          <p className="font-typewriter text-muted-foreground text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Blood drip on hover */}
        {showBloodDrip && (
          <div className="absolute top-0 left-4 w-1 h-0 bg-blood group-hover:h-full transition-all duration-1000 rounded-b-full" />
        )}
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
