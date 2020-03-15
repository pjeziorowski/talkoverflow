const sitemapOptions = require('./sitemap')

module.exports = {
  siteMetadata: {
    title: `talkoverflow`,
    name: `talkoverflow`,
    siteUrl: `https://talkoverflow.com`,
    description: `Homepage and blog by Patryk Jeziorowski`,
    hero: {
      heading: ``,
      maxWidth: 652
    },
    social: [
      {
        name: `facebook`,
        url: `https://facebook.com/talkoverflowsoftware/`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/pjeziorowski`
      },
      {
        name: `github`,
        url: `https://github.com/pjeziorowski`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/patrykjeziorowski/`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `talkoverflow - talk software`,
        short_name: `talkoverflow`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: sitemapOptions
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmx.us5.list-manage.com/subscribe/post?u=9923588ef4183fe0de6e438bf&amp;id=3af4176aa8'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128288379-2'
      }
    },
    // {
    //   resolve: `gatsby-plugin-netlify`,
    // },
  ]
}
