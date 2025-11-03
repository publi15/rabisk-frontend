/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // CORES BASE
      colors: {
        // FUNDOS
        "dark-bg": "#1f1f1f",
        "dark-panel": "#2d2d2d",

        // ACENTOS
        "accent-cyan": "#00bcd4",
        "accent-purple": "#9c27b0",
        "accent-green": "#4caf50",
        "accent-magenta": "#e91e63",
        "accent-orange": "#ff9800",
        "accent-brown": "#795548",

        // TEXTOS
        "text-primary": "#ffffff",
        "text-secondary": "#b0b0b0",
        "text-muted": "#6b7280",
      },

      // TIPOGRAFIA PRONTA
      fontSize: {
        hero: "3.5rem",
        section: "2.5rem",
        card: "1.25rem",
      },

      // BORDAS PRONTAS
      borderWidth: {
        3: "3px",
      },
      borderColor: {
        green: "#4caf50",
        purple: "#9c27b0",
        cyan: "#00bcd4",
        magenta: "#e91e63",
      },

      // ESPAÇAMENTO PRONTO
      spacing: {
        18: "4.5rem",
        128: "32rem",
      },

      // BOTÕES PRONTOS
      backgroundColor: {
        "btn-green": "#4caf50",
        "btn-purple": "#9c27b0",
        "btn-cyan": "#00bcd4",
        "btn-magenta": "#e91e63",
        "btn-outline-green": "transparent",
      },

      // GRADIENTES PRONTOS
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #00bcd4 0%, #9c27b0 100%)",
        "features-gradient":
          "linear-gradient(135deg, #4caf50 0%, #e91e63 100%)",
      },
    },
  },

  // CLASSES PRONTAS PARA USAR NO RETURN
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // BOTÕES PRONTOS
        ".btn": {
          "@apply px-6 py-3 rounded-lg font-semibold transition-all inline-block":
            {},
        },
        ".btn-green": {
          "@apply bg-accent-green text-white hover:bg-green-600": {},
        },
        ".btn-purple": {
          "@apply bg-accent-purple text-white hover:bg-purple-700": {},
        },
        ".btn-cyan": {
          "@apply bg-accent-cyan text-white hover:bg-cyan-600": {},
        },
        ".btn-magenta": {
          "@apply bg-accent-magenta text-white hover:bg-pink-600": {},
        },
        ".btn-outline": {
          "@apply border-2 border-accent-cyan text-accent-cyan bg-transparent hover:bg-accent-cyan hover:text-white":
            {},
        },

        // CARDS PRONTOS
        ".card": {
          "@apply bg-dark-panel p-6 rounded-lg": {},
        },
        ".card-testimonial": {
          "@apply bg-dark-bg p-6 rounded-lg": {},
        },

        // TITULOS PRONTOS
        ".title-hero": {
          "@apply text-hero font-bold text-center text-accent-cyan mb-6": {},
        },
        ".title-section": {
          "@apply text-section font-bold text-center mb-12 text-accent-cyan":
            {},
        },
        ".title-card": {
          "@apply text-card font-bold mb-4": {},
        },

        // TEXTOS PRONTOS
        ".text-primary": {
          "@apply text-text-primary": {},
        },
        ".text-secondary": {
          "@apply text-text-secondary": {},
        },
        ".text-muted": {
          "@apply text-text-muted": {},
        },

        // BORDAS PRONTAS
        ".border-green": {
          "@apply border-2 border-accent-green": {},
        },
        ".border-purple": {
          "@apply border-2 border-accent-purple": {},
        },
        ".border-cyan": {
          "@apply border-2 border-accent-cyan": {},
        },
      });
    },
  ],
};
