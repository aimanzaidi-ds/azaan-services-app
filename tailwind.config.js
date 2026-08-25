/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12182B",
          text: "#1B2333",
        },
        paper: "#F6F4EF",
        brass: {
          DEFAULT: "#A9863A",
          light: "#C4A45E",
          dark: "#8A6C2C",
        },
        slate: {
          DEFAULT: "#6B7280",
        },
        verified: "#1F5C52",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,24,43,0.04), 0 8px 24px -12px rgba(18,24,43,0.12)",
        cardHover: "0 1px 2px rgba(18,24,43,0.06), 0 16px 32px -12px rgba(18,24,43,0.18)",
      },
      borderRadius: {
        card: "0.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
