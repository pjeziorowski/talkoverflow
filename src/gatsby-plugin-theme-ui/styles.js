import merge from "deepmerge"
import defaultThemeStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles"

export default merge(defaultThemeStyles, {
  strong: {
    backgroundColor: "bgStrong",
    color: "primary",
  },
  blockquote: {
    color: `inherit`,
    borderLeft: "4px solid",
    paddingLeft: "1em",
    opacity: 0.9,
    "&.translation": {
      fontSize: `1em`,
    },
  },
})
