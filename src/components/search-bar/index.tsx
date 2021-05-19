import React from 'react'

export type SearchParams = string | string[] | null | undefined

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
        navigate(
          searchQuery !== undefined && searchQuery !== null
            ? `./?search=${
            Array.isArray(searchQuery)
            ? searchQuery.join('')
            : searchQuery
          }`
            : ''
        )
        event.preventDefault()
      }}
      className='mx-auto py-5'
    >
      <div className='form-floating mb-3'>
        <input
          aria-label='Search Term'
          type='text'
          id='inputSearchTerm'
          aria-labelledby='inputSearchTermLabel'
          className='form-control'
          placeholder='Tails'
          name='search'
          value={searchQuery ?? ''}
          onInput={event => {
            setSearchQuery((event.target as HTMLInputElement).value)
          }}
        />
        <label id='inputSearchTermLabel' htmlFor='inputSearchTerm'>
          {"Search for a dealer"}
        </label>
      </div>
      <div>
        <button
          className='btn btn-lg btn-primary rounded-3'
          type='submit'
        >
          {"Search"}
        </button>
      </div>

    </form>
  )
}

export default SearchBar
