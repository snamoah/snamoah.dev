import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Link from './Link'
import theme from '../../config/theme'

export interface MenuItemProps {
  name: ReactNode
  link: string
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
  text-decoration: none;
  color: ${theme.colors.BLACK};
  margin: 0 2em;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colors.DARK_GREY};
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
      {items.map((menuItem, index) => (
        <React.Fragment key={index}>
          <MenuItem key={index} to={menuItem.link}>
            {menuItem.name}
          </MenuItem>

          {dotted && index !== lastMenuItemIndex && <Dot />}
        </React.Fragment>
      ))}
    </Menu>
  )
}

export default MenuComponent
