/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:['Poppins' , 'sans-serif']
    },
    gridTemplateColumns:{
      '70/30':'70% 28%',

    }
  },
  plugins: [],
};
