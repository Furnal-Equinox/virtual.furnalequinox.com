const config = {
  siteTitle: 'Furnal Equinox', // Site title.
  siteTitleShort: 'Furnal Equinox', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Furnal Equinox', // Alternative site title for SEO.
  siteLogo: '/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://virtual.furnalequinox.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'The web platform for Furnal Equinox\'s virtual convention', // Website description used for RSS feeds/meta description tag.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.

  copyright: 'Copyright © 2020. Furnal Equinox', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#673ab7', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff' // Used for setting manifest background color.
};

module.exports = config;