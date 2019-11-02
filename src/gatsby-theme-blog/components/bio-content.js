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
        Personal blog by{" "}
        <Styled.a href="http://example.com/">
          {data.site.siteMetadata.author}
        </Styled.a>
        .
        <br />
        Learning by explaining.
        <br />
        With some words and code.
      </Fragment>
    )}
  />
)
