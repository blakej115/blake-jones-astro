import clamp from "./src/lib/clamp";
import gridSafelist from "./src/lib/hover-grid";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [...gridSafelist, "animation-spin"],
  theme: {
    fontFamily: {
      sans: ["Figtree Variable", "sans-serif"],
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      blue: {
        DEFAULT: "#00b2ff",
        dark: "#3e566f",
      },
    },
    extend: {
      fontSize: {
        body: [
          clamp(16, 20),
          {
            lineHeight: "initial",
          },
        ],
        tagline: clamp(22, 44),
      },
      spacing: {
        "social-icon": clamp(26, 40),
        "social-icons": clamp(16, 32),
        main: clamp(32, 64),
      },
      rotate: {
        360: "360deg",
      },
      scale: {
        115: "1.15",
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0, 0.5, 0.5, 1)",
      },
      keyframes: {
        logo: {
          "0%": {
            transform: "translateY(96.5%)",
          },
          "25%": {
            transform: "translateY(0)",
          },
        },
        tagline: {
          "0%, 25%": {
            opacity: "0",
            visibility: "hidden",
            transform: "scale(0)",
          },
          "50%": {
            opacity: "1",
            visibility: "visible",
            transform: "scale(1)",
          },
        },
        "social-icons": {
          "0%, 50%": {
            opacity: "0",
            visibility: "hidden",
            transform: "scale(0)",
          },
          "75%": {
            opacity: "1",
            visibility: "visible",
            transform: "scale(1)",
          },
        },
        footer: {
          "0%, 75%": {
            opacity: "0",
            visibility: "hidden",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            visibility: "visible",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        logo: "logo 2s linear",
        tagline: "tagline 2s linear",
        "social-icons": "social-icons 2s linear",
        footer: "footer 2s linear",
      },
    },
  },
  plugins: [],
};
