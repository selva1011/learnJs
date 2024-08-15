import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: "#525866",          // theme-accent-salt-bolder
        c2: "#9d70f8",          // theme-accent-onion-subtlest
        c3: "#8d62f4",          // theme-accent-onion-subtler
        c4: "#8055f0",          // theme-accent-onion-subtle
        c5: "#7147ed",          // theme-accent-onion-default
        c6: "#5f37e9",          // theme-accent-onion-bolder
        c7: "#68a6fc",          // theme-accent-water-subtlest
        c8: "#5c9bfa",          // theme-accent-water-subtler
        c9: "#508cf9",          // theme-accent-water-subtle
        c10: "#427ef7",         // theme-accent-water-default
        c11: "#3169f5",         // theme-accent-water-bolder
        c12: "#0e1217",         // theme-accent-pepper-baseline
        c13: "#17191f",         // theme-accent-pepper-subtlest
        c14: "#2d313a",         // theme-accent-pepper-subtler
        c15: "#404551",         // theme-accent-pepper-subtle
        c16: "#525866",         // theme-accent-pepper-default
        c17: "#a8b3cf",         // theme-accent-pepper-bolder
        c18: "#dbfe6c",         // theme-accent-lettuce-subtlest
        c19: "#ccfb5b",         // theme-accent-lettuce-subtler
        c20: "#bdf849",         // theme-accent-lettuce-subtle
        c21: "#acf535",         // theme-accent-lettuce-default
        c22: "#92f21d",         // theme-accent-lettuce-bolder
        c23: "#ffb760",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  plugins: [],
};
export default config;
