import asyncHandler from 'express-async-handler';
import axios from 'axios';
import data from '../dummyAPI/Dummyapi.js';
import histodata from "../dummyAPI/StockDummy.js"
import stockdetail from '../dummyAPI/companyDetail.js';
import yahooFinance from 'yahoo-finance2';



const historicaldata = asyncHandler(async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const enddate = new Date(req.params.enddate);
    const startdate = new Date(req.params.startdate);

    console.log(enddate, startdate);

    const options = {
      period1: Math.floor(startdate.getTime() / 1000),
      period2: Math.floor(enddate.getTime() / 1000),
      interval: '1d'
    };

    console.log(options);

    const data = await yahooFinance.historical(symbol, options);
    console.log("DATA for symbol:", symbol);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching historical data from Yahoo Finance');
  }
});
  


const searchSymbol = asyncHandler(async (req, res) => {
    const { query } = req.params;
    try {
        const url = `${process.env.FINANCIAL_BASIC_URL}/api/v3/search?query=${query}&apikey=${process.env.FINANCIAL_PREP_SECRET}`;
        const response = await axios.request(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Yahoo Finance API');
    }
});




const companydetail = asyncHandler(async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const url = `${process.env.FINANCIAL_BASIC_URL}/api/v3/profile/${symbol}?apikey=${process.env.FINANCIAL_PREP_SECRET}`
        const response = await axios.request(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from API');
    }
});


const newsdetail = asyncHandler(async (req, res) => {
    res.json(data);
})

export { historicaldata, searchSymbol, companydetail, newsdetail }