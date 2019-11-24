import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const darkGreen = `#72AA78`
const lightGreen = `#8FD694`
const blueGray = `#282c35`

export default merge(defaultThemeColors, {
  text: blueGray,
  primary: darkGreen,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: lightGreen,
      highlight: darkGreen,
    },
  },
})
