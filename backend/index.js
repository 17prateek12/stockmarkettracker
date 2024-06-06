import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/dbConnection.js';
import userRoutes from './routes/userRoutes.js'; // Import userRoutes
import stockRoutes from "./routes/stockRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to database
connectDb();

// Define your route for Yahoo Finance API

app.use('/api/stock',stockRoutes);

// Use userRoutes for handling user-related routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
