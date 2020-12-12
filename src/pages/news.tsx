import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'
import { NewsQueryQuery } from '../../types/graphql-types'

interface Props {
  data: NewsQueryQuery
  location: Location
}

const News: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts

  return (
    <Layout location={location}>
      <Helmet title={`News | ${config.siteTitle}`} />
      <Meta customDescription='News posts' />
      <div>
        <section className='container'>
          {posts.map(post =>
            <div className='p-3 mx-3 my-5 bg-light text-left rounded-3' key={post?.post?.fields?.slug}>
              <div className='col'>
                <h1>{post?.post?.frontmatter?.title ?? ''}</h1>
                <p className='lead'>{post?.post?.frontmatter?.description}</p>
                <a 
                  className='btn btn-primary' 
                  href={`.${post?.post?.fields?.slug ?? ''}`}
                >
                  Read
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}

export default News

export const newsQuery = graphql`
  query NewsQuery {
    site {
      siteMetadata {
        title
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      posts: edges {
        post: node {
          html
          fields {
            slug
          }
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
