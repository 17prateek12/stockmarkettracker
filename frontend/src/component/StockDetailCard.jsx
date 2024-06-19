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
        <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {stockDetail.longName} ({stockDetail.symbol})
                </Typography>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        Market Cap: {stockDetail.marketCap?.fmt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Dividend Yield: {stockDetail.dividendYield?.fmt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        EPS (TTM): {stockDetail.epsTrailingTwelveMonths?.fmt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        PE Ratio: {stockDetail.trailingPE?.fmt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        52 Week Range: {stockDetail.fiftyTwoWeekRange?.fmt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Average Analyst Rating: {stockDetail.averageAnalystRating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Regular Market Day Range: {stockDetail.regularMarketDayRange?.fmt}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StockDetailCard;
