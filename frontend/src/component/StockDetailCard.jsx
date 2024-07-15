import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StockDetailCard = () => {
    const stockDetail = useSelector((state) => state.detail.detail);
   console.log("stock detail",stockDetail)

    if (!stockDetail) {
        return <div>No data available</div>;
    }
     const renderdetails = stockDetail.map((item)=>(
        <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                    {item.companyName} ({item.symbol})
                </Typography>
                <Box sx={{ marginTop: '16px' }}>
                    <Typography sx={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ fontWeight: 600 }}>Market Cap:</span> ${item.mktCap?.toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ fontWeight: 600 }}>Price:</span> ${item.price}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ fontWeight: 600 }}>Sector:</span> {item.sector}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ fontWeight: 600 }}>Industry:</span> {item.industry}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ fontWeight: 600 }}>CEO:</span> {item.ceo}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: 'black' }}>
                        <span style={{ fontWeight: 600 }}>Location:</span> {item.state}, {item.country}
                    </Typography>
                </Box>
            </CardContent>

     ))

    return (
        <Card
            sx={{
                width: '300px',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid lightgray',
                borderRadius: '16px',
                padding: '16px'
            }}
        >
            {renderdetails}
        </Card>
    );
};

export default StockDetailCard;
