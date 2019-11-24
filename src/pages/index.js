import React from "react"

import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { Box } from "@theme-ui/components"
import Layout from "gatsby-theme-blog/src/components/layout"
import Footer from "gatsby-theme-blog/src/components/home-footer"

import LatestPosts from "../components/latest-posts"
import TagCloud from "../components/tag-cloud"
import Newsletter from "../components/newsletter"

const HomePage = ({ data, location, title }) => (
  <Layout location={location} title={title}>
    <main>
      <Styled.h2>Articles by tag</Styled.h2>
      <TagCloud />
      <Box mt={4}>
        <LatestPosts />
      </Box>
      <Box mt={4}>
        <Newsletter />
      </Box>
    </main>
    <Footer socialLinks={data.site.siteMetadata.social} />
  </Layout>
)

export const query = graphql`
  query socialLinks {
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`

export default HomePage
