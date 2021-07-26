import React, { ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface LinkProps {
  to: string
  children: ReactNode
  [key: string]: any
}

const Link: React.FC<LinkProps> = ({ to, children, ...otherProps }) => {
  const isExternalLink = /^https?:\/\//.test(to)

  if (isExternalLink) {
    return (
      <a href={to} target="_blank" {...otherProps}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} {...otherProps}>
      {children}
    </GatsbyLink>
  )
}

export default Link
