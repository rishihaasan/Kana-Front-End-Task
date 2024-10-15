module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'grey': '#1d1e20cc',
        'grey-600': '#2d2d30',
        'gray-800': '#111213',
        'gray-700': '#17181A',
        'primary': '#2ED3B7',
        'secondary': '#A5A5A6',
        'background': '#0C0C0D',
        'topbar-btn': '#1D1E20',
        'stroke': '#FFFFFF1A',
        'hover': '#00FFFF1A',
        'white-01': '#ffffff0f',
        'text-color-2': '#FFFFFFCC',
        'color-4': '#777879',
        stroke: 'rgba(255, 255, 255, 0.1)', 
        'button-cta-2': '#22CCEE',
        'cyan-600': '#088AB2',
        'tab-color':'#FFFFFF0F',
        'hover-color':'#1db7d5',
        'secondary-hover-color':'#24b19b',
        'color-3':'#12B76A'
      },
      spacing: {
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '40px': '40px',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'button-shadow': '0px 10px 8px 0px #00FFFF1A, 0px 4px 8px 0px #00000026, 0px 5px 0px 0px #0E9384',
        'button-shadow-btn': '0px 10px 8px 0px #00FFFF1A, 0px 4px 8px 0px #00000026, 0px 5px 0px 0px #088AB2',
        'custom-card': '0px 4px 20px -8px rgba(228, 242, 243, 0.1)',
      },
      borderRadius: {
        '16px': '16px',
      },
    },
  },
  plugins: [],
};
