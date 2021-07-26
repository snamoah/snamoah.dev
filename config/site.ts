const siteConfig = {
  title: 'Samuel Amoah',
  titleShort: 'snamoah',
  url: process.env.ROOT_URL || 'https://snamoah.dev',
  logo: 'src/images/logo.svg',
  ogImage: '/banner.png',
  description:
    'Visit my website and take a look at some of my articles on Javascript, Software Architecture and Design Patterns.',
  lang: 'en', // Language Tag on <html> element
  keywords: [
    'Software Engineer',
    'Software Architecture',
    'Design Patterns',
    'JavaScript Training',
    'TypeScript Training',
  ],

  //author
  bio: `
    I'm Samuel Amoah. I'm a software engineer passionate about
    Javascript, Software Architecture and Design Patterns.
  `,

  // social
  twitter: 'https://twitter.com/snamoah',
  github: 'https://github.com/snamoah',
  linkedIn: 'https://linkedin.com/in/snamoah',
} as const

export default siteConfig
