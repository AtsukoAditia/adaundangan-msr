import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delay": "float 4s ease-in-out infinite 1s",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "fade-slide-in": "fadeSlideIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "drop-in": "dropIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
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
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 20px 6px rgba(212,175,55,0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.12)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.08)" },
          "70%": { transform: "scale(1)" },
        },
        dropIn: {
          "0%": { opacity: "0", transform: "translateY(-30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #D4AF37, #F0D78C, #D4AF37)",
        "gradient-burgundy": "linear-gradient(135deg, #7B1D2A, #9B202F, #7B1D2A)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-shimmer":
          "linear-gradient(90deg, #D4AF37 0%, #F0D78C 25%, #D4AF37 50%, #F0D78C 75%, #D4AF37 100%)",
        "noise-texture": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(212,175,55,0.2)",
        "gold-md": "0 4px 16px rgba(212,175,55,0.25)",
        "gold-lg": "0 8px 32px rgba(212,175,55,0.3)",
        "burgundy-sm": "0 2px 8px rgba(123,29,42,0.15)",
        "burgundy-md": "0 4px 16px rgba(123,29,42,0.2)",
        "burgundy-lg": "0 8px 32px rgba(123,29,42,0.25)",
        "inner-gold": "inset 0 0 20px rgba(212,175,55,0.1)",
        "card-hover": "0 12px 40px rgba(123,29,42,0.15)",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.34,1.56,0.64,1)",
        "smooth-out": "cubic-bezier(0.22,1,0.36,1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
