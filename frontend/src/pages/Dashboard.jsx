import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import StockChart from '../component/StockGraph';
import useStockData from '../component/useStockData';
import StockDetailCard from '../component/StockDetailCard';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Dashboard = ({ selectedSymbol, setSelectedSymbol }) => {
  const { loading, error } = useStockData(selectedSymbol);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }


  return (
    <Box sx={{display:'flex', flexDirection:'column', marginY:'2rem'}}>
      <Box sx={{
        marginBottom:'3rem',
        '@media (max-width:770px)':{
          overflowX:'scroll'
        }
      }}>
      <StockChart symbol={selectedSymbol} />
      </Box>
     
      <StockDetailCard symbol={selectedSymbol} />
    </Box>
  );
};

export default Dashboard;
