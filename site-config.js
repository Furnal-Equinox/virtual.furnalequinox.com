const config = {
  siteTitle: 'Pixel Purrfect', // Site title.
  siteTitleShort: 'Pixel Purrfect', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Pixel Purrfect', // Alternative site title for SEO.
  siteLogo: '/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://virtual.furnalequinox.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'The web platform for Furnal Equinox\'s Pixel Purrfect virtual convention', // Website description used for RSS feeds/meta description tag.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: {
    rootWebsite: 'https://furnalequinox.com/',
    parentWebsite: 'https://anthroeventsont.org/',
    facebook: 'https://www.facebook.com/FurnalEquinox/',
    flickr: 'https://www.flickr.com/photos/furnalequinox/',
    twitter: 'https://twitter.com/furnalequinox',
    youtube: 'https://www.youtube.com/user/FurnalEquinox'
  },
  copyright: `Copyright ${new Date().getFullYear()} Anthropomorphic Events of Ontario`, // Copyright string for the footer of the website and RSS feed.
  themeColor: '#b821e0', // Used for setting manifest and progress theme colors.
  backgroundColor: '#030613' // Used for setting manifest background color.
}

module.exports = config
