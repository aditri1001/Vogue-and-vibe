/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      screens: {
        'xs': '390px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
