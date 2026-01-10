import { tv } from "tailwind-variants";

export const inputStyles = tv({
    slots: {
        input: "bg-background/50 border-border focus:border-blood focus:ring-blood/50 font-typewriter text-foreground placeholder:text-muted-foreground"
    }
})
