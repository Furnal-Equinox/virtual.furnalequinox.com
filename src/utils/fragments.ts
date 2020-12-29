import { graphql } from 'gatsby'

/*
Example usage:

query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        ...DealerTile
        frontmatter {
          ...SocialLinks
          ...StreamTimes
        }
      }
    }
  }
}
*/

export const gqlSocialLinks = graphql`
  fragment SocialLinks on MarkdownRemarkFrontmatter {
    social {
      steam
      behance
      deviantart
      discord
      etsy
      facebook
      furaffinity
      github
      instagram
      picarto
      pinterest
      telegram
      tumblr
      twitch
      twitter
      youtube
    }
  }
`

export const gqlStreamTimes = graphql`
  fragment StreamTimes on MarkdownRemarkFrontmatter {
    streaming {
      saturday {
        end
        start
      }
      sunday {
        end
        start
      }
    }
  }
`

export const gqlDealerTile = graphql`
  fragment DealerTile on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      banner {
        childImageSharp {
          fluid(maxHeight: 250) {
            src
          }
        }
      }
      dealer
      description
      title
    }
  }
`