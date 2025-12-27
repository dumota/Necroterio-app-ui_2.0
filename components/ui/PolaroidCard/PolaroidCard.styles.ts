import { tv } from "tailwind-variants";

export const PolaroidCardStyles = tv({
  slots: {
    container: "bg-neutral-50 lg:w-full w-[200px] lg:h-[300px] h-[250px] p-4 hover:translate-y-2 transition-all duration-300 border-2 border-black cursor-pointer",
    image: "bg-blue-500 w-[200px] lg:h-[150px] h-[100px] object-cover",
    description: "text-red-500 py-4 flex justify-center items-center font-bold lg:text-lg text-sm",

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
    size: {
      sm: {
        container: "w-[200px] h-[250px]",
        image: "w-[200px] h-[100px]",
      },
      md: {
        container: "w-[300px] h-[350px]",
        image: "w-[300px] h-[200px]",
      },
      lg: {
        container: "w-[400px] h-[450px]",
        image: "w-[400px] h-[200px]",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
