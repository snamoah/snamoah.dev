import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import theme from '../../config/theme'

interface LinkProps {
  to: string
  children: ReactNode
  primary?: boolean
  [key: string]: any
}

const LinkComponent: React.FC<LinkProps> = ({
  to,
  children,
  primary,
  ...otherProps
}) => {
  const isExternalLink = /^https?:\/\//.test(to)

  if (isExternalLink) {
    return (
      <a href={to} target="_blank" rel="noreferrer" {...otherProps}>
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
  color: ${(props) =>
    props.primary ? theme.colors.PRIMARY : theme.colors.BLACK};

  &:hover {
    color: ${(props) =>
      props.primary ? theme.colors.PRIMARY : theme.colors.DARKER_GREY};
  }
`

export default Link
