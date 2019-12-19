/* Shadowed to query additional Frontmatter fields */
import { graphql } from "gatsby"
import PostPage from "gatsby-theme-blog-core/src/components/post"

export default PostPage

export const query = graphql`
  query ExtendedPagePostsQuery($id: String!, $previousId: String, $nextId: String) {
    mdx (childMdxBlogPost: {id :{ eq: $id }}){
      frontmatter {
        githubUrl
        twitterUrl
        featuredImage
      }
    }
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
