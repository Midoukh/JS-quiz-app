 // tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
            'Montserrat': ['Montserrat', 'sans-serif']
          },
          backgroundColor: theme => ({
            ...theme('colors'),
            'blueish': '#556BF4',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
           })
      },

    },
    variants: {},
    plugins: [],
  } 
  //#556BF4