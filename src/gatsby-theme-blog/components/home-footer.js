/* Shadowing to add RSS feed link */
import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { Link } from "gatsby"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    
    <Styled.a as={Link} css={css({float: 'right'})} to="/rss.xml" >RSS</Styled.a>
  </footer>
)
export default Footer
