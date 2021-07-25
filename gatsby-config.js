require('ts-node').register({ files: true });

const { resolve } = require('path')
const { default: site } = require('./config/site');

module.exports = {
  siteMetadata: {
    siteUrl: site.url,
    title: site.tite,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "name": site.title,
        "short_name": site.titleShort,
        "description": site.description,
        "start_url": "/",
        "lang": site.lang,
        "display": "standalone",
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "icons": [
          {
              "src": "/favicons/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/favicons/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
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
        name: 'images',
        path: resolve(__dirname, 'src/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: resolve(__dirname, 'src/pages'),
      },
    },
  ],
}
