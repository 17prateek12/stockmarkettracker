import asyncHandler from 'express-async-handler';
import axios from 'axios';


const historicaldata = asyncHandler(async (req, res) => {
    const symbol = req.params.symbol;
    const options = {
        method: 'GET',
        url: `${process.env.BASE_URL}/historic/${symbol}/1d/15d`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Yahoo Finance API');
    }
}
);

const searchSymbol = asyncHandler(async (req, res) => {
    const { query } = req.params;

    const options = {
        method: 'GET',
        url: `${process.env.BASE_URL}/search/${query}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Yahoo Finance API');
    }
})

export { historicaldata,searchSymbol }