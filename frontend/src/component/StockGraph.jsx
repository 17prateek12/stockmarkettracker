import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Box, ThemeProvider } from '@mui/material';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const StockChart = () => {
    const stockData = useSelector((state) => state.stock.data);

    if (!stockData) {
        return null;
    }

    const labels = stockData.timestamp.map((time) =>
        new Date(time * 1000).toLocaleDateString()
    );

    const createChart = (label, data, borderColor) => ({
        labels,
        datasets: [
            {
                label,
                data,
                borderColor,
                fill: false,
            },
        ],

    });

    const options = {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
        },
    };
    const graphdata = [
        {
            label: 'Open',
            stock: stockData.indicators.quote[0].open,
            borderColor: '#8884d8'
        },
        {
            label: 'Close',
            stock: stockData.indicators.quote[0].close,
            borderColor: '#8884d8'
        },
        {
            label: 'Adj Close',
            stock: stockData.indicators.adjclose[0].adjclose,
            borderColor: '#8884d8'
        },
        {
            label: 'High',
            stock: stockData.indicators.quote[0].high,
            borderColor: '#8884d8'
        },
        {
            label: 'Low',
            stock: stockData.indicators.quote[0].low,
            borderColor: '#8884d8'
        }
    ]

    return (
        <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            width: 'full',
            justifyContent:'space-evenly',
            gap:'16px'
            }}>
            {graphdata.map((item, index) => (
                <Box key={index} sx={{ width: "450px" }}>
                    <Line data={createChart(item.label, item.stock, item.borderColor)} options={options} />
                </Box>
            ))}
        </Box>
    );
};

export default StockChart;
