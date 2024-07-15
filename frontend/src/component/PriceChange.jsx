import React from 'react';
import { useSelector } from 'react-redux';
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { Box, Typography } from '@mui/material';

const PriceChange = () => {
    const stockData = useSelector((state) => state.stock.data);

    if (!stockData) {
        return null;
    }
    console.log("stock ",stockData)

   const currentDayIndex=stockData[stockData.length-1];
   const previousDayIndex=stockData[stockData.length-2];
  
    const change = (a, b) => {
        return a - b;
    };

    const percentageChange = (current, previous) => {
        return ((current - previous) / previous) * 100;
    };

    const renderChange = (current, previous) => {
        const diff = change(current, previous);
        const percentChange = percentageChange(current, previous);
        const isPositive = diff >= 0;

        return (
            <span style={{ color: isPositive ? 'green' : 'red', alignItems: 'center' }}>
                {isPositive ? <VscTriangleUp /> : <VscTriangleDown />}
                {Math.abs(diff).toFixed(2)} ({Math.abs(percentChange).toFixed(2)}%)
            </span>
        );
    };

    return (
        <Box
            sx={{
                maxWidth: '250px',
                height: 'auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '1rem',
                border: '1px solid lightgray',
                borderRadius: '16px'
            }}> 
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                <Typography>
                    High
                </Typography>
                <Typography>
                    Low
                </Typography>
                <Typography>
                    Open
                </Typography>
                <Typography>
                    Close
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                <Typography>{renderChange(currentDayIndex.high, previousDayIndex.high)}</Typography>
                <Typography>{renderChange(currentDayIndex.low, previousDayIndex.low)}</Typography>
                <Typography>{renderChange(currentDayIndex.open, previousDayIndex.open)}</Typography>
                <Typography>{renderChange(currentDayIndex.close, previousDayIndex.close)}</Typography>
           </Box>  
        </Box>
    );
};

export default PriceChange;
