import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = props => {
  console.log(props)
  return (
    <section className="newsContainer">
      <NewsArticle />
    </section>
  )
}
export default NewsContainer;