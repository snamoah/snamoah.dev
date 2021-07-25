import React from 'react'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'
import { StaticImage as Image } from 'gatsby-plugin-image'
import theme from '../../config/theme'
import { Github, LinkedIn, Twitter } from '../components/icons'

import '../fonts/fonts.css'
import { Device } from '../utils/breakpoints'

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    color: #1f2126;
  }

  h1 {
    font-family: 'Noto Sans';
    font-size: 48px;
    margin-bottom: 0;
  }

  ${Device.DESKTOP} {
    h1 {
      font-family: 64px;
    }
  }
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  ${Device.DESKTOP} {
    height: 100vh;
  }

  ${Device.NOT_DESKTOP} {
    flex-direction: column;
  }
`

const Aside = styled.aside`
  display: flex;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  align-items: flex-end;
  justify-content: flex-end;
  ${Device.DESKTOP} {
    width: 40%;
  }

  ${Device.NOT_DESKTOP} {
    align-items: center;
    justify-content: center;
  }
`

const Avatar = styled.div`
  display: none;
  position: relative;
  width: 30%;
  height: 30%;
  background-color: ${theme.colors.LIGHT_GREY};
  clip-path: circle(50%);
`

const Main = styled.main`
  position: relative;
  flex-grow: 4;
  ${Device.DESKTOP} {
    width: 60%;
    flex-grow: 1;
  }
`

const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -2rem;
  padding: 0 6em;

  ${Device.MOBILE} {
    padding: 0 2em;
    text-align: center;
  }
`

const SubHeader = styled.p`
  color: ${theme.colors.DARK_GREY};
`

interface MenuProps {
  dotted?: boolean
  link?: boolean
}

const MenuItem = styled.li`
  display: inline-block;
  margin: 0 1em;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Menu = styled.ul<MenuProps>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-weight: 600;

  ${(props) =>
    props.dotted &&
    `
    ${MenuItem}:not(:last-child)::after {
      content: '';
      margin-left: 2em;
      display: inline-block;
      border-radius: 50%;
      background-color: ${theme.colors.PRIMARY};
      width: 12px;
      height: 12px;
    }
  `}

  ${(props) =>
    props.link &&
    `
    ${MenuItem} {
      cursor: pointer;
    }

    ${MenuItem}:hover {
      color: ${theme.colors.DARK_GREY};
    }
  `}
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0.5em;
  text-align: center;
  display: inline-block;
  width: 100%;
`

const IndexPage = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <Aside>
          <Image
            src="../images/sam.png"
            loading="eager"
            objectFit="contain"
            placeholder="tracedSVG"
            css={css`
              ${Device.NOT_DESKTOP} {
                display: none;
              }
            `}
            alt="Picture of Samuel Amoah"
          />
          <Avatar
            css={css`
              ${Device.NOT_DESKTOP} {
                display: inline-block;
              }
            `}
          >
            <Image
              src="../images/sam_mobile.png"
              loading="eager"
              placeholder="tracedSVG"
              alt="Picture of Samuel Amoah"
            />
          </Avatar>
        </Aside>
        <Main>
          <Content>
            <h1>
              Hello!{' '}
              <span role="img" aria-label="Waving Hand">
                👋🏾
              </span>
            </h1>
            <SubHeader>
              I'm Samuel Amoah. I'm a software engineer passionate about
              Javascript, Software Architecture and Design Patterns.
            </SubHeader>
            <Menu dotted>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Projects</MenuItem>
            </Menu>
          </Content>
          <Footer>
            <Menu link>
              <MenuItem>
                <Twitter />
              </MenuItem>
              <MenuItem>
                <Github />
              </MenuItem>
              <MenuItem>
                <LinkedIn />
              </MenuItem>
            </Menu>
          </Footer>
        </Main>
      </Container>
    </>
  )
}

export default IndexPage;
