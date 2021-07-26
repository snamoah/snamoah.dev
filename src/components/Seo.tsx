import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { GraphqlQuery } from '../types/graphql'

type SeoQuery = GraphqlQuery<{
  siteUrl: string
  title: string
  image: string
  lang: string
  keywords: string[]
  description: string
}>

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        siteUrl
        title
        image
        lang
        keywords
        description
      }
    }
  }
`

const Seo: React.FC = () => {
  const {
    site: { siteMetadata: site },
  } = useStaticQuery<SeoQuery>(query)

  const keywords = site.keywords.join(' ')

  return (
    <Helmet>
      <html lang={site.lang} />
      <title>{site.title}</title>

      <meta name="description" content={site.description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={site.siteUrl} />

      {/* Open Graph tags */}
      <meta name="og:site_name" content={site.title} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={site.title} />
      <meta name="og:description" content={site.description} />
      <meta name="og:image" content={site.image} />
      <meta name="og:url" content={site.siteUrl} />
    </Helmet>
  )
}

export default Seo
