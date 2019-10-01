import React from 'react';
import './NewsArticle.css';

const NewsArticle = article => {
  return (
    <article className="newsArticle">
      <img className="articleName" />
      <h3 className="articleTitle">{article.title}</h3>
      <body className="articleBody">{article.description}</body>
      <footer className="articleFooter">
        <a></a>
      </footer>
    </article>
  )
}
export default NewsArticle;