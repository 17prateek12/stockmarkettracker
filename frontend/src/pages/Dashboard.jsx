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
    <div className='dashboard'>
      <StockChart symbol={selectedSymbol} />
      <StockDetailCard symbol={selectedSymbol} />
    </div>
  );
};

export default Dashboard;
