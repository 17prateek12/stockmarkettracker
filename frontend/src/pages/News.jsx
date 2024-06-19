// src/pages/News.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../feature/newsSlice';
import NewsCard from '../component/NewsCard';

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const newsStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);

  let content;

  if (newsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (newsStatus === 'succeeded') {
    content = Array.isArray(news) ? news.map((article) => <NewsCard key={article.uuid} article={article} />) : <p>No news available</p>;
  } else if (newsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className='newsmain'>
      <h1>News</h1>
      {content}
    </div>
  );
};

export default News;
