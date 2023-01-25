/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    screens:{
      'mobile': '481px'
    },
    extend: {
      boxShadow:{
        'myshadow':' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
      }
    },
    colors:{
      transparent:'transparent',
      white:'#FFFFFF',
      blue:'#3b82f6',
      grey:'#9333ea',
      oqroq:'#CAC1C1',
      kokroq:'#f0f9ff',
      lightblack:"#ebe6e6",
      gradent: 'linear-gradient(0deg, rgba(209,76,76,0.40689779329700626) 10%, rgba(59,225,147,0.7710434515603116) 41%)',
      grenn:"#1b6b50",
      yellow:"#FFD739",
      red:"#E33E5A"
    },
  },
  plugins: [],
}
