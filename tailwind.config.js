/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: true,
  },
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1890ff",
        black: "#000000",
        "dark-color": "#0f172a",
        "dark-second-color": "#1e293b",
        "dark-text-color": "#94a3b8",
        "dark-text-second-color": "#ffffff",
      },
    },
  },
  plugins: [],
};
