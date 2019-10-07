import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.local = local;
    this.technology = technology;
    this.entertainment = entertainment;
    this.science = science;
    this.health = health;
    this.state = {
      current: local
    }
  }

  changeNewsFeed = (event) => {
    this.setState({ current: this[event.target.name] });
  }

  displaySearchResults = (searchInput) => {
    const searchResults = this.state.current.filter(article => article.headline.toLowerCase().includes(searchInput));
    this.setState({ current: searchResults});
  }

  render () {
    return (
      <div className="app">
        <Menu changeNewsFeed={this.changeNewsFeed} />
          <div className="content-main">
          <SearchForm displaySearchResults={this.displaySearchResults} />
            <NewsContainer news={this.state.current} />
          </div>
      </div>
    );
  }
}

export default App;
