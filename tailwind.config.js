/** @type {import("tailwindcss").Config} */
/*eslint-env node*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-teal": "#003643",
        "teal": "#43cfb5",
        "purple": "#6f35a3",
        "link-blue": "#0000EE"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem"
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"] // Add Nunito Sans
      },
      fontSize: {
        'xxs': ['0.5rem', '0.75rem']
      },
      scale: {
        "102.5": "1.025"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
};

