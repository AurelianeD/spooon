/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'darkBlue': '#1B73C2',
      'lightBlue': '#7ACDE5',
      'white': '#FFF',
      'gray': '#ECECEC',
      'yellow': '#E5DA7A',
      'orange': '#E9B705',
    },
    fontFamily: {
      'custom': ['abeezee', 'inter', 'sans-serif'],
      'sans': ['inter', 'sans-serif'],
    }
  },
  plugins: [],
}

