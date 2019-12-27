/* Shadowed to pass Github/Twitter URLs to the footer */
import React from "react"
import { Styled, css } from "theme-ui"

import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "./seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import TagCloud from "../../components/post-tags"
import ShareButtons from '../../components/share-buttons'

const Post = ({
  data: {
    mdx: {
      frontmatter: { featuredImage },
    },
    post,
    site: {
      siteMetadata: { title, discussion },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      featuredImage={featuredImage}
    />
    <main>
      <Styled.h1
        css={css({
          mb: 1,
        })}
      >
        {post.title}
      </Styled.h1>
      <TagCloud tags={post.tags} />
      <Styled.p
        css={css({
          fontSize: 1,
          mt: 0,
          mb: 4,
        })}
      >
        {post.date}
      </Styled.p>
      <ShareButtons location={location} mt={-4} mb={2}/>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ location, previous, next, discussion }} />
  </Layout>
)

export default Post
