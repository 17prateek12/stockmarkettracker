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
    console.log("stock",stockData)

    if (!stockData) {
        return null;
    }

    const labels = stockData.timestamp.map((time) =>
        new Date(time * 1000).toLocaleDateString()
    );

    const chartData = {
        labels: stockData.timestamp.map((time) =>
          new Date(time * 1000).toLocaleDateString()
        ),
        datasets: [
          {
            label: 'Open',
            data: stockData.indicators.quote[0].open,
            borderColor: '#8884d8',
            fill: false,
          },
          {
            label: 'Close',
            data: stockData.indicators.quote[0].close,
            borderColor: '#82ca9d',
            fill: false,
          },
          {
            label: 'High',
            data: stockData.indicators.quote[0].high,
            borderColor: '#ff7300',
            fill: false,
          },
          {
            label: 'Low',
            data: stockData.indicators.quote[0].low,
            borderColor: '#387908',
            fill: false,
          },
        ],
      };

    const options = {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
        },
    };


    return (
        <Box sx={{width:'800px'}}>
            <Line data={chartData} options={options} />
        </Box>
    );
};

export default StockChart;
