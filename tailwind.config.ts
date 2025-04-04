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
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            borderColor: {
                DEFAULT: "var(--border-color)",
            },
        },
    },
    plugins: [],
};
export default config;
