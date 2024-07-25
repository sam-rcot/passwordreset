/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'dark-teal': '#003643',
            'teal': '#43cfb5',
            'purple': '#6f35a3',
        },

        fontFamily: {
            nunito: ['Nunito Sans', 'sans-serif'], // Add Nunito Sans
        },
        scale: {
            '102.5': '1.025',
        },
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}

