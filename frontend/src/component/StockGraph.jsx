import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import DataNtimePick from './DataNtimePick';

const StockGraph = ({ symbol }) => {
  const stockData = useSelector((state) => state.stock.data);

  if (!stockData || stockData.length === 0) {
    return <div>No data available</div>;
  }
  console.log(stockData)
  const chartData = stockData.map((dataPoint) => ({
    name: new Date(dataPoint.date).toLocaleDateString(),
    open: dataPoint.open,
    close: dataPoint.close,
    high: dataPoint.high,
    low: dataPoint.low,
  }));

  return (
    <Box sx={{ marginBottom: '3rem', '@media (max-width:770px)': { overflowX: 'scroll', overflowY: 'none' } }}>
      <DataNtimePick symbol={symbol} />
      <ResponsiveContainer width={1000} height={450}>
        <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="open" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="open" stroke="lightblue" fill="lightblue" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StockGraph;
