import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStockData = createAsyncThunk(
  'stock/fetchStockData',
  async ({ symbol, startdate, enddate }) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/stock/hisdata/${symbol}/${startdate}/${enddate}`);
      return response.data;
    } catch (error) {
      throw Error(error.response?.data?.message || 'Error fetching stock data');
    }
  }
);

const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default stockSlice.reducer;
