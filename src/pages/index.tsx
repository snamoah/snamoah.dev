import React from 'react'
import styled from '@emotion/styled';
import { StaticImage as Image } from 'gatsby-plugin-image';
import { css, Global } from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
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
  background: orange;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
`

const imageStyles = css`
  
`

export default () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container screen>
        <Aside>
          <Image 
            src="../images/sam.png"
            css={imageStyles}
            loading='eager'
            placeholder='tracedSVG'
            alt='Picture of Samuel Amoah' />
        </Aside>
        <Main>
          <Content>
            <h1>Hello! 👋🏾</h1>
            <p>I'm Samuel Amoah. I'm a software engineer passionate about Javascript, Software Architecture and Design Patterns.</p>
            <nav>
              <ul>
                <li>Blog</li>
                <li>Projects</li>
              </ul>
            </nav>
          </Content>
          <Footer>
              <ul>
                <li>Twitter</li>
                <li>Github</li>
                <li>LinkedIn</li>
              </ul>
          </Footer>
        </Main>
      </Container>
    </>
  )
}

