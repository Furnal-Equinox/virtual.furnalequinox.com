/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

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
  const postPage = path.resolve('./src/templates/post/post.tsx')
  const dealerPage = path.resolve('./src/templates/dealer/dealer.tsx')

  // Get a full list of all Markdown posts
  const markdownPosts = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "post" } } }
        sort: { fields: frontmatter___date, order: DESC }
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

  const markdownDealers = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "dealer" } } }
        sort: { fields: frontmatter___title, order: ASC }
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

  if (markdownPosts.error || markdownDealers.error) {
    console.error([markdownPosts.errors, markdownDealers.errors])
    throw [markdownPosts.errors, markdownDealers.errors]
  }

  const posts = markdownPosts.data.allMarkdownRemark.edges
  const dealers = markdownDealers.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    createPage({
      path: `/news${edge.node.fields.slug}`,
      component: postPage,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
    

  dealers.forEach((edge, index) => {
    const nextID = index + 1 < dealers.length ? index + 1 : 0 // clamp to end of list
    const prevID = index - 1 >= 0 ? index - 1 : dealers.length - 1 // clamp to start of list

    const nextEdge = dealers[nextID]
    const prevEdge = dealers[prevID]

    createPage({
      path: `/dealers${edge.node.fields.slug}`,
      component: dealerPage,
      context: {
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
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
