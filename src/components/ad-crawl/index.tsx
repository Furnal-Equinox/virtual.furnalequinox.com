import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Carousel from 'react-bootstrap/Carousel'

import placeholderAdBanner from '../../../content/images/VFE_ad_banner.png'
import { GatsbyImage, getImage, getImageData } from 'gatsby-plugin-image'

const AdCrawl: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.AdCrawlQueryQuery>(adCrawlQuery)
  const dealers = data?.remark?.dealers

  return (
    <div className='mx-auto' style={{ maxWidth: '728px', maxHeight: '100px' }}>
      <Carousel indicators={false} interval={6000}>
        {dealers?.map(({ dealer }) =>
          dealer?.frontmatter?.gifs?.map(gif => {
            const image = getImage(gif?.imgFile?.childImageSharp?.gatsbyImageData)

            return (
              <Carousel.Item>
                <Link
                  title={`Link to ${dealer?.frontmatter?.title ?? "this ad's dealer"}'s page on this website.`}
                  to={`/dealers${dealer?.fields?.slug ?? ''}`}
                  tabIndex={0}
                >
                  <GatsbyImage
                    alt={gif?.desc ?? 'An ad from one of our dealers'}
                    image={image ?? getImageData(placeholderAdBanner)}
                    className='border border-light d-block img-fluid'
                  />
                </Link>
              </Carousel.Item>
            )
          })
        )}
      </Carousel>
    </div>
  )
}

export default AdCrawl

export const adCrawlQuery = graphql`
  query AdCrawlQuery {
    remark: allMarkdownRemark(
      filter: {
        frontmatter: { 
          layout: {eq: "dealer" },
          isAdult: {eq: false}
        }
      }, 
      sort: {
        fields: [frontmatter___title], 
        order: ASC
      }
    ) {
      dealers: edges {
        dealer: node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            gifs {
              imgFile {
                childImageSharp {
                  ...MediumImage
                }
              }
              desc
            }
          }
        }
      }
    }
  }
`
