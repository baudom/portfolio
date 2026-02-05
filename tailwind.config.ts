import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1rem" }], // 13px
        sm: ["0.9375rem", { lineHeight: "1.25rem" }], // 15px
        base: ["1.0625rem", { lineHeight: "1.5rem" }], // 17px
        lg: ["1.1875rem", { lineHeight: "1.75rem" }], // 19px
        xl: ["1.3125rem", { lineHeight: "1.75rem" }], // 21px
        "2xl": ["1.5625rem", { lineHeight: "2rem" }], // 25px
        "3xl": ["1.9375rem", { lineHeight: "2.25rem" }], // 31px
        "4xl": ["2.3125rem", { lineHeight: "2.5rem" }], // 37px
        "5xl": ["3.0625rem", { lineHeight: "1" }], // 49px
        "6xl": ["3.8125rem", { lineHeight: "1" }], // 61px
        "7xl": ["4.5625rem", { lineHeight: "1" }], // 73px
        "8xl": ["6.0625rem", { lineHeight: "1" }], // 97px
        "9xl": ["8.0625rem", { lineHeight: "1" }], // 129px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--color-secondary)",
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
      },
      animation: {
        "diagonal-scroll": "diagonal-scroll 20s linear infinite",
      },
      keyframes: {
        "diagonal-scroll": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(33.3333%, -33.3333%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
