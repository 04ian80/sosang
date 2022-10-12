/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.tsx'],
  theme: {
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
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
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
      },
    },
    screens: {
      sm: { min: '400px' },
    },
  },
  plugins: [],
};
