/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FFFFFF",
        clay: "#F2600C",
        clover: "#1C6B45",
        marigold: "#E8A317",
        skyblue: "#AFD9E8",
        blush: "#F4D6D6",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
