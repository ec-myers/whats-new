import React, { Component } from 'react';
import local from '../../data/local';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsArticle from '../NewsArticle/NewsArticle';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    console.log(local)
    return (
      <div className="app">
        <Menu />
          <div className="content-main">
            <SearchForm />
            <NewsContainer {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
