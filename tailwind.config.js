module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: '#89b4fa',
        secondary: '#f2cdcd',
      },
    },
  },
  plugins: [require('@catppuccin/tailwindcss'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#89b4fa',
          secondary: '#f2cdcd',
        },
      },
    ],
  },
}
