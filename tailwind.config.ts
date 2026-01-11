import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        blood: {
          50: "hsl(var(--blood-50))",
          100: "hsl(var(--blood-100))",
          200: "hsl(var(--blood-200))",
          300: "hsl(var(--blood-300))",
          400: "hsl(var(--blood-400))",
          500: "hsl(var(--blood-500))",
          600: "hsl(var(--blood-600))",
          700: "hsl(var(--blood-700))",
          800: "hsl(var(--blood-800))",
          900: "hsl(var(--blood-900))",
        },

        toxic: {
          50: "hsl(var(--toxic-50))",
          100: "hsl(var(--toxic-100))",
          200: "hsl(var(--toxic-200))",
          300: "hsl(var(--toxic-300))",
          400: "hsl(var(--toxic-400))",
          500: "hsl(var(--toxic-500))",
          600: "hsl(var(--toxic-600))",
          700: "hsl(var(--toxic-700))",
          800: "hsl(var(--toxic-800))",
          900: "hsl(var(--toxic-900))",
        },

        bone: {
          50: "hsl(var(--bone-50))",
          100: "hsl(var(--bone-100))",
          200: "hsl(var(--bone-200))",
          300: "hsl(var(--bone-300))",
          400: "hsl(var(--bone-400))",
          500: "hsl(var(--bone-500))",
          600: "hsl(var(--bone-600))",
          700: "hsl(var(--bone-700))",
          800: "hsl(var(--bone-800))",
          900: "hsl(var(--bone-900))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
