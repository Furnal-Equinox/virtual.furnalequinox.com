import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img, { FluidObject } from 'gatsby-image'
import { PostBySlugQuery } from '../../../types/graphql-types'
import config from '../../../site-config'
import './style.scss'

import {
  Badge,
  Meta
} from '../../components'

import {
  Layout,
  makePrivateContent,
  Section
} from '../../layouts'

const getDescription = (content: string): string => {
  const body = content.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  )
  if (body.match('<!--more-->') !== null) {
    const [description] = body.split('<!--more-->')
    return description
  }
  return body
}

interface Props extends RouteComponentProps {
  data: PostBySlugQuery
}

const Post: React.FC<Props> = ({ data, location }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter

  const Content = makePrivateContent(PostContent)

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${post?.title ?? ''} | ${config.siteTitle}`}</title>
      </Helmet>
      <Meta
        postPath={postNode?.fields?.slug ?? ''}
        postNode={postNode}
        postSEO
      />
      <Content
        data={data}
        location={location}
        callbackPath={`/news${postNode?.fields?.slug ?? '/'}`}
        allowedRoles={['free']}
      />
    </Layout>
  )
}

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
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

const PostContent: React.FC<Props> = ({ data, location }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter
  const image = post?.image ?? null
  const html = postNode?.html ?? ''

  return (
    <>
      <div className='article' key={postNode?.fields?.slug ?? ''}>
        <div className='container'>
          <div className='info'>
            <Link style={{ boxShadow: 'none' }} to={'.'}>
              <h1>{post?.title ?? ''}</h1>
              <time dateTime={post?.date ?? ''}>{post?.date ?? ''}</time>
            </Link>
            <Badge label={post?.category ?? ''} primary={true} />
            {(post?.tags ?? []).map((tag: string, index?: number) => (
              <Badge label={tag} primary={false} key={index} />
            ))}
          </div>
          <div className='content'>
            <p>{post?.description ?? ''}</p>
            {image?.childImageSharp?.fluid !== undefined
              ? <Img
                fluid={image.childImageSharp.fluid as FluidObject}
                style={{ display: 'block', margin: '0 auto' }}
              />
              : <></>
            }
          </div>
          <div
            className='content'
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
        </div>
      </div>
    </>
  )
}
