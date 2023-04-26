import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <RiSearchLine className="search-icon" size="1.3em" />
        <input type="text" onChange={(e) => handleSearchNote(e.target.value)} />
    </div>
  )
}

export default Search