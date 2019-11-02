import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ location, title }) => {
  return location.pathname === rootPath ? (
    <Styled.h3
      as="p"
      css={css({
        my: 0,
      })}
    >
      <Styled.a
        as={Link}
        css={css({
          boxShadow: `none`,
          textDecoration: `none`,
          color: `primary`,
        })}
        to={`/`}
      >
        {title}
      </Styled.a>
    </Styled.h3>
  ) : null
}

const Pages = ({pages}) => {
  return pages.map(page => (
    <Styled.a
    as={Link}
    to={page.path}
    css={css({
      margin: `auto`,
      fontFamily: `heading`,
      fontWeight: `bold`,
      textDecoration: `none`,
      color: `inherit`,
      ":hover": {
        textDecoration: `underline`,
      },
    })}
  >
    {page.label}
  </Styled.a>
  ))
}

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
      <Header {...props}>
        <Title {...props} title={data.site.siteMetadata.title} />
        <Pages pages={data.site.siteMetadata.pages}/>
      </Header>
    )}
  />
)
