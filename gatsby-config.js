require(`dotenv`).config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    siteTitle: `talkoverflow`,
    siteHeadline: `Personal blog by Patryk Jeziorowski`,
    siteTitleAlt: `Personal blog by Patryk Jeziorowski`,
    siteDescription: `Sharing thoughts and knowledge about software engineering.`,
    siteUrl: `https://talkoverflow.com`,
    author: `Patryk Jeziorowski`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/pjeziorowski`,
          },
          {
            name: `LinkedIn`,
            url: `https://linkedin.com/in/patrykjeziorowski`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patryk Jeziorowski - all about software engineering`,
        short_name: `Patryk Jeziorowski`,
        description: `Sharing thoughts and knowledge about software engineering`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
