require('ts-node').register({ files: true })

const { join } = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    fragment PostInfo on Mdx {
      slug
    }
    query {
      posts: allMdx(filter: { frontmatter: { published: { ne: false } } }) {
        nodes {
          ...PostInfo
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  const { posts } = data

  posts.nodes.forEach(({ slug }) => {
    createPage({
      path: join('/blog', slug),
      context: { slug },
      component: `${__dirname}/src/templates/BlogPost.tsx`,
    })
  })
}

module.exports = {
  onCreateNode,
  createPages,
}
