/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "jetbrains-mono": "JetBrains Mono Variable, monospace, sans-serif",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "hool-turquoise": {
          100: "hsl(var(--hool-turquoise-100))",
          200: "hsl(var(--hool-turquoise-200))",
          300: "hsl(var(--hool-turquoise-300))",
          400: "hsl(var(--hool-turquoise-400))",
          500: "hsl(var(--hool-turquoise-500))",
        },
        "hool-red": {
          100: "hsl(var(--hool-red-100))",
          200: "hsl(var(--hool-red-200))",
          300: "hsl(var(--hool-red-300))",
          400: "hsl(var(--hool-red-400))",
          500: "hsl(var(--hool-red-500))",
        },
        "hool-pink": {
          100: "hsl(var(--hool-pink-100))",
          200: "hsl(var(--hool-pink-200))",
          300: "hsl(var(--hool-pink-300))",
          400: "hsl(var(--hool-pink-400))",
          500: "hsl(var(--hool-pink-500))",
        },
        "hool-white": {
          100: "hsl(var(--hool-white-100))",
          200: "hsl(var(--hool-white-200))",
          300: "hsl(var(--hool-white-300))",
        },
        "hool-grey": "hsl(var(--hool-grey))",
        "hool-grey-light": "hsl(var(--hool-grey-light))",
        "hool-text": "hsl(var(--hool-text))",
        "hool-text-emphasis": "hsl(var(--hool-text-emphasis))",
        // dark mode
        "ak-black": {
          100: "hsl(var(--ak-black-100))",
          200: "hsl(var(--ak-black-200))",
          300: "hsl(var(--ak-black-300))",
          400: "hsl(var(--ak-black-400))",
          500: "hsl(var(--ak-black-500))",
        },
        "ak-blue": "hsl(var(--ak-blue))",
        "ak-blue-two": "hsl(var(--ak-blue-two))",
        "ak-yellow": "hsl(var(--ak-yellow))",
        "ak-pink": "hsl(var(--ak-pink))",
        "ak-orange": "hsl(var(--ak-orange))",

        // shadcn below
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
};
