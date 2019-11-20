import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import colors from "./colors"

export default {
  ...baseTheme,
  colors: colors,
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "3px solid",
      borderColor: "muted",
    },
  },
}
