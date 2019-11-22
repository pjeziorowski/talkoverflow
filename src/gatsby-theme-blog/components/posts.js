import React from "react"

import Layout from "gatsby-theme-blog/src/components/layout"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import Newsletter from '../../components/newsletter'
import PostList from "../../components/post-list"

const Posts = (props) => {
    console.log(props)
    return (
        <Layout location={props.location} title={props.siteTitle}>
          <main>
            <PostList posts={props.posts}/>
            <Newsletter />
          </main>
          <Footer socialLinks={props.socialLinks} />
        </Layout>
      )
}

export default Posts
