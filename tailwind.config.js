/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: { 
      width:{
        '1376' : "1376px",
        '445' : "445px",
        '25' : "100px",
        '26' : "115px",
        '53' : "212px",
        '200' : "200px",
        '502' : "502px",
        '130' : "130px"
      },
      maxWidth:{
        '912': "912px",
        '445': "445px",
        '1376' : "1376px",
        '422' : "422px",
        '665' : "665px",
        '157' : "157px"
      },
      minWidth:{
        '271' : "271px",
      },
      fontSize: {
        '20' : "20px"
      },
      colors: {
        '#0F172A' : "#0F172A",
        '#111827' : "#111827",
        '#2563EB' : "#2563EB",
        '#D1D5DB' : "#D1D5DB",
        '#6B7280' : "#6B7280",
        '#9CA3AF' : "#9CA3AF"
      },
      padding: {
        '30' : "120px",
        '15' : "60px",
      }, 
      lineHeight : {
        '4xl' : "48px"
      },
      backgroundColor:{
        '#F3F4F6' : "#F3F4F6",
        '#2563EB' : "#2563EB",
        '#152855d3' : "#152855d3",
      },
      fontSize:{
        '3' : "12px"
      },

      
    
      
     },
  },
  plugins: [ ],
}
