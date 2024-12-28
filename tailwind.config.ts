import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "#636270",
        bgFillColor: "#F0F2F3",
        topBarColor: "#272343",
        buttonGreen: "#029FAE",
        bgGreen: "#007580",
        bgGrayShade: "#F9F9F9",
        bgGrayShade2: "#F7F7F7",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
],
} satisfies Config;
