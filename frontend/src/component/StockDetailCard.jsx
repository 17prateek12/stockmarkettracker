import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDetail } from '../feature/detailSlice';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StockDetailCard = ({ symbol }) => {
    const dispatch = useDispatch();
    const stockDetail = useSelector((state) => state.detail.detail);
    const stockStatus = useSelector((state) => state.detail.status);
    const error = useSelector((state) => state.detail.error);

    useEffect(() => {
        if (stockStatus === 'idle') {
            dispatch(fetchStockDetail(symbol));
        }
    }, [stockStatus, dispatch, symbol]);

    if (stockStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (stockStatus === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', padding:'1rem',border:'1px solid gray' }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{fontWeight:600}}>
                    {stockDetail.longName} ({stockDetail.symbol})
                </Typography>
                <Box sx={{marginTop:'16px'}}>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                        <span style={{fontWeight:600}}>Market Cap:</span> {stockDetail.marketCap?.fmt}
                    </Typography>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                    <span style={{fontWeight:600}}>Dividend Yield:</span> {stockDetail.dividendYield?.fmt}
                    </Typography>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                    <span style={{fontWeight:600}}>EPS (TTM):</span> {stockDetail.epsTrailingTwelveMonths?.fmt}
                    </Typography>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                    <span style={{fontWeight:600}}>PE Ratio:</span> {stockDetail.trailingPE?.fmt}
                    </Typography>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                    <span style={{fontWeight:600}}> 52 Week Range:</span> {stockDetail.fiftyTwoWeekRange?.fmt}
                    </Typography>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                    <span style={{fontWeight:600}}>Average Analyst Rating:</span> {stockDetail.averageAnalystRating}
                    </Typography>
                    <Typography sx={{fontSize:'16px', color:'black'}}>
                    <span style={{fontWeight:600}}>Regular Market Day Range:</span> {stockDetail.regularMarketDayRange?.fmt}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StockDetailCard;
