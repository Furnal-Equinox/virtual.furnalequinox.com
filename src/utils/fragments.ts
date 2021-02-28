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
      behance
      deviantart
      discord
      etsy
      facebook
      furaffinity
      github
      instagram
      patreon
      picarto
      pinterest
      steam
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
      friday {
        end
        start
      }
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
        imgFile {
          childImageSharp {
            fluid(maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desc
      }
      dealer
      description
      title
    }
  }
`
