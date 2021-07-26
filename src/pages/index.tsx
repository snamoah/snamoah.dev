import React from 'react'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage as Image } from 'gatsby-plugin-image'
import theme from '../../config/theme'
import Seo from '../components/Seo'
import Menu from '../components/Menu'
import { Device } from '../utils/breakpoints'
import { globalStyles } from '../utils/styles'
import { GraphqlQuery } from '../types/graphql'
import { Github, LinkedIn, Twitter } from '../components/icons'

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

const Footer = styled.footer`
  position: absolute;
  bottom: 0.5em;
  text-align: center;
  display: inline-block;
  width: 100%;
`

type IndexPageQuery = GraphqlQuery<{
  bio: string
  twitterLink: string
  githubLink: string
  linkedInLink: string
}>

const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        bio
        twitterLink
        githubLink
        linkedInLink
      }
    }
  }
`

const IndexPage = () => {
  const {
    site: { siteMetadata: site },
  } = useStaticQuery<IndexPageQuery>(query)

  return (
    <>
      <Seo />
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
              <span role="img" aria-label="Waving Hand: Medium-Dark Skin Ton">
                👋🏾
              </span>
            </h1>
            <SubHeader>{site.bio}</SubHeader>
            <Menu
              dotted
              items={[
                {
                  name: 'Blog',
                  link: '/blog',
                },
                {
                  name: 'Projects',
                  link: '/projects',
                },
              ]}
            />
          </Content>
          <Footer>
            <Menu
              items={[
                {
                  name: <Twitter />,
                  link: site.twitterLink,
                },
                {
                  name: <Github />,
                  link: site.githubLink,
                },
                {
                  name: <LinkedIn />,
                  link: site.linkedInLink,
                },
              ]}
            />
          </Footer>
        </Main>
      </Container>
    </>
  )
}

export default IndexPage
