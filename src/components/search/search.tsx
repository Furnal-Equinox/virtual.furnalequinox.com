import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import * as queryString from 'query-string'


import Section from '../../layouts/section/section'
import { TextCard } from '../cards'

interface Props {

}

const Search: React.FC<Props> = ({}: Props) => {
  const [query, setQuery] = React.useState('')
  const { localSearchDealersSfw } = useStaticQuery(graphql`
    query {
      localSearchDealersSfw {
        index
        store
      }
    }
  `)

  const results = useFlexSearch(
    query,
    localSearchDealersSfw.index,
    localSearchDealersSfw.store
  )


  return (
    <Section isContainer isTextCenter pos='middle'>
      <TextCard>
        <div className='row'>
          <div className='col mx-auto'>
            <h2>Have something in mind?</h2>
            <p className='lead'>
              Use the search bar!
            </p>
            <form className='mx-auto'>
              <label htmlFor='inputSearchTerm' className='form-label visually-hidden'>
                Input Search Term
              </label>
              <input
                aria-label='Search Term'
                type='text'
                id='inputSearchTerm'
                className='form-control-lg'
                style={{ width: '20rem' }}
                placeholder='Tails'
              />
            </form>
          </div>
        </div>
      </TextCard>
    </Section>
  )
}

export default Search