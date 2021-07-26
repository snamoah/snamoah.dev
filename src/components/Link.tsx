import React, { ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface LinkProps {
  to: string
  children: ReactNode
  [key: string]: any
}

const Link: React.FC<LinkProps> = ({ to, children, ...otherProps }) => {
  const isInternal = /^\/*/.test(to)

  if (isInternal) {
    return (
      <GatsbyLink to={to} {...otherProps}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...otherProps}>
      {children}
    </a>
  )
}

export default Link
