import gridSafelist from "./src/lib/hover-grid";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [...gridSafelist],
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
        dark: "#253a4f",
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: "400ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0, 0.5, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
