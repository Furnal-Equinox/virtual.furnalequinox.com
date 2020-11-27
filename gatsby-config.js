///==============================================================================================///
///                                    SITE METADATA                                             ///
///==============================================================================================///
module.exports = {
  siteMetadata: {
    title: 'Furnal Equinox',
    author: {
      name: 'Furnal Equinox',
    },
    description: 'The web platform for Furnal Equinox\'s virtual convention',
    siteUrl: 'https://www.virtual.furnalequinox.com',
  },

///==============================================================================================///
///                                            META                                              ///
///==============================================================================================///
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Furnal Equinox',
        short_name: 'Furnal Equinox',
        description: 'The web platform for Furnal Equinox\'s virtual convention',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    'gatsby-plugin-react-helmet',
    
    'gatsby-plugin-netlify',

    'gatsby-plugin-sitemap',

    'gatsby-plugin-offline',


///==============================================================================================///
///                              IMAGES AND STATIC DATA                                          ///
///==============================================================================================///
    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },

///==============================================================================================///
///                                          MARKDOWN                                            ///
///==============================================================================================///

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
              wrapperStyle: 'margin-bottom: 1rem;',
            },
          },
          
          /// IFRAMES
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },

          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },

    'gatsby-plugin-catch-links',


///==============================================================================================///
///                                           SEARCH                                             ///
///==============================================================================================///
    
    //TODO

///==============================================================================================///
///                                         TYPESCRIPT                                           ///
///==============================================================================================///
    'gatsby-plugin-typescript',

    /// GraphQL Type Code Generation
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },

///==============================================================================================///
///                                          STYLING                                             ///
///==============================================================================================///
    'gatsby-plugin-sass'
  ]
}
