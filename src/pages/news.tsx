import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'
import Post from '../templates/post/post'
import { BlogQueryQuery, PostBySlugQuery } from '../../types/graphql-types'

interface Props {
  data: BlogQueryQuery
  location: Location
}

const Blog: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts

  return (
    <Layout location={location}>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Meta customDescription='Blog posts' />
      <div className='container'>
        {posts.map(post =>
          <section className='p-3 mx-3 my-5 bg-light text-left rounded' key={post?.post?.fields?.slug}>
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
          </section>
        )}
      </div>
    </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery {
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