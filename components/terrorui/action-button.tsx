import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/terrorui/button";

interface ActionButtonProps extends Omit<ButtonProps, "size" | "children"> {
  icon: React.ReactNode;
  variant?: "blood" | "toxic" | "bone" | "outline-blood" | "outline-toxic" | "ghost-blood";
  size?: "sm" | "md" | "lg";
  circular?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ icon, className, variant = "blood", size = "md", circular = true, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-14 h-14",
    };

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    const iconElement = React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement)
      : icon;

    return (
      <Button
        ref={ref}
        variant={
          variant === "blood"
            ? "blood"
            : variant === "toxic"
            ? "toxic"
            : variant === "bone"
            ? "bone"
            : variant === "outline-blood"
            ? "outline-blood"
            : variant === "outline-toxic"
            ? "outline-toxic"
            : variant === "ghost-blood"
            ? "ghost-blood"
            : "ghost"
        }
        className={cn(
          "p-0",
          circular && "rounded-full",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {iconElement}
      </Button>
    );
  }
);

ActionButton.displayName = "ActionButton";

export { ActionButton };
