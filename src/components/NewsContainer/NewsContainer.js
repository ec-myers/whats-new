import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = props => {
  const newsData = props.news.map((article, i) => {
    return <NewsArticle key={i}
      headline={article.headline}
      img={article.img}
      url={article.url}
      description={article.description}
      />
  })

  return (
    <section className="newsContainer">
      {newsData}
    </section>
  )
}
export default NewsContainer;