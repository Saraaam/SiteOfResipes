module.exports = {
  content: [
    './src/**/*.{html,js}',  // Adjust this path to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js

// tailwind.config.js
module.exports = {
  content: [
    './',        // Ensure Tailwind processes your HTML files
    './src/**/*.{js,jsx,ts,tsx}',  // Include this if you're using React or any JavaScript framework
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],  // Add "Roboto" to Tailwind's font family
      },
    },
  },
  plugins: [],
}


