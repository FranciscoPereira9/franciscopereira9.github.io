import type { Config } from "tailwindcss";
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121e1a',
        primary: {
          DEFAULT: '#ff9800',  // Default orange
          light: '#ffa726',    // Lighter shade for hover or other use
          dark: '#fb8c00',     // Darker shade for focus/active
        }, // <-- Missing closing bracket added here
      },
      boxShadow: {
        zoop: "rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px",
        zoopdark:
          "rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px",
      }
    },
    fontFamily: {
      sans: [
        "JetBrains Mono",
        "Inter",
        "Avenir Next",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Ubuntu",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        "Cascadia Code",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
