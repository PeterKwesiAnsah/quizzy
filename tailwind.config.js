module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'mulish':["Mulish"]
      },
      colors:{
        blue:{
          500:"#46dff0",
          700:"#46b4f0"
        }
      }
    },
  },
  plugins: [],
}