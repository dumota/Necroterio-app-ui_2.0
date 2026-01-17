import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/terrorui/card";

interface VHSCardProps extends React.ComponentProps<typeof Card> {
  variant?: "default" | "recording" | "glitch" | "static";
  showRecIndicator?: boolean;
}

const VHSCard = React.forwardRef<HTMLDivElement, VHSCardProps>(
  ({ variant = "default", showRecIndicator = false, className, children, ...rest }, ref) => {
    const shouldShowRec = variant === "recording" || showRecIndicator;
    
    return (
      <Card
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-card/80 border-blood/50 shadow-blood",
          variant === "glitch" && "animate-glitch",
          variant === "static" && "static-bg",
          className
        )}
        {...rest}
      >
        {/* REC indicator */}
        {shouldShowRec && (
          <div className="absolute top-2 right-2 flex items-center gap-1 font-typewriter text-xs text-toxic z-10">
            <span className="w-2 h-2 bg-blood rounded-full animate-pulse" />
            REC
          </div>
        )}

        {/* VHS scan lines overlay */}
        <div className="absolute inset-0 vhs-lines opacity-20 pointer-events-none" />

        {/* Grain overlay */}
        <div className="absolute inset-0 grain opacity-10 pointer-events-none" />

        {/* Content wrapper */}
        <div className="relative z-10">
          {children}
        </div>

        {/* VHS distortion effect on hover */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 static-bg opacity-30" />
          <div className="absolute top-1/3 left-0 right-0 h-4 bg-blood/20 animate-pulse" />
        </div>
      </Card>
    );
  }
);

VHSCard.displayName = "VHSCard";

// Export composable parts
const VHSCardHeader = CardHeader;
const VHSCardTitle = CardTitle;
const VHSCardDescription = CardDescription;
const VHSCardContent = CardContent;
const VHSCardFooter = CardFooter;

export {
  VHSCard,
  VHSCardHeader,
  VHSCardTitle,
  VHSCardDescription,
  VHSCardContent,
  VHSCardFooter,
};
