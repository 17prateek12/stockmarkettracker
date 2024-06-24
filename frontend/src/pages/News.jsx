// src/pages/News.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../feature/newsSlice';
import NewsCard from '../component/NewsCard';
import { Box } from '@mui/material';

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
    <Box sx={{
      display:'flex', 
      maxWidth:'100%', 
      justifyContent:"space-evenly", 
      alignItems:'center', 
      flexWrap:'wrap', 
      gap:'30px',
      marginX:'2rem',
      marginTop:'2rem'
    }}>
      {content}
    </Box>
  );
};

export default News;
