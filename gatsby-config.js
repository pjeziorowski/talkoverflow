const rssOptions = require("./rss");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128288379-2",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: rssOptions,
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmx.us5.list-manage.com/subscribe/post?u=9923588ef4183fe0de6e438bf&amp;id=3af4176aa8', 
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
    siteUrl: 'https://talkoverflow.com',
    description: `Homepage and blog by Patryk Jeziorowski`,
    pages: [
      {label: 'Posts', path: '/posts'},
      {label: 'Notes', path: '/notes'},
    ],
    social: [
      {
        name: `Twitter`,  
        url: `https://twitter.com/pjeziorowski`,
      },
      {
        name: `Github`,
        url: `https://github.com/pjeziorowski`,
      },
    ],
  },
}
