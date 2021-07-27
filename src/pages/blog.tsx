import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'

const Blog: React.FC = () => {
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
      ></Layout>
    </>
  )
}

export default Blog
