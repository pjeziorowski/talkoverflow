import React from "react"

import { Box } from "@theme-ui/components"
import Layout from "gatsby-theme-blog/src/components/layout"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import Newsletter from "../../components/newsletter"
import PostList from "../../components/post-list"
import TagCloud from "../../components/tag-cloud"

const Posts = props => {
  return (
    <Layout location={props.location} title={props.siteTitle}>
      <main>
        <TagCloud activeTag={props.tag} />
        <Box mt={4}>
          <PostList tag={props.tag} posts={props.posts} />
        </Box>
        <Newsletter />
      </main>
      <Footer socialLinks={props.socialLinks} />
    </Layout>
  )
}

export default Posts
