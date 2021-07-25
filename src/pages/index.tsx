import React from 'react'
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';
import { StaticImage as Image } from 'gatsby-plugin-image';
import theme from '../../config/theme';
import { Github, LinkedIn, Twitter } from '../components/icons';

import '../fonts/fonts.css';

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    color: #1F2126;
  }
  
  h1 {
    font-family: 'Noto Sans';
    font-size: 64px;
    margin-bottom: 0;
  }
`

interface ContainerProps {
  screen?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  height: ${props => props.screen ? '100vh' : 'inherit'};
`

const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -2rem;
  padding: 0 6em;
`

const Aside = styled.aside`
  display: flex;
  flex-grow: 1;
  width: 40%;
  overflow: hidden;
  align-items: flex-end;
  justify-content: flex-end;
`

const Main = styled.main`
  position: relative;
  flex-grow: 1;
  width: 60%;
`

const SubHeader = styled.p`
  color: ${theme.colors.DARK_GREY}
`

interface MenuProps {
  dotted?: boolean;
  link?: boolean;
}

const MenuItem = styled.li`
  display: inline-block;
  margin: 0 1em;

`

const Menu = styled.ul<MenuProps>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-weight: 600;

  ${props => props.dotted && `
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

  ${props => props.link && `
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
  bottom: .5em;
  text-align: center;
  display: inline-block;
  width: 100%;
`

export default () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container screen>
        <Aside>
          <Image 
            src="../images/sam.png"
            loading='eager'
            placeholder='tracedSVG'
            alt='Picture of Samuel Amoah' />
        </Aside>
        <Main>
          <Content>
            <h1>Hello! 👋🏾</h1>
            <SubHeader>
              I'm Samuel Amoah. I'm a software engineer passionate about Javascript, Software Architecture and Design Patterns.
            </SubHeader>
              <Menu dotted>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Projects</MenuItem>
              </Menu>
          </Content>
          <Footer>
              <Menu link>
                <MenuItem><Twitter /></MenuItem>
                <MenuItem><Github /></MenuItem>
                <MenuItem><LinkedIn /></MenuItem>
              </Menu>
          </Footer>
        </Main>
      </Container>
    </>
  )
}

