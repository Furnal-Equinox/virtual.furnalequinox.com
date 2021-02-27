const urljoin = require('url-join')
const config = require('./site-config')
require('dotenv').config({
  path: '.env'
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://virtual.furnalequinox.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

/// ==============================================================================================///
///                                    SITE METADATA                                              ///
/// ==============================================================================================///
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

  /// ==============================================================================================///
  ///                                            META                                               ///
  /// ==============================================================================================///
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
    {
      resolve: 'gatsby-plugin-netlify',
      options: {

      }
    },

    /// React Netlify Identity
    {
      resolve: 'gatsby-plugin-netlify-identity-gotrue',
      options: {
        url: 'https://virtual-furnal-equinox.netlify.app'
      }
    },

    /// Prevent Gatsby from automatically generating hashes for its bundled output files.
    /// See https://community.netlify.com/t/support-guide-making-the-most-of-netlifys-cdn-cache/127
    /// for more information - tl;dr, Gatsby's hashes invalidate Netlify's cache even if Gatsby
    /// generates a new hash for a file that has not changed.
    /// Leaving this commented out because it seems to cause problems with the cache.
    /// 'gatsby-plugin-remove-fingerprints',

    'gatsby-plugin-sitemap',

    /// Bundle size analysis
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
        analyzerMode: 'server',
        analyzerPort: '8001'
      }
    },

    /// Google Analytics 4
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID
        ],
        gtagConfig: {
          anonymize_ip: true
        },
        pluginConfig: {
          respectDNT: true
        }
      }
    },

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



    /// ==============================================================================================///
    ///                              IMAGES AND STATIC DATA                                           ///
    /// ==============================================================================================///
    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

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
        path: `${__dirname}/content/images/`,
        name: 'images'
      }
    },

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
        path: `${__dirname}/content/shop/`,
        name: 'shop'
      }
    },

    /// ==============================================================================================///
    ///                                          MARKDOWN                                             ///
    /// ==============================================================================================///

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [

          /// IMAGES
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1rem;'
            }
          },

          /// IFRAMES
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },

          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },

    'gatsby-plugin-catch-links',

    /// ==============================================================================================///
    ///                                           SEARCH                                              ///
    /// ==============================================================================================///

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
                  dealer
                  description
                  keywords
                }
              }
            }
          }
        `,
        ref: 'slug',

        // What to search against
        index: ['title', 'dealer', 'description', 'keywords'],

        // What results will be represented as
        store: ['id', 'slug', 'title', 'dealer'],

        normalizer: ({ data }) => data.allMarkdownRemark.nodes.map(node => ({
          id: node.id,
          slug: node.fields.slug,
          title: node.frontmatter.title,
          dealer: node.frontmatter.dealer,
          description: node.frontmatter.description
        }))
      }
    },

    /// ==============================================================================================///
    ///                                         TYPESCRIPT                                            ///
    /// ==============================================================================================///
    'gatsby-plugin-typescript',

    /// GraphQL Type Code Generation
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts'
      }
    },

    /// ==============================================================================================///
    ///                                          STYLING                                              ///
    /// ==============================================================================================///
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

    /// {
    ///   resolve: 'gatsby-plugin-purgecss',
    ///   options: {
    ///     develop: true,
    ///     purgeOnly: ['bootstrap/']
    ///   }
    /// }

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#02bcc7',
        showSpinner: false
      }
    },

    /// ==============================================================================================///
    ///                                          SECURITY                                             ///
    /// ==============================================================================================///

    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          'connect-src': "'self' https://virtual-furnal-equinox.netlify.app https://db.fauna.com https://vimeo.com https://www.google-analytics.com https://www.googletagmanager.com",
          'default-src': "'self' https://player.vimeo.com",
          'font-src': "'self' fonts.gstatic.com",
          'img-src': "'self' data: www.googletagmanager.com data: www.google-analytics.com data: http.cat data: www.netlify.com",
          'script-src': "'self' 'unsafe-eval' www.google-analytics.com www.googletagmanager.com player.vimeo.com",
          'style-src': "'self' 'unsafe-inline' fonts.googleapis.com"
        }
      }
    }
  ]
}
