import React from 'react'
import { graphql } from 'gatsby'
import Menu from './Menu'
import { Twitter, Github, LinkedIn } from './icons'
import { useStaticQuery } from 'gatsby'

const query = graphql`
  query SocialLinksQuery {
    site {
      siteMetadata {
        twitterLink
        githubLink
        linkedInLink
      }
    }
  }
`

const SocialLinks = () => {
  const {
    site: { siteMetadata: site },
  } = useStaticQuery(query)

  return (
    <Menu
      items={[
        {
          name: <Twitter />,
          link: site.twitterLink,
          title: 'Twitter',
          ariaLabel: 'Twitter',
        },
        {
          name: <Github />,
          link: site.githubLink,
          title: 'Github',
          ariaLabel: 'Github',
        },
        {
          name: <LinkedIn />,
          link: site.linkedInLink,
          title: 'LinkedIn',
          ariaLabel: 'LinkedIn',
        },
      ]}
    />
  )
}

export default SocialLinks
