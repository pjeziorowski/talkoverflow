module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128288379-2",
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // fixes double-image problem possibly in gatsby-plugin-mdx
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
        plugins: [ `gatsby-remark-images` ],
      }
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/posts`,
      },
    },
  ],
  siteMetadata: {
    title: `talkoverflow`,
    author: `Patryk Jeziorowski`,
    description: `Homepage and blog by Patryk Jeziorowski`,
    pages: [
      {label: 'Posts', path: '/posts'},
      {label: 'Notes', path: '/notes'},
    ],
    social: [
      {
        name: `twitter`,  
        url: `https://twitter.com/pjeziorowski`,
      },
      {
        name: `github`,
        url: `https://github.com/pjeziorowski`,
      },
    ],
  },
}
