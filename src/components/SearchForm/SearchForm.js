import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="searchForm">
      <input className="searchInput" type="text" placeholder="Search for news"></input>
      <button className="searchButton">Search</button>
    </form>
  )
}


export default SearchForm;