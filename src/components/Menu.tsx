import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import Link from './Link'
import theme from '../../config/theme'

interface MenuItemProps {
  name: ReactNode
  link: string
}

interface MenuProps {
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
  margin: 0 1em;

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

  ${(props) =>
    props.dotted &&
    `
    ${MenuItem}:not(:last-of-type)::after {
      content: '';
      margin-left: 2em;
      display: inline-block;
      border-radius: 50%;
      background-color: ${theme.colors.PRIMARY};
      width: 12px;
      height: 12px;
    }
  `}
`

const MenuComponent: React.FC<MenuProps> = ({ items, ...menuProps }) => {
  return (
    <Menu {...menuProps}>
      {items.map((menuItem, index) => (
        <MenuItem key={index} to={menuItem.link}>
          {menuItem.name}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default MenuComponent
