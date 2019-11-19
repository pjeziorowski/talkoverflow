import { graphql } from "gatsby"
import PostsPage from "gatsby-theme-blog-core/src/components/posts"

export default PostsPage

export const query = graphql`
query TagAwarePostsQuery ($tag: [String]) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost (
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
