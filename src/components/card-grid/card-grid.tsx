import React from 'react'
import { GatsbyImageSharpFluidFragment, MarkdownRemark, MarkdownRemarkFields, MarkdownRemarkFrontmatter, Maybe } from '../../../types/graphql-types'
import DealerCard from '../cards/dealer-card/dealer-card'

interface Props {
  data: Array<{
    dealer: (Pick<MarkdownRemark, 'id' | 'html'> & {
      fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>
      frontmatter?: Maybe<(Pick<MarkdownRemarkFrontmatter, 'title' | 'dealer' | 'description' | 'kind' | 'isPremium' | 'path'> & {
        banner?: Maybe<{
          childImageSharp?: Maybe<{
            fluid?: Maybe<GatsbyImageSharpFluidFragment>
          }>
        }>
      })>
    })
  }>
}

const CardGrid: React.FC<Props> = ({ data }: Props) => {
  const cards = data.map(dealer =>
    <div 
      className={`${(dealer?.dealer?.frontmatter?.isPremium ?? false) ? 'col-lg-12' : 'col-lg-6'}`} 
      key={dealer?.dealer?.fields?.slug ?? '#'}>
      <DealerCard
        title={dealer?.dealer?.frontmatter?.title ?? undefined}
        dealer={dealer?.dealer?.frontmatter?.dealer ?? undefined}
        description={dealer?.dealer?.frontmatter?.description ?? undefined}
        banner={dealer?.dealer?.frontmatter?.banner?.childImageSharp?.fluid?.src ?? undefined}
        slug={dealer?.dealer?.fields?.slug ?? undefined}
      />
    </div>
  )
  
  return (
    <div className='container'>
      <div className='row'>
        { cards }
      </div>
    </div>
  )
}

export default CardGrid
