import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  const UnixtimeStampConvertor = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  }
  return (
    <Box sx={{
      width: '350px',
      height: '420px',
      border: '1px solid lightgray',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box
        sx={{
          width: '100%',
          height: '240px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          overflow: 'hidden',
        }}>
        <img src={article.thumbnail.resolutions[0].url} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'fill', overflow: 'hidden' }} />
      </Box>
      <Box sx={{
        width: '90%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '180px',
      }}>
        <Link to={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Typography sx={{
            fontSize: '18px',
            textWrap: 'wrap',
            textAlign: 'center',
            fontWeight: 600,
            color: 'black',
            marginTop: '1rem',

          }}>{article.title}</Typography>
        </Link>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1rem',
        }}>
          <Typography sx={{ fontSize: '14px', textAlign:'center' }}>
            {UnixtimeStampConvertor(article.providerPublishTime)}
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            {article.publisher}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;