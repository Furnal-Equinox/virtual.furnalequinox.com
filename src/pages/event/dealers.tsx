import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import {
  DealersIndexQueryQuery,
  GatsbyImageSharpFluidFragment,
  MarkdownRemark,
  MarkdownRemarkFields,
  MarkdownRemarkFrontmatter,
  Maybe
} from '../../../types/graphql-types'

import {
  Dealer,
  DealerCardGrid,
  Jumbotron,
  Link,
  Meta,
  SearchBar,
  SearchParams,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

import config from '../../../site-config'

import { sample } from '../../utils/tools'

import { useFlexSearch } from 'react-use-flexsearch'
import * as queryString from 'query-string'

interface GatsbyDealer {
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
}

interface Props extends RouteComponentProps {
  data: DealersIndexQueryQuery
}

const DealersIndex: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(DealersDashboard)

  return (
    <Event location={location}>
      <Helmet title={`Dealers Den | ${config.siteTitle}`} />
      <Meta customDescription='Dealers Den' />
      <div>
        <Content
          data={data}
          location={location}
          navigate={navigate}
          callbackPath='/event/dealers/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default DealersIndex

export const dealersQuery = graphql`
  query DealersIndexQuery {
    localSearchDealersSfw {
      index
      store
    }
    remark: allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: {eq: "dealer"}, 
          isAdult: {eq: false}
        }
      }, 
      sort: {
        fields: [frontmatter___title], 
        order: ASC
      }
    ) {
      group(field: frontmatter___isPremium) {
        fieldValue
        dealers: edges {
          dealer: node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              dealer
              description
              isPremium
              banner {
                childImageSharp {
                  fluid(maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const DealersDashboard: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const dealerGroups = data.remark.group
  const premiumDealers = dealerGroups[1].fieldValue === 'true' ? dealerGroups[1].dealers : []
  const regularDealers = dealerGroups[0].fieldValue === 'false' ? dealerGroups[0].dealers : []
  const allDealers = premiumDealers?.concat(regularDealers ?? []) ?? []

  const index = data.localSearchDealersSfw?.index
  const store = data.localSearchDealersSfw?.store

  const { query } = queryString.parse(location?.search ?? '')
  const [searchQuery, setSearchQuery] = React.useState(query as SearchParams)

  const results: Dealer[] = useFlexSearch(searchQuery, index, store)

  const getResultsTitles = (results: Dealer[]): string[] =>
    results.map(result => result?.title ?? '')

  const fetchFullResults = (titles: string[], store: GatsbyDealer[]): GatsbyDealer[] =>
    store.filter(dealer => titles.includes(dealer.dealer.frontmatter?.title ?? ''))

  const dealerReducer = (dealer: GatsbyDealer): Dealer => ({
    title: dealer.dealer.frontmatter?.title,
    dealer: dealer.dealer.frontmatter?.dealer,
    description: dealer.dealer.frontmatter?.description,
    banner: dealer.dealer.frontmatter?.banner?.childImageSharp?.fluid?.src,
    slug: dealer.dealer.fields?.slug,
    isPremium: dealer.dealer.frontmatter?.isPremium
  })

  const reducedRegularDealers: Dealer[] | undefined = regularDealers?.map(
    (dealer: GatsbyDealer) => dealerReducer(dealer)
  )

  const reducedPremiumDealers: Dealer[] | undefined = premiumDealers?.map(
    (dealer: GatsbyDealer) => dealerReducer(dealer)
  )

  return (
    <>
      <Jumbotron
        title='Premium Dealers (Live Data)'
        subtitle='Check out all these cool dealers!'
      />
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col-lg-6'>
            <TextCard>
              <h2>Feeling lucky?</h2>
              <p className='lead'>
                Click this button to check out a random dealer!
              </p>
              <Link
                label={'Let\'s go!'}
                to={`.${
                  sample(allDealers as GatsbyDealer[]).dealer.fields?.slug ?? ''
                }`}
                size='lg'
              />
            </TextCard>
          </div>
          <div className='col-lg-6'>
            <TextCard>
              <h2>Have something in mind?</h2>
              <p className='lead'>
                Use the search bar!
              </p>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                navigate={navigate}
              />
            </TextCard>
          </div>
        </div>
      </Section>
      {results.length > 0 && (
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <h2>SEARCH RESULTS</h2>
            <DealerCardGrid data={
              fetchFullResults(getResultsTitles(results), premiumDealers)
                .map(result => dealerReducer(result))
              }
            />
            <DealerCardGrid data={
              fetchFullResults(getResultsTitles(results), regularDealers)
                .map(result => dealerReducer(result))
              }
            />
          </TextCard>
        </Section>
      )}
      <Section pos='middle'>
        <DealerCardGrid data={reducedPremiumDealers ?? []} />
      </Section>
      <Jumbotron
        title='Regular Dealers (Live Data)'
        subtitle='Check out all these cool dealers!'
      />
      <Section pos='last'>
        <DealerCardGrid data={reducedRegularDealers ?? []} />
      </Section>
    </>
  )
}
