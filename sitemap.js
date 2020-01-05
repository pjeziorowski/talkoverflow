const sitemapOptions = {
  exclude: ['**/page/**'],
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
      const url = site.siteMetadata.siteUrl + edge.node.path
      if (edge.node.path === '/') {
        return {
          url: url,
          changefreq: `daily`,
          priority: 0.7
        }
      }
      return {
        url: url,
        changefreq: `monthly`,
        priority: 0.9
      }
    })
}

module.exports = sitemapOptions
