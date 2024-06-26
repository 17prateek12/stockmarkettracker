import asyncHandler from 'express-async-handler';
import axios from 'axios';
import data from '../dummyAPI/Dummyapi.js';
import histodata from "../dummyAPI/StockDummy.js"
import stockdetail from '../dummyAPI/companyDetail.js';



//const historicaldata = asyncHandler(async (req, res) => {
//    const symbol = req.params.symbol;
//    const options = {
//        method: 'GET',
//        url: `${process.env.BASE_URL}/historic/${symbol}/1d/2y`,
//        headers: {
//            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//            'X-RapidAPI-Host': process.env.RAPID_API_HOST
//        }
//    };
//
//    try {
//        const response = await axios.request(options);
//        res.json(response.data);
//    } catch (error) {
//        console.error(error);
//        res.status(500).send('Error fetching data from Yahoo Finance API');
//    }
//});

const  historicaldata = asyncHandler(async (req, res) => {
    res.json(histodata)
});

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
});



//const companydetail = asyncHandler(async(req,res)=>{
//    const symbol = req.params.symbol;
//    const options = {
//        method: 'GET',
//        url: `https://yahoo-finance127.p.rapidapi.com/price/${symbol}`,
//        headers: {
//            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//            'X-RapidAPI-Host': process.env.RAPID_API_HOST
//        }
//    };
//    try {
//        const response = await axios.request(options);
//        res.json(response.data);
//    } catch (error) {
//        console.error(error);
//        res.status(500).send('Error fetching data from Yahoo Finance API');
//    }
//});

const companydetail = asyncHandler(async(req,res)=>{
    res.json(stockdetail);
})

const newsdetail = asyncHandler(async(req,res)=>{
    res.json(data);
})

export { historicaldata, searchSymbol,companydetail,newsdetail }