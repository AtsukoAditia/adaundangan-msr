import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#7B1D2A",
          50: "#f9e9eb",
          100: "#f0c5cb",
          200: "#e79aa4",
          300: "#d96e7c",
          400: "#cc4a5a",
          500: "#7B1D2A",
          600: "#6a1924",
          700: "#59141e",
          800: "#480f18",
          900: "#370b12",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fdf8e8",
          100: "#f9eebf",
          200: "#f5e293",
          300: "#f0d567",
          400: "#ebc93e",
          500: "#D4AF37",
          600: "#b8952f",
          700: "#9b7b27",
          800: "#7f621f",
          900: "#624917",
        },
        ivory: {
          DEFAULT: "#FFFDF7",
          50: "#FFFDF7",
          100: "#fefbee",
          200: "#fdf7e0",
          300: "#fcf3d2",
          400: "#fbefbf",
          500: "#f9e8a0",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
