import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import { Box } from "@theme-ui/components"
import Layout from "gatsby-theme-blog/src/components/layout"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import LatestPosts from "../components/latest-posts"
import TagCloud from "../components/tag-cloud"
import Newsletter from "../components/newsletter"
import HackerSVG from "../../content/assets/svg/hacker.svg"

const HomePage = ({ data, location, title }) => (
  <Layout location={location} title={title}>
    <main>
      <Box style={{ textAlign: "center" }}>
        <Styled.img style={{ width: "70%", margin: "0" }} src={HackerSVG} />
      </Box>
      <TagCloud />
      <LatestPosts />
      <Newsletter />
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
