import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Link from './Link'
import theme from '../../config/theme'
import { Device } from '../utils/breakpoints'

export interface MenuItemProps {
  name: ReactNode
  link: string
  title?: string
  ariaLabel?: string
}

export interface MenuProps {
  dotted?: boolean
  link?: boolean
  active?: string
  items: MenuItemProps[]
}

type StyledMenuProps = Omit<MenuProps, 'items'>

const MenuItem = styled(Link)`
  display: inline-block;
  margin: 0 2em;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${Device.MOBILE} {
    margin: 0 1em;
  }
`

const Menu = styled.nav<StyledMenuProps>`
  font-weight: 600;
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${theme.colors.PRIMARY};
`

const MenuComponent: React.FC<MenuProps> = ({
  items,
  dotted,
  ...menuProps
}) => {
  const lastMenuItemIndex = items.length - 1

  return (
    <Menu {...menuProps}>
      {items.map(({ name, link, ...props }, index) => (
        <React.Fragment key={index}>
          <MenuItem key={index} to={link} {...props}>
            {name}
          </MenuItem>

          {dotted && index !== lastMenuItemIndex && <Dot />}
        </React.Fragment>
      ))}
    </Menu>
  )
}

export default MenuComponent
