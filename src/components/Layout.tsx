import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import Menu, { MenuItemProps } from './Menu'
import { globalStyles } from '../utils/styles'

interface LayoutProps {
  title: ReactNode
  children: ReactNode
}

const menuItems: MenuItemProps[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
]

const Nav = styled.nav`
  text-align: center;
  padding: 0;
  padding-top: 2em;
`
const Header = styled.header`
  padding: 0 10rem;
`
const Main = styled.main`
  padding: 0 10rem;
`
const Footer = styled.footer`
    background: yellow;
    padding; 0 10rem;
`

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Nav>
        <Menu dotted items={menuItems} />
      </Nav>
      <Header>{title}</Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  )
}

export default Layout
