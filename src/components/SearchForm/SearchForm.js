import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    }
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  }
  
  handleClick = (event) => {
    event.preventDefault();
    const searchText = this.state.searchInput.toLowerCase();
    this.props.displaySearchResults(searchText);
    this.setState({ searchInput: "" });
  }

  render() {
    return (
      <form className="searchForm">
        <input 
          className="searchInput" 
          name="searchInput" 
          type="text" 
          placeholder="Looking for something?" 
          value={ this.state.searchInput } 
          onChange={event => this.handleChange(event)}
        />       
        <button 
          className="searchButton" 
          onClick={event => this.handleClick(event)}>Search
        </button>
      </form>
    )
  }
}


export default SearchForm;