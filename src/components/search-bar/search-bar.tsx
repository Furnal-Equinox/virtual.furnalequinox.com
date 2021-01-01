import React from 'react'

type SearchParams = string[] | null

interface Props {
  searchQuery: SearchParams
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchParams>>
  navigate: any
}

const SearchBar: React.FC<Props> = ({ searchQuery, setSearchQuery, navigate }: Props) => {
  return (
    <form 
      action='/dealers/' 
      method='get'
      autoComplete='off'
      onSubmit={event => {
        navigate(searchQuery !== null ? `./?search=${searchQuery.join('')}` : '')
        event.preventDefault()
      }}
      className='mx-auto'
    >
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
        value={searchQuery ?? ''}
        onInput={event => {
          setSearchQuery(event.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar
