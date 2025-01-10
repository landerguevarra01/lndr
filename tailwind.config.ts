import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-teal-light": "#59C3AA", 
        "custom-teal-dark": "#015A48", 
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #59C3AA, #015A48)",
      },
    },
  },
  plugins: [],
} satisfies Config;
