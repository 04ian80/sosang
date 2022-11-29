/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/**/*.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        roboto: [
          'Roboto',
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        gmarket: [
          'GmarketSans',
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
    },
    extend: {
      colors: {
        googleBlue: '#4285F4',
        kakaoYellow: '#FEE500',
        kakaoBrown: '#3F1D1D',
        kakaoLabel: '#000000cc',
        naverGreen: '#03C75A',
        white: '#fff',
        black: '#000',
        'gray-200': 'rgb(229 231 235)',
        'zinc-300': 'rgb(212 212 216)',
        'brandGreen-900': '#064e3b',
        'brandGreen-800': '#065f46',
        'brandGreen-700': '#047857',
        'brandGreen-600': '#059669',
        'brandGreen-500': '#10b981',
        'brandGreen-400': '#34d399',
      },
      screens: {
        'min-sm': { min: '615px' },
        'min-md': { min: '768px' },
        'min-lg': { min: '976px' },
        'min-xl': { min: '1440px' },
        'max-sm': { max: '615px' },
      },
      zIndex: {
        1000: '1000',
        5555: '5555',
        9999: '9999',
      },
    },
    screens: {
      sm: { min: '400px' },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};
