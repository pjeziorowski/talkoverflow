import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import colors from "./colors"

export default {
  ...baseTheme,
  useColorSchemeMediaQuery: true,
  colors: colors,
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
        cursor: "pointer",
      },
    },
  },
  badges: {
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "3px solid",
      borderColor: "muted",
    },
  },
}
