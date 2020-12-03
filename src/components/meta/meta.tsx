import React from 'react'
import { Helmet } from 'react-helmet'
import urljoin from "url-join";

import config from '../../../site-config'

interface Props {
  postNode: any
  postPath: any
  postSEO: any
  customDescription?: string
}

const Meta: React.FC<any> = ({ postNode, postPath, postSEO, customDescription }: Props) => {
  let title: string
  let description: string
  let image: string = config.siteLogo
  let postURL: string

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title

    description = 
      postMeta.description
        ? postMeta.description
        : postNode.excerpt

    postURL = urljoin(config.siteUrl, config.pathPrefix, postPath)
  } else {
    title = config.siteTitle
    description = customDescription || config.siteDescription
  }

  const getImagePath = (imageURI: string) => {
    if (
      !imageURI.match(
        `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
      )
    )
      return urljoin(config.siteUrl, config.pathPrefix, imageURI);

    return imageURI;
  };

  image = getImagePath(image);

  const authorJSONLD = {
    "@type": "Person",
    name: config.userName,
    email: config.userEmail,
    address: config.userLocation,
  };

  const logoJSONLD = {
    "@type": "ImageObject",
    url: getImagePath(config.siteLogo),
  };

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: { "@type": "ImageObject", url: image },
        author: authorJSONLD,
        publisher: {
          ...authorJSONLD,
          "@type": "Organization",
          logo: logoJSONLD,
        },
        description,
      }
    )
  }
  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : config.siteUrl} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}
export default Meta
