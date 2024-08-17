/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
            "default": "#c9c9c9",
            "primary": "#00380e",
            "secondary": "#618c6c",
            "accent": "#f4f5d5",
            "neutral": "#c4c4ad",
            "base-100": "#ffffff",
            "info": "#9d9df2",
            "success": "#d7fcd7",
            "warning": "#f5d8b0",
            "error": "#f5babb",
          },
        },
      ],
    },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

