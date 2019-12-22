const rssOptions = {
  query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,
  feeds: [
    {
      serialize: ({ query: { site, allMdx } }) => {
        return allMdx.edges.map(edge => {
          return Object.assign({}, edge.node.frontmatter, {
            description: edge.node.excerpt,
            date: edge.node.frontmatter.date,
            url: site.siteMetadata.siteUrl + edge.node.childMdxBlogPost.slug,
            guid: site.siteMetadata.siteUrl + edge.node.childMdxBlogPost.slug,
            custom_elements: [{ "content:encoded": edge.node.html.replace(/<style/g, '<style style="display: none"') }],
          })
        })
      },
      query: `
          {
            allMdx(
              filter: {childMdxBlogPost: {slug: {ne: null}}},
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  excerpt
                  html
                  childMdxBlogPost { slug }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `,
      output: "/rss.xml",
      title: "talkoverflow.com posts feed"
    },
  ],
}

module.exports = rssOptions
