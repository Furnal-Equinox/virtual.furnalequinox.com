import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

import Button from '../../components/button/button'
import Badge from '../../components/badge/badge'

import './style.scss'
import Layout from '../../components/layout/layout'
import Meta from '../../components/meta/meta'

const getDescription = (content: string): string => {
  const body = content.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  )
  if (body.match('<!--more-->')) {
    const [description] = body.split('<!--more-->')
    return description
  }
  return body
}

interface Props {
  data: any
}

const Post: React.FC<Props> = ({ data }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const image = post?.image ?? null

  return (
    <Layout location={location}>
      <Meta
          title={post?.frontmatter?.title || ''}
          site={data.site?.meta}
      />
      <div className='article' key={postNode.slug}>
        <div className='container'>
          <div className='info'>
            <Link style={{ boxShadow: 'none' }} to={postNode.slug}>
              <h1>{post?.title}</h1>
              <time dateTime={post?.date}>{post?.date}</time>
            </Link>
            <Badge label={post?.category || ''} primary={true} />
            {(post?.tags || []).map((tag, index) => (
              <Badge label={tag as string} primary={false} key={index} />
            ))}
          </div>
          <div className='content'>
            <p>{post?.description}</p>
            {image?.childImageSharp?.fluid && (
              <Img
                fluid={image.childImageSharp.fluid as FluidObject}
                style={{ display: 'block', margin: '0 auto' }}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "YYYY/MM/DD")
        category
        tags
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
`

export default Post
