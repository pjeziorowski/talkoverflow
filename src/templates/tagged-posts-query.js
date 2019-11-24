import React from "react"
import { graphql } from "gatsby"

import Posts from "../gatsby-theme-blog/components/posts"

export default ({ location, data, pageContext }) => {
  const { site, allBlogPost } = data
  return (
    <Posts
      location={location}
      posts={allBlogPost.edges}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
      tag={pageContext.tag}
    />
  )
}

export const query = graphql`
  query TagAwarePostsQuery($tag: [String]) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { tags: { in: $tag } }
    ) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`
