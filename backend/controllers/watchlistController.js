import asyncHandler from 'express-async-handler';
import axios from 'axios';
import Watchlist from '../models/watchlistModel.js'


const getWatchlist = asyncHandler(async(req,res)=>{
    try {
        const watchlist = await Watchlist.findOne({user:req.user.id});
        res.json(watchlist);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
});



export {getWatchlist};