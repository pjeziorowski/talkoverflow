/* Shadowed to pass Github/Twitter URLs to the footer */
import React from "react"
import { Styled, css } from "theme-ui"

import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "./seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import TagCloud from "../../components/post-tags"

const Post = ({
  data: {
    mdx: {
      frontmatter: { githubUrl, twitterUrl, featuredImage },
    },
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} featuredImage={featuredImage}/>
    <main>
      <Styled.h1
        css={css({
          mb: 1 ,
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
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter
      {...{ previous, next, githubUrl, twitterUrl, tags: post.tags }}
    />{" "}
    {/* URLs added, tags added */}
  </Layout>
)

export default Post
