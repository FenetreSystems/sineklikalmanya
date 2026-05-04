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
        primary: "#83bd81",
        secondary: "#404e5e",
      },
    },
  },
  plugins: [],
  // CSS optimizasyonu
  corePlugins: {
    preflight: true,
  },
};

export default config;
