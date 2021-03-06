require('ts-node').register({ files: true })

const { default: site } = require('./config/site')

module.exports = {
  siteMetadata: {
    siteUrl: site.url,
    title: site.title,
    lang: site.lang,
    image: site.ogImage,
    keywords: site.keywords,
    description: site.description,
    twitterLink: site.twitter,
    githubLink: site.github,
    linkedInLink: site.linkedIn,
    bio: site.bio,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: site.title,
        short_name: site.titleShort,
        description: site.description,
        start_url: '/',
        lang: site.lang,
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icon: 'static/favicons/android-chrome-512x512.png',
        icon_options: {
          purpose: 'any maskable',
        },
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
  ],
}
