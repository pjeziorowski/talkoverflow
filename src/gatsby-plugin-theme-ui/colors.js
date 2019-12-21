import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const darkGreen = `#72AA78`
const lightGreen = `#8FD694`
const blueGray = `#282c35`
const bgStrongDark = `#1d2029`
const bgStrongLight = `#f2f7f4`

export default merge(defaultThemeColors, {
  text: blueGray,
  primary: darkGreen,
  heading: blueGray,
  bgStrong: bgStrongLight,
  modes: {
    dark: {
      background: blueGray,
      primary: lightGreen,
      highlight: darkGreen,
      bgStrong: bgStrongDark,
    },
  },
})
