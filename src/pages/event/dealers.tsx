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

import Button from 'react-bootstrap/Button'

import { Link } from 'gatsby'

import config from '../../../site-config'

import { sample } from '../../utils/tools'

import { useFlexSearch } from 'react-use-flexsearch'
import * as queryString from 'query-string'

interface Props extends RouteComponentProps {
  data: DealersIndexQueryQuery
}

const DealersIndex: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(DealersDashboard)

  return (
    <Event location={location} navigate={navigate}>
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
                imgFile {
                  childImageSharp {
                    fluid(maxHeight: 360) {
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

  const fetchFullResults = (titles: string[], store: any[]): any[] =>
    store.filter(dealer => titles.includes(dealer.dealer.frontmatter?.title ?? ''))

  const dealerReducer = (dealer: any): Dealer => ({
    title: dealer.dealer.frontmatter?.title,
    dealer: dealer.dealer.frontmatter?.dealer,
    description: dealer.dealer.frontmatter?.description,
    banner: dealer.dealer.frontmatter?.banner?.imgFile?.childImageSharp?.fluid,
    slug: dealer.dealer.fields?.slug,
    isPremium: dealer.dealer.frontmatter?.isPremium
  })

  const reducedRegularDealers: Dealer[] | undefined = regularDealers?.map(
    (dealer: any) => dealerReducer(dealer)
  )

  const reducedPremiumDealers: Dealer[] | undefined = premiumDealers?.map(
    (dealer: any) => dealerReducer(dealer)
  )

  return (
    <>
      <Jumbotron
        title='Dealers Den'
        subtitle='Explore our dealers from the comfort of your home!'
      />
      <Section pos='middle'>
        <div className='row'>
          <div className='col-lg-6 mb-3 mb-lg-0'>
            <TextCard>
              <h2>Feeling lucky?</h2>
              <p>
                Click this button to check out a random dealer!
              </p>
              <Link
                title='Link to a random dealer page!' 
                to={`.${
                  sample(allDealers as any[]).dealer.fields?.slug ?? ''
                }`}
                role='button'
                className='btn btn-primary btn-lg rounded-3'
              >
                Let's go!
              </Link>
            </TextCard>
          </div>
          <div className='col-lg-6 mt-3 mt-lg-0'>
            <TextCard>
              <h2>Have something in mind?</h2>
              <p>
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
          <div className='pb-3'>
            <TextCard>
              <h2>SEARCH RESULTS</h2>
            </TextCard>
          </div>
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
        </Section>
      )}
      <Section pos='middle'>
        <DealerCardGrid data={reducedPremiumDealers ?? []} />
      </Section>
      <Section pos='last'>
        <DealerCardGrid data={reducedRegularDealers ?? []} />
      </Section>
    </>
  )
}
