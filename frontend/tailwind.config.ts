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
        academy: "#1A3254",
        aAcademy: "#1A325480",
        lightAcademy: "#A9D0D5",
        lightaAcademy: "#A9D0D580",
      },
      boxShadow: {
        custom: "0px 4px 10px 5px #0000000D",
      },
      fontFamily: {
        mycustom: ["MyCustomFont", "sans-serif"], // فونت جدید اضافه شده به پیکربندی
      },
    },
  },
  plugins: [],
} satisfies Config;
