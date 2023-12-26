module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-high-tech-gadgets-on-stylish-blue-shelf-perfect-for-a-modern-image_3770247.jpg')",
      },
    },
  },
  plugins: [],
};
