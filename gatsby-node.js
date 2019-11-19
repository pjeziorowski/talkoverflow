exports.createPages = async function({ actions, graphql }) {
  const PostsTemplate = require.resolve(`./src/templates/tagged-posts-query.js`)
  const toPath = tag => tag.replace(/ /g, "-").toLowerCase()
  const { data } = await graphql(`
    query {
      allBlogPost {
        group(field: tags) {
          value: fieldValue
        }
      }
    }
  `)

  data.allBlogPost.group.forEach(tag => {
    if (tag.value) {
      actions.createPage({
        path: `tags/${toPath(tag.value)}`,
        component: PostsTemplate,
        context: { tag: tag.value },
      })
    }
  })
}
