/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E40AF",
          dark: "#1F2937",
          white: "#FFFFFF",
          light: "#F8FAFC",
          soft: "#DBEAFE",
          border: "#E5E7EB"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
