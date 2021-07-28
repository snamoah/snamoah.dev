import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { GraphqlQuery } from '../types/graphql'
import theme from '../../config/theme'
import Link from '../components/Link'

const Article = styled.article`
  margin-bottom: 2em;
`

const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  color: ${theme.colors.BLACK};
`
const Body = styled.p`
  font-size: 0.9em;
  margin: 0.5em 0;
  color: ${theme.colors.DARK_GREY};
`

const LinkToArticle = styled(Link)`
  font-size: 0.9em;
`
const Action = styled.div``

interface BlogPost {
  id: string
  slug: string
  frontmatter: {
    slug: string
    date: string
    title: string
    description: string
  }
}

type BlogPostsQuery = GraphqlQuery<BlogPost>

const query = graphql`
  query BlogPosts {
    allMdx(
      filter: { frontmatter: { published: { ne: false } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          slug
          title
          description
          date(formatString: "MMMM D, YYYY")
        }
        id
      }
    }
  }
`

const Blog: React.FC = () => {
  const {
    allMdx: { nodes: posts },
  } = useStaticQuery<BlogPostsQuery>(query)
  return (
    <>
      <Seo siteTitle="Blog" />
      <Layout
        title={
          <h1>
            Blog{' '}
            <span role="img" aria-label="Writing Hand: Medium-Dark Skin Tone">
              ✍🏾
            </span>
          </h1>
        }
      >
        {posts &&
          posts.map(({ id, slug, frontmatter: post }) => (
            <Article key={id}>
              <Header>{post.title}</Header>
              <Body>{post.description}</Body>
              <Action>
                <LinkToArticle primary to={`/blog/${slug}`}>
                  Read Article
                </LinkToArticle>
              </Action>
            </Article>
          ))}
      </Layout>
    </>
  )
}

export default Blog
