module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1570px",
      },
      backgroundPosition: {
        "hero-position": "55%",
      },
      margin: {
        "-half-screen": "-50vw",
      },
      height: {
        heroBg: "550px",
      },
      colors: {
        black: "#403739",
        "bilkov-cviat-hover": "#94DA22",
        "bilkov-dark-press": "#337400",
        "bilkov-prime": "#408000",
        stepper: "#e4f1f9",
        green: "#408000",
        "section-blue": "#F6FBFF",
        "footer-bg": "#e3eef6",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
