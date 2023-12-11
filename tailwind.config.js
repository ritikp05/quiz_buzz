/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
        Pacifico: ["Pacifico", "cursive", "Tourney", "sans-serif"],
        Playpen: ["Playpen Sans", "cursive"],
        LoveYa: ["Love Ya Like A Sister", "cursive"],
      },
    },
  },
  plugins: [],
};
