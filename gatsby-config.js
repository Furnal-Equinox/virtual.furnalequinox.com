const urljoin = require('url-join')
const config = require('./site-config')

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://virtual.furnalequinox.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

///==============================================================================================///
///                                    SITE METADATA                                             ///
///==============================================================================================///
module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: {
      name: config.siteTitle
    },
    description: config.siteDescription,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    logo: `${urljoin(config.siteUrl, config.pathPrefix)}/logo.png`
  },

///==============================================================================================///
///                                            META                                              ///
///==============================================================================================///
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        theme_color: config.themeColor,
        background_color: config.backgroundColor,

        display: 'minimal-ui',
        icon: 'static/logo.png'
      }
    },

    /// SEO
    'gatsby-plugin-react-helmet',

    /// Netlify headers and redirects go here.
    'gatsby-plugin-netlify',

    /// Prevent Gatsby from automatically generating hashes for its bundled output files.
    /// See https://community.netlify.com/t/support-guide-making-the-most-of-netlifys-cdn-cache/127
    /// for more information - tl;dr, Gatsby's hashes invalidate Netlify's cache even if Gatsby
    /// generates a new hash for a file that has not changed.
    'gatsby-plugin-remove-fingerprints',

    'gatsby-plugin-sitemap',

    /// robots.txt generation
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
                disallow: '/login',
                crawlDelay: 10
              }
            ]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },



///==============================================================================================///
///                              IMAGES AND STATIC DATA                                          ///
///==============================================================================================///
    'gatsby-plugin-image',    

    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/dealers/`,
        name: 'dealers'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/gallery/`,
        name: 'gallery'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/misc/`,
        name: 'misc'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pdfs/`,
        name: 'pdfs'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/shop/`,
        name: 'shop'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/unity-packages/`,
        name: 'unity-packages'
      }
    },

///==============================================================================================///
///                                          MARKDOWN                                            ///
///==============================================================================================///

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },

    'gatsby-plugin-catch-links',

///==============================================================================================///
///                                           SEARCH                                             ///
///==============================================================================================///

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'dealersSFW',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allMarkdownRemark(
              filter: {
                frontmatter: {
                  layout: { eq: "dealer" }
                  isAdult: { eq: false }
                }
              }
            ) {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  keywords
                }
              }
            }
          }
        `,
        ref: 'slug',

        // What to search against
        index: ['title', 'description', 'keywords'],

        // What results will be represented as
        store: ['id', 'slug', 'title'],

        normalizer: ({ data }) => data.allMarkdownRemark.nodes.map(node => ({
          id: node.id,
          slug: node.fields.slug,
          title: node.frontmatter.title,
          description: node.frontmatter.description
        }))
      }
    },

///==============================================================================================///
///                                         TYPESCRIPT                                           ///
///==============================================================================================///
    'gatsby-plugin-typescript',

    /// GraphQL Type Code Generation
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: './types/graphql-types.d.ts',
        emitSchema: {
          './graphql/website-schema.graphql': true
        }
      }
    },

///==============================================================================================///
///                                          STYLING                                             ///
///==============================================================================================///
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        /// Bootstrap uses a precision of 6.
        sassOptions: {
          precision: 6
        }
      }
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#02bcc7',
        showSpinner: false
      }
    },

///==============================================================================================///
///                                          SECURITY                                            ///
///==============================================================================================///

    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          'connect-src': [
            "'self'", 
            "https://virtual-furnal-equinox.netlify.app"
          ].join(' '),
          'default-src': [
            "'self'"
          ].join(' '),
          'font-src': [
            "'self'",
            "https://fonts.gstatic.com"
          ].join(' '),
          'frame-src': [
            "https://youtube.com",
            "https://www.youtube.com"
          ].join(' '),
          'img-src': [
            "'self'",
            "data:"
          ].join(' '),
          'media-src': "'self'",
          'object-src': "'none'",
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            "https://www.youtube.com"
          ].join(' '),
          'style-src': [
            "'self'",
            "'unsafe-inline'",
            "https://fonts.googleapis.com"
          ].join(' ')
        }
      }
    }
  ]
}
