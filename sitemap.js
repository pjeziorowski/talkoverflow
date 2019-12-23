const sitemapOptions = {
  query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }

      allSitePage {
        edges {
          node {
            path
          }
        }
      }
  }`,
  serialize: ({ site, allSitePage }) =>
    allSitePage.edges.map(edge => {
      if (edge.node.path.includes("/posts/")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `monthly`,
          priority: 0.9,
        }
      }
      else if (edge.node.path.includes("/notes/")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `weekly`,
          priority: 0.3,
        }
      }
      else if (edge.node.path.includes("/tags/")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `weekly`,
          priority: 0.7,
        }
      }
      else if (edge.node.path.includes("/posts/")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `monthly`,
          priority: 0.9,
        }
      }
      else if (edge.node.path.endsWith(site.siteMetadata.siteUrl + "/")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `monthly`,
          priority: 0.99,
        }
      }
      else if (edge.node.path.endsWith("/notes")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `daily`,
          priority: 0.4,
        }
      }
      else if (edge.node.path.endsWith("/posts")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `daily`,
          priority: 0.6,
        }
      }
      else if (edge.node.path.endsWith("/tags")) {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `weekly`,
          priority: 0.6,
        }
      } else {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: `monthly`,
          priority: 0.5,
        }
      }
    }),
}

module.exports = sitemapOptions
