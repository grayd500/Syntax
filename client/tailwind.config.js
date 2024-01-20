module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './client/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  };