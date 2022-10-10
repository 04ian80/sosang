/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        googleBlue: '#4285F4',
        kakaoYellow: '#FFE812',
        kakaoBrown: '#3F1D1D',
        naverGreen: '#03C75A',
        white: '#fff',
        black: '#000',
        'gray-200': 'rgb(229 231 235)',
        'zinc-300': 'rgb(212 212 216)',
      },
    },
  },
  plugins: [],
};
