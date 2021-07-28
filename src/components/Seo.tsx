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

interface SeoProps {
  slug?: string
  blog?: boolean
  title?: string
  description?: string
  image?: string
  url?: string
}

const Seo: React.FC<SeoProps> = ({
  slug,
  blog: isBlog,
  title: siteTitle,
  description: siteDescription,
  image: siteImage,
}) => {
  const {
    site: { siteMetadata: site },
  } = useStaticQuery<SeoQuery>(query)

  if (!isBlog) {
    siteTitle = siteTitle ? `${siteTitle} | ${site.title}` : site.title
  }

  siteDescription = siteDescription || site.description
  siteImage = siteImage || site.image

  const siteUrl = slug ? `${site.siteUrl}${slug}` : site.siteUrl

  const keywords = site.keywords.join(' ')

  const ogType = isBlog ? 'article' : 'website'
  return (
    <Helmet>
      <html lang={site.lang} />
      <title>{siteTitle}</title>

      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph tags */}
      <meta name="og:site_name" content={siteTitle} />
      <meta name="og:type" content={ogType} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={siteDescription} />
      <meta name="og:image" content={siteImage} />
      <meta name="og:url" content={siteUrl} />
    </Helmet>
  )
}

export default Seo
