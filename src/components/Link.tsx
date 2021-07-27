import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import theme from '../../config/theme'

interface LinkProps {
  to: string
  children: ReactNode
  [key: string]: any
}

const LinkComponent: React.FC<LinkProps> = ({
  to,
  children,
  ...otherProps
}) => {
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

const Link = styled(LinkComponent)`
  text-decoration: none;
  color: ${theme.colors.BLACK};

  &:hover {
    color: ${theme.colors.DARK_GREY};
  }
`

export default Link
