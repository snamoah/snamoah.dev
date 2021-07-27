import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import theme from '../../config/theme'
import Link from '../components/Link'
import { Github } from '../components/icons'
import { Device } from '../utils/breakpoints'

interface Project {
  name: string
  description: string
  githubLink: string
  previewLink?: string
}

const projects: Project[] = [
  {
    name: 'Retrospective',
    description: 'A simple app to manage retrospective meetings within teams',
    githubLink: 'https://github.com/snamoah/retrospective',
    previewLink: 'https://retrospective-seven.vercel.app/',
  },
  {
    name: 'PDF Editor',
    description:
      'PDF Editor is an app that allows you to add images, text and drawing to pdfs directly from your browser.',
    githubLink: 'https://github.com/snamoah/react-pdf-editor',
    previewLink: 'https://snamoah.github.io/react-pdf-editor',
  },
  {
    name: 'React Date-Time Range Picker',
    description: 'A react component for selecting range of dates and times',
    githubLink: 'https://github.com/snamoah/react-datetime-range-picker',
  },
  {
    name: 'branchio-sdk',
    description: 'Un-official Node.js SDK for branch.io',
    githubLink: 'https://github.com/snamoah/branchio-sdk',
  },
  {
    name: 'autopilot-sdk',
    description: 'Node.js SDK for https://autopilothq.com',
    githubLink: 'https://github.com/snamoah/autopilot-sdk',
  },
]

const ProjectCard = styled.article`
  position: relative;
  height: 140px;
  border-radius: 5px;
  background-color: ${theme.colors.GREY};
  margin-bottom: 1em;
  padding: 1em;

  ${Device.DESKTOP} {
    &:not(:nth-of-type(3n + 3)) {
      margin-right: 1em;
    }
  }

  ${Device.NOT_DESKTOP} {
    &:not(:nth-of-type(2n + 2)) {
      margin-right: 1em;

      ${Device.MOBILE} {
        margin-right: 0;
      }
    }
  }
`

const Container = styled.section`
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${Device.NOT_DESKTOP} {
    grid-template-columns: 1fr 1fr;
  }

  ${Device.MOBILE} {
    grid-template-columns: none;
  }
`

const Header = styled(Link)`
  font-weight: 600;
  font-size: 1em;
`

const Body = styled.p`
  font-size: 0.8em;
`

const Actions = styled.div`
  position: absolute;
  bottom: 1em;
  display: flex;
  margin-top: 1em;
`

const Projects: React.FC = () => {
  return (
    <>
      <Layout
        title={
          <h1>
            Projects{' '}
            <span role="img" aria-label="Technologist: Medium-Dark Skin Tone">
              🧑🏾‍💻
            </span>
          </h1>
        }
      >
        <Container>
          {projects.map((project, index) => {
            const landingPageLink = project.previewLink || project.githubLink
            return (
              <ProjectCard key={index}>
                <Header to={landingPageLink}>{project.name}</Header>
                <Body>{project.description}</Body>

                <Actions>
                  <Link to={project.githubLink}>
                    <Github />
                  </Link>
                </Actions>
              </ProjectCard>
            )
          })}
        </Container>
      </Layout>
    </>
  )
}

export default Projects
