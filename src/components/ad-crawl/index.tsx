import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Carousel from 'react-bootstrap/Carousel'

import placeholderAdBanner from '../../../content/images/VFE_ad_banner.png'


const AdCrawl: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.AdCrawlQueryQuery>(adCrawlQuery)
  const dealers = data?.remark?.dealers

  return (
    <div className='mx-auto' style={{ maxWidth: '728px', maxHeight: '100px' }}>
      <Carousel indicators={false} interval={6000}>
        {dealers?.map(({ dealer }) =>
          dealer?.frontmatter?.gifs?.map(gif => 
            <Carousel.Item>
              <img
                title={gif?.desc ?? 'No description'}
                src={gif?.imgFile?.publicURL ?? placeholderAdBanner}
                className='border border-light d-block img-fluid'
              />
            </Carousel.Item>
          )  
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
          frontmatter {
            title
            gifs {
              imgFile {
                publicURL
              }
              desc
            }
          }
        }
      }
    }
  }
`