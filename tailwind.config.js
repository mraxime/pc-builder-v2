module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-darkest': '#2E3655',
        'gray-dark': '#333E61',
        'gray-medium': '#4E5F95',
        'gray-light': '#616E97',
        'gray-lightest': '#8394CC',
      },
      minWidth: {
        '1/3': '33.333333%',
        40: '10rem',
      },
      scale: {
        102: '1.03',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
