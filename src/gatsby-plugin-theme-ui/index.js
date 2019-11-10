import baseTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '3px solid',
      borderColor: 'muted',
    },
  },
  }