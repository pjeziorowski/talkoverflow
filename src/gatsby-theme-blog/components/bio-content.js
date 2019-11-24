import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        Hey, I'm <Styled.a href="https://twitter.com/pjeziorowski">{data.site.siteMetadata.author}</Styled.a>
        . Welcome to my blog.
        <br />
        Enjoy software explained with simple words and code.
      </Fragment>
    )}
  />
)
