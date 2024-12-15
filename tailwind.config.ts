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
        primary: {
          darkCyan: "hsl(185, 75%, 39%)",
          veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
          darkGrayishBlue: "hsl(227, 10%, 46%)",
        },
        second: {
          darkGray: "hsl(0, 0%, 59%)",
        },
      },
      backgroundImage: {
        card: "url('/images/bg-pattern-card.svg')",
        "pattern-top": "url('/images/bg-pattern-top.svg')",
        "pattern-bottom": "url('/images/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
