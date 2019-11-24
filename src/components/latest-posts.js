import React, { Fragment } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import { Styled, css } from "theme-ui"
import { Box } from "@theme-ui/components"

import PostList from "./post-list"

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
      allBlogPost(sort: { fields: [date], order: DESC }, limit: 5) {
        totalCount
        edges {
          node {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            keywords
            tags
            slug
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Box css={css({ display: "flex", justifyContent: "space-between" })}>
        <Styled.h2>Latest Articles</Styled.h2>
        <Styled.a to="/posts" as={Link}>
          View all
        </Styled.a>
      </Box>
      <Box>
        <PostList posts={data.allBlogPost.edges} />
      </Box>
    </Fragment>
  )
}
