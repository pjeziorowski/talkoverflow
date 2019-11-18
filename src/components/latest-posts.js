import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"
import { Box } from "@theme-ui/components"
import SEO from "gatsby-theme-blog/src/components/seo"

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
      allBlogPost(sort: { fields: [date], order: DESC }, limit: 3) {
        totalCount
        edges {
          node {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            keywords
            slug
          }
        }
      }
    }
  `)

  return (
    <Box mt={4}>
      <Box css={css({ display: "flex", justifyContent: "space-between" })}>
        <Styled.h2>Latest Articles</Styled.h2>
        <Styled.a>View all</Styled.a>
      </Box>
      <Box>
        {data.allBlogPost.edges.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: `none`,
                    }}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </Box>
    </Box>
  )
}
