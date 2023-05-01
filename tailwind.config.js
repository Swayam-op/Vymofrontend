/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         'background-color-2': '#212428',
         'background-color-1': 'linear-gradient(145deg, #1e2024, #23272b)',
         'color-white': '#ffffff',
         'color-lightn' : '#c4cfde',
         'color-lightn-2' : '#7c838e',
         'color-light' : '#E4E6EA',
         'primary-1' : '#f9004d',
         'secondary-1' : '#ff014f',
         'color-body' : '#878e99',
         'light-dark' : '#23272b',
         'solid-dark' : '#1e2024',
         'solid-dark-2' : '#191b1e',
         'extra' : '#262a2e',
      },
      boxShadow: {
        'shadow-1': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
        'shadow-inset' : 'inset 8px 8px 16px rgb(0 0 0 / 46%), inset -8px -8px 16px rgb(56 62 69 / 46%)',
        'shadow-inset-2' : '1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset',
      },
      backgroundImage: {
        'gradient-1' : 'linear-gradient(145deg, rgb(30, 32, 36), rgb(35, 39, 43))',
        'gradient-2' : 'linear-gradient(145deg,rgb(30, 32, 36),#0d1013)',
        'gradient-3' : 'linear-gradient(145deg, #f02981 0%, #c81901 100%)',
        'gradient-4' : 'linear-gradient(145deg, #ff014f 0%, #f9004d 100%)'

      },
      background:{
        'gradient-3' : 'linear-gradient(145deg,#23272b,#1e2024)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-extra-slow': 'spin 5s linear infinite',
      },
      opacity: {
        '1': '.01',
      }
      , width: {
        '2x': '200%',
        '3x' : '300%',
        '4x' : '400%'
      },
      translate: {
        '0x':'0px',
        '1x':'100%',
        '2x': '200%',
        '3x' : '300%',
        '4x' : '400%'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    borderWidth: {
      '1' : '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },

  plugins: [],
}