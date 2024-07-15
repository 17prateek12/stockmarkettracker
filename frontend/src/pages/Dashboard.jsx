import { Box} from '@mui/material';
import React from 'react';
import StockGraph from '../component/StockGraph';
import StockDetailCard from '../component/StockDetailCard';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PriceChange from '../component/PriceChange';

const Dashboard = ({symbol}) => {
 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginY: '2rem', marginX: '1rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
        <StockGraph symbol={symbol} />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
          <PriceChange />
         <StockDetailCard  /> 
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
