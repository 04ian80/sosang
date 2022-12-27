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
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-200px * 11))',
          },
        },
      },
      animation: {
        'auto-carousel': 'scroll 80s linear infinite',
      },
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
        'brandYellow-50': '#fefce8',
        'brandYellow-100': '#fef9c3',
        'brandYellow-200': '#fef08a',
        'brandYellow-300': '#fde047',
        'brandYellow-400': '#facc15',
        'brandYellow-500': '#eab308',
      },
      width: {
        100: '25rem',
        104: '26rem',
        128: '32rem',
        140: '40rem',
      },
      height: {
        100: '25rem',
        104: '26rem',
        128: '32rem',
        140: '40rem',
      },
      screens: {
        'min-xs': { min: '400px' },
        'min-sm': { min: '635px' },
        'min-md': { min: '768px' },
        'min-lg': { min: '976px' },
        'min-xl': { min: '1440px' },
        'max-xs': { max: '400px' },
        'max-sm': { max: '635px' },
        'max-lg': { max: '976px' },
        'max-md': { max: '768px' },
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
