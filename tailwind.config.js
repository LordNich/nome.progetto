/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F855A',
        secondary: '#2563EB',
        accent: '#FBBF24',
        alert: '#EF4444',
        background: '#FAFAFA',
        text: '#111827'
      }
    }
  },
  plugins: []
};
