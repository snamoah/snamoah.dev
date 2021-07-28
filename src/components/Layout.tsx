import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'
import Menu, { MenuItemProps } from './Menu'
import { globalStyles } from '../utils/styles'
import { Device } from '../utils/breakpoints'

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
    link: '/projects/',
  },
  {
    name: 'Blog',
    link: '/blog/',
  },
]

const responsiveLayout = css`
  padding: 0 15rem;

  ${Device.NOT_DESKTOP} {
    padding: 0 5rem;
  }

  ${Device.MOBILE} {
    padding: 0 2rem;
  }
`

const Nav = styled.nav`
  text-align: center;
  padding: 0;
  padding-top: 2em;
`
const Header = styled.header`
  ${responsiveLayout}
  margin-bottom: 2em;
`
const Main = styled.main`
  ${responsiveLayout}
`
const Footer = styled.footer`
  text-align: center;
  ${responsiveLayout}
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
