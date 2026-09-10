import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#A8B89E",
        charcoal: "#2D2D2D",
        "warm-wood": "#D4A574",
      },
    },
  },
  plugins: [],
};
export default config;
