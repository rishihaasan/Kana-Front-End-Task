module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust the path if needed
  theme: {
    extend: {
      colors: {
        // Define custom colors used throughout your application
        'gray-800': '#111213',
        'gray-700': '#17181A',
        'primary': '#2ED3B7',
        'secondary': '#A5A5A6',
        'background': '#0C0C0D',
        'topbar-btn': '#1D1E20',
        'stroke': '#FFFFFF1A', // Custom stroke color
        'hover': '#00FFFF1A',
        'text-color-2': '#FFFFFFCC',
        'color-4': '#777879',
        stroke: 'rgba(255, 255, 255, 0.1)', // For border-stroke
        'button-cta-2': '#22CCEE', // Text color for the buttons
        'cyan-600': '#088AB2', // Border color 
        'tab-color':'#FFFFFF0F',
        'hover-color':'#1db7d5',
        'secondary-hover-color':'#24b19b',
      },
      spacing: {
        // Custom spacing used for padding, margins, etc.
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '40px': '40px',
      },
      fontFamily: {
        // Define custom fonts
        Inter: ['Inter', 'sans-serif'], // For Inter font
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        // Custom shadows
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
