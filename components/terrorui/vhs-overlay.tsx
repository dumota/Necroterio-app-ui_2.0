import * as React from "react";

interface VHSOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "low" | "medium" | "high";
}

const VHSOverlay = React.forwardRef<HTMLDivElement, VHSOverlayProps>(
  ({ intensity = "medium", className, ...rest }, ref) => {
    const opacityMap = {
      low: 20,
      medium: 30,
      high: 40,
    };

    return (
      <div
        ref={ref}
        className={`fixed inset-0 pointer-events-none z-40 overflow-hidden ${className ?? ""}`}
        {...rest}
      >
        {/* Scan lines */}
        <div className={`absolute inset-0 vhs-lines opacity-[${opacityMap[intensity]}]`} />
        
        {/* Grain effect */}
        <div className={`absolute inset-0 grain opacity-${intensity === "high" ? 30 : 20}`} />
        
        {/* Occasional glitch bars */}
        <div 
          className="absolute left-0 right-0 h-2 bg-toxic/20"
          style={{
            top: '30%',
            animation: 'glitch 8s infinite',
          }}
        />
        <div 
          className="absolute left-0 right-0 h-1 bg-blood/30"
          style={{
            top: '70%',
            animation: 'glitch 6s infinite 2s',
          }}
        />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </div>
    );
  }
);

VHSOverlay.displayName = "VHSOverlay";

export { VHSOverlay };
