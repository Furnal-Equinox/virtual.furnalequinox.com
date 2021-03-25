import { graphql } from 'gatsby'

export const smallImageFragment = graphql`
  fragment SmallImage on ImageSharp {
    gatsbyImageData(
      layout: CONSTRAINED
      width: 250
      placeholder: BLURRED
      formats: [AUTO, WEBP]
    )
  }
`

export const dealerCardImageFragment = graphql`
  fragment DealerCardImage on ImageSharp {
    gatsbyImageData(
      layout: CONSTRAINED
      height: 360
      placeholder: BLURRED
      formats: [AUTO, WEBP]
    )
  }
`

export const mediumImageFragment = graphql`
  fragment MediumImage on ImageSharp {
    gatsbyImageData(
      layout: CONSTRAINED
      width: 768
      placeholder: BLURRED
      formats: [AUTO, WEBP]
    )
  }
`

export const largeImageFragment = graphql`
  fragment LargeImage on ImageSharp {
    gatsbyImageData(
      layout: CONSTRAINED
      width: 1140
      placeholder: BLURRED
      formats: [AUTO, WEBP]
    )
  }
`

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
      description
      title
    }
  }
`
