import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mb: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    boxShadow: {
      flat: "none",
      raised: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
      overlay:
        "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      sticky: "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      temporary:
        "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)",
      pop: "0px 25px 50px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      zIndex: {
        2: "2",
        9999999: "9999999",
      },
      opacity: {
        "16": "0.16",
        "24": "0.24",
      },
      borderRadius: {
        default: "4px",
      },
      colors: {
        base: {
          light: "#e7e7e7",
          "light-hover": "#dbdbdb",
          "light-active": "#b6b6b6",
          normal: "#121212",
          "normal-hover": "#101010",
          "normal-active": "#0e0e0e",
          dark: "#0e0e0e",
          "dark-hover": "#0b0b0b",
          "dark-active": "#080808",
          darker: "#060606",
        },
        grey: {
          light: "#f1f1f1",
          "light-hover": "#ebebeb",
          "light-active": "#d5d5d5",
          normal: "#777777",
          "normal-hover": "#6b6b6b",
          "normal-active": "#5f5f5f",
          dark: "#595959",
          "dark-hover": "#474747",
          "dark-active": "#363636",
          darker: "#2a2a2a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
