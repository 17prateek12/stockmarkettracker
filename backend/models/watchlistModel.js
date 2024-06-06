import mongoose from "mongoose";

const WatchlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'User',
    },
    stocks:[
        {
            symbol:{
                type:String,
                required:true,
            },
            addedAt:{
                type:Date,
                default:Date.now,
            },
        },
    ],
});

export default mongoose.model("Watchlist",WatchlistSchema);