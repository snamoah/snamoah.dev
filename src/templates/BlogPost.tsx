import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import theme from '../../config/theme'

const Header = styled.header`
  margin-top: 1.5em;
  font-weight: 700;
  font-size: 36px;
`

const Meta = styled.span`
  margin-top: 1em;
  font-size: 0.8em;
  color: ${theme.colors.DARK_GREY};
`

const Divider = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${theme.colors.LIGHTER_GREY};
  margin: 0.5em auto 1em;
`

interface BlogPostProps {
  data: {
    post: {
      frontmatter: {
        title: string
        date: string
      }
      timeToRead: number
      slug: string
      body: string
    }
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: mdx(slug: { eq: $slug }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { post } = data

  return (
    <>
      <Seo />
      <Layout
        title={
          <>
            <Header>{post.frontmatter.title}</Header>
            <Meta>
              {post.frontmatter.date}
              {`  •  `}
              {` ${post.timeToRead} min read`}
            </Meta>
            <Divider />
          </>
        }
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </Layout>
    </>
  )
}

export default BlogPost
