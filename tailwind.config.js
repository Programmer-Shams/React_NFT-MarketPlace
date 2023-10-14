/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': "#6F4FF2",
        'purple': "#B6A5FE", 
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        'custom-shadow': '0 0 8px rgba(111, 79, 242, 0.5)',
      },
    },
  },
  plugins: [],
}

