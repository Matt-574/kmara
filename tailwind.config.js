/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#ffffff',
      },
      colors: {
        primary: "#093a61",
        secondary: "#587e97",
        'dark-primary': '#0D0D0D',
        'dark-secondary': '#1A1A1A',
        'dark-background': '#000000',
        'dark-text': '#F3F3F3',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
