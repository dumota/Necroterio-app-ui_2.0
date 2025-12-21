import { tv } from "tailwind-variants";

export const PolaroidCardStyles = tv({
  slots: {
    container: "bg-neutral-50 w-full h-[300px] p-4 hover:translate-y-2 transition-all duration-300 border-2 border-black cursor-pointer",
    image: "bg-blue-500 w-[200px] h-[150px] object-cover",
    description: "text-red-500 py-4 flex justify-center items-center font-bold text-lg",

  },
  variants: {
    variant: {
      default: {
        container: "",
      },
      secondary: {
        container: "",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
