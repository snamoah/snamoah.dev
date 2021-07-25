import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo: React.FC = () => {
  const {
    site: { siteMetadata: site },
  } = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            siteUrl
            title
            lang
            keywords
            description
          }
        }
      }
    `,
  );

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
      <meta name="og:url" content={site.siteUrl} />
    </Helmet>
  )
}

export default Seo;
