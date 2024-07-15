import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStockDetail = createAsyncThunk('stock/fetchDetail', async (symbol) => {
    const response = await axios.get(`http://localhost:5001/api/stock/detail/${symbol}`);
    console.log("API response:", response.data); // Log API response
    return response.data;
});

const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        detail: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStockDetail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStockDetail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.detail = action.payload;
            })
            .addCase(fetchStockDetail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default detailSlice.reducer;
