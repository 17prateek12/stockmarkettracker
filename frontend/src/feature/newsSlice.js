// src/feature/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  news: [],
  status: 'idle',
  error: null
};

// Define the async thunk for fetching news
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get('http://localhost:5001/api/stock/news');
  return response.data;  // Ensure this returns an array
});

// Create the slice
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = Object.values(action.payload);  // Convert object to array
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default newsSlice.reducer;
