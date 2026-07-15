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
          DEFAULT: "rgb(var(--theme-primary-rgb) / <alpha-value>)",
          50: "rgb(var(--theme-primary-50-rgb) / <alpha-value>)",
          100: "rgb(var(--theme-primary-100-rgb) / <alpha-value>)",
          200: "rgb(var(--theme-primary-200-rgb) / <alpha-value>)",
          300: "rgb(var(--theme-primary-300-rgb) / <alpha-value>)",
          400: "rgb(var(--theme-primary-400-rgb) / <alpha-value>)",
          500: "rgb(var(--theme-primary-500-rgb) / <alpha-value>)",
          600: "rgb(var(--theme-primary-600-rgb) / <alpha-value>)",
          700: "rgb(var(--theme-primary-700-rgb) / <alpha-value>)",
          800: "rgb(var(--theme-primary-800-rgb) / <alpha-value>)",
          900: "rgb(var(--theme-primary-900-rgb) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--theme-accent-rgb) / <alpha-value>)",
          50: "rgb(var(--theme-accent-50-rgb) / <alpha-value>)",
          100: "rgb(var(--theme-accent-100-rgb) / <alpha-value>)",
          200: "rgb(var(--theme-accent-200-rgb) / <alpha-value>)",
          300: "rgb(var(--theme-accent-300-rgb) / <alpha-value>)",
          400: "rgb(var(--theme-accent-400-rgb) / <alpha-value>)",
          500: "rgb(var(--theme-accent-500-rgb) / <alpha-value>)",
          600: "rgb(var(--theme-accent-600-rgb) / <alpha-value>)",
          700: "rgb(var(--theme-accent-700-rgb) / <alpha-value>)",
          800: "rgb(var(--theme-accent-800-rgb) / <alpha-value>)",
          900: "rgb(var(--theme-accent-900-rgb) / <alpha-value>)",
        },
        ivory: {
          DEFAULT: "rgb(var(--theme-bg-rgb) / <alpha-value>)",
          50: "rgb(var(--theme-bg-50-rgb) / <alpha-value>)",
          100: "rgb(var(--theme-bg-100-rgb) / <alpha-value>)",
          200: "rgb(var(--theme-bg-200-rgb) / <alpha-value>)",
          300: "rgb(var(--theme-bg-300-rgb) / <alpha-value>)",
          400: "rgb(var(--theme-bg-400-rgb) / <alpha-value>)",
          500: "rgb(var(--theme-bg-500-rgb) / <alpha-value>)",
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
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(var(--theme-accent-rgb),0.3)" },
          "50%": { boxShadow: "0 0 20px 6px rgba(var(--theme-accent-rgb),0.5)" },
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
        "gradient-gold":
          "linear-gradient(135deg, rgb(var(--theme-accent-rgb)), rgb(var(--theme-accent-300-rgb)), rgb(var(--theme-accent-rgb)))",
        "gradient-burgundy":
          "linear-gradient(135deg, rgb(var(--theme-primary-rgb)), rgb(var(--theme-primary-400-rgb)), rgb(var(--theme-primary-rgb)))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-shimmer":
          "linear-gradient(90deg, rgb(var(--theme-accent-rgb)) 0%, rgb(var(--theme-accent-300-rgb)) 25%, rgb(var(--theme-accent-rgb)) 50%, rgb(var(--theme-accent-300-rgb)) 75%, rgb(var(--theme-accent-rgb)) 100%)",
        "noise-texture": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(var(--theme-accent-rgb), 0.2)",
        "gold-md": "0 4px 16px rgba(var(--theme-accent-rgb), 0.25)",
        "gold-lg": "0 8px 32px rgba(var(--theme-accent-rgb), 0.3)",
        "burgundy-sm": "0 2px 8px rgba(var(--theme-primary-rgb), 0.15)",
        "burgundy-md": "0 4px 16px rgba(var(--theme-primary-rgb), 0.2)",
        "burgundy-lg": "0 8px 32px rgba(var(--theme-primary-rgb), 0.25)",
        "inner-gold": "inset 0 0 20px rgba(var(--theme-accent-rgb), 0.1)",
        "card-hover": "0 12px 40px rgba(var(--theme-primary-rgb), 0.15)",
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
