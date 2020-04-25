module.exports = {
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        hero: "540px",
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
        "-20": "-20",
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: {
          hero: "#004D4Cdd",
          900: "#004D4C",
          800: "#0F5757",
          700: "#1F7A76",
          600: "#309C97",
          500: "#45ADA8",
          400: "#5BBEB9",
          300: "#70DBD6",
          200: "#86EAE5",
          100: "#B3EFED",
          50: "#D4F7F6",
        },
        secondary: {
          900: "#8E2C0B",
          800: "#B54E12",
          700: "#CA6D16",
          600: "#DD901D",
          500: "#F0B428",
          400: "#F7C94A",
          300: "#FADB61",
          200: "#FCE588",
          100: "#FFF3C2",
          50: "#FFFBEB",
        },
      },
    },
    fontFamily: {
      display: ["Alegreya SC", "serif"],
      body: ["Cabin", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/ui")],
  variants: { borderWidth: ["last"] },
}
