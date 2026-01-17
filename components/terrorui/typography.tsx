import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-horror text-4xl md:text-5xl lg:text-6xl",
      h2: "font-horror text-3xl md:text-4xl lg:text-5xl",
      h3: "font-horror text-2xl md:text-3xl lg:text-4xl",
      h4: "font-horror text-xl md:text-2xl lg:text-3xl",
      h5: "font-horror text-lg md:text-xl lg:text-2xl",
      h6: "font-horror text-base md:text-lg lg:text-xl",
      body: "font-typewriter text-base",
      bodySm: "font-typewriter text-sm",
      bodyLg: "font-typewriter text-lg",
      mono: "font-mono text-base",
    },
    color: {
      default: "text-foreground",
      blood: "text-blood",
      toxic: "text-toxic",
      bone: "text-bone",
      accent: "text-accent",
      muted: "text-muted-foreground",
    },
    effect: {
      none: "",
      drip: "blood-drip",
      flicker: "animate-flicker",
      glow: "drop-shadow-[0_0_10px_hsl(var(--blood))]",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    effect: "none",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, effect, as, ...props }, ref) => {
    const getDefaultAs = (): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" => {
      if (as) return as;
      if (variant === "h1") return "h1";
      if (variant === "h2") return "h2";
      if (variant === "h3") return "h3";
      if (variant === "h4") return "h4";
      if (variant === "h5") return "h5";
      if (variant === "h6") return "h6";
      return "p";
    };

    const Component = getDefaultAs();

    return React.createElement(Component, {
      ref,
      className: cn(typographyVariants({ variant, color, effect }), className),
      ...props,
    });
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
