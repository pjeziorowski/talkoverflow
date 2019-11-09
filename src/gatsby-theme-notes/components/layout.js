import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import { useColorMode } from "theme-ui"

export default props => {
  const [colorMode, setColorMode] = useColorMode()

  const theme = createMuiTheme({
    palette: {
      type: colorMode,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <BlogLayout {...props}>{props.children}</BlogLayout>
    </ThemeProvider>
  )
}
