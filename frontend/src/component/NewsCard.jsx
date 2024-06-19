import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <img src={article.thumbnail.resolutions[0].url} alt={article.title} />
        <h3>{article.title}</h3>
      </a>
      <p>{article.publisher}</p>
    </div>
  );
};

export default NewsCard;