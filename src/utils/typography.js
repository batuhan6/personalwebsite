import Typography from "typography"

const typography = new Typography({
  includeNormalize: true,
  omitGoogleFont: false,
  googleFonts: [
    {
      name: "Oxygen",
      styles: ["400"]
    },
    {
      name: "Josefin Sans",
      styles: ["400"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    },
    {
      name: "Open Sans Condensed",
      styles: ["400"]
    }
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Oxygen", "sans-serif"],
  headerWeight: "normal",
  bodyFontFamily: ["Oxygen", "sans-serif"]
})

export default typography
