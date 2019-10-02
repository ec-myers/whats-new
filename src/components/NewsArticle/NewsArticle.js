import React from 'react';
import './NewsArticle.css';

const NewsArticle = article => {
  return (
    <article className="newsArticle">
      <div className="articleImageDiv">
        <img className="articleImage" src={article.img} alt="article" />
      </div>
      <h3 className="articleTitle">{article.headline}</h3>
      <p className="articleBody">{article.description}</p>
      <footer className="articleFooter">
        <a href={article.url} target="_blank">Read the Full Story</a>
      </footer>
    </article>
  )
}
export default NewsArticle;