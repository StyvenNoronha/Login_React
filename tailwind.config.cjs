/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors:{
      Trasparente: 'transparent',
      Black:'000',
      White: 'fff',
  
      Gray:{
        900:'#121214',
        800:'#202024',
        600:'#7c7c8a',
        200:'#c4c4cc', 
      },

      Green:{
         800:'#09d3ac',
         600:'#6df9de',
         200:'#bbf7d0',
         50:'#ecfdf5',
      },
    },
    extend: {
      fontFamily:{
        sans:'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
