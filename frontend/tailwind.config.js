const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
      serif: ["Hachi Maru Pop", "sans-serif"],
    },
    extend: {
      colors: {
        'bubblegum': '#FCE1E4',
        'lilac': '#E8DFF5',
        'dark': '#404565',
        'light': '#FEFDFB',
        'sky': '#DAEAF6',
        'banana': '#FCF4DE',
      },
    },
  },
  plugins: [],
})

