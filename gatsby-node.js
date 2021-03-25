/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const dealerPage = path.resolve('./src/templates/dealer/dealer.tsx')

  const markdownDealersSfw = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            layout: {eq: "dealer"}, 
            isAdult: {eq: false}
          }
        }, 
        sort: {
          fields: [frontmatter___title], 
          order: ASC
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (markdownDealersSfw.error) {
    const errors = [
      markdownPosts.errors,
      markdownDealersSfw.errors
    ]
    console.error(errors)
    throw errors
  }

  const dealersSfw = markdownDealersSfw.data.allMarkdownRemark.edges

  dealersSfw.forEach((edge, index) => {
    const nextID = index + 1 < dealersSfw.length ? index + 1 : 0 // clamp to end of list
    const prevID = index - 1 >= 0 ? index - 1 : dealersSfw.length - 1 // clamp to start of list

    const nextEdge = dealersSfw[nextID]
    const prevEdge = dealersSfw[prevID]

    createPage({
      path: `/dealers${edge.node.fields.slug}`,
      component: dealerPage,
      context: {
        isSfw: true,
        slug: edge.node.fields.slug,
        nextTitle: nextEdge.node.frontmatter.title,
        nextSlug: nextEdge.node.fields.slug,
        prevTitle: prevEdge.node.frontmatter.title,
        prevSlug: prevEdge.node.fields.slug
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss')
      }
    }
  })
}
