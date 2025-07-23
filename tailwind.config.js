/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // <-- this is the fix
  theme: {
    extend: {
      fontFamily : {
        poppins: ["Poppins", "serif"],
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
