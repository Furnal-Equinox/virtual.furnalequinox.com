import { navigate } from 'gatsby'
import React from 'react'

interface Props {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <form action='/' method='get' className='mx-auto'>
      <label htmlFor='inputSearchTerm' className='form-label visually-hidden'>
        Search for a dealer
      </label>
      <input
        aria-label='Search Term'
        type='text'
        id='inputSearchTerm'
        className='form-control-lg'
        style={{ width: '20rem' }}
        placeholder='Tails'
        name='search'
        value={searchQuery}
        onInput={event => {
          navigate(event.target.value !== '' ? `.?search=${event.target.value}` : '')
          setSearchQuery(event.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar