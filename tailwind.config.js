/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      colors: {
        "light-bg": "#f8fafc",
        "dark-nav": "#334155",
        "night-sky": "#0f172a",
        "deep-cove": "#1e293b",
        "cloud-white": "#e2e8f0",
        "slate-gray": "#64748b",
        "aqua-vibrant": {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "grid-pan": "gridPan 15s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridPan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
