import React from "react"
import { graphql } from "gatsby"
import Layout from "gatsby-theme-blog/src/components/layout"
import Footer from "gatsby-theme-blog/src/components/home-footer"

const HomePage = ({ data, location, title }) => (
  <Layout location={location} title={title}>
    <main></main>
    <Footer socialLinks={data.site.siteMetadata.social} />
  </Layout>
)

export default HomePage

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
