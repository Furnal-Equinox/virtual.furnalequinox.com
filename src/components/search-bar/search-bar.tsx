import React from 'react'

interface Props {
  searchQuery: string | string[] | null
  setSearchQuery: React.Dispatch<React.SetStateAction<string | string[] | null>>
  navigate: any
}

const SearchBar: React.FC<Props> = ({ searchQuery, setSearchQuery, navigate }: Props) => {
  return (
    <form className='mx-auto'>
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
          navigate(event.target.value !== '' ? `/dealers/?search=${event.target.value}` : '')
          setSearchQuery(event.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar