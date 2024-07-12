/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-primary": "#0b701c",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
