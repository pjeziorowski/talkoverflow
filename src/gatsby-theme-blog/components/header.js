import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"

import Header from "./copiedHeader"

const rootPath = `${__PATH_PREFIX__}/`

const Pages = ({ pages }) => (
  <div>
    <nav>
      <ul
        style={{
          paddingInlineStart: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {pages.map(link => (
          <Styled.li
            key={link.label}
            css={{
              listStyleType: `none`,
              padding: `0  1rem`,
              margin: "0 0",
            }}
          >
            <Styled.a as={Link} css={{ color: `black` }} to={link.path}>
              {link.label}
            </Styled.a>
          </Styled.li>
        ))}
      </ul>
    </nav>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query HeadersQuery {
        site {
          siteMetadata {
            title
            pages {
              label
              path
            }
          }
        }
      }
    `}
    render={data => (
      <Header {...props} title={data.site.siteMetadata.title}>
        <Pages pages={data.site.siteMetadata.pages} />
      </Header>
    )}
  />
)
