import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {
        "purple-heart": {
          DEFAULT: "#442CD1",
          50: "#C9C2F2",
          100: "#BAB2EF",
          200: "#9D90E8",
          300: "#7F6EE0",
          400: "#614CD9",
          500: "#442CD1",
          600: "#3522A3",
          700: "#261874",
          800: "#170F46",
          900: "#080518",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
