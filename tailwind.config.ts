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
        cream: "#F2EDE4",
        ink: "#111111",
        rust: "#B8390E",
        sand: "#D9C9B0",
        mist: "#E8E2D9",
      },
      divideOpacity: { 8: '0.08' },
    },
  },
  plugins: [],
};
export default config;
