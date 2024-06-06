import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchSearchResults = createAsyncThunk('search/fetchSearchResults', async (query) => {
    const response = await axios.get(`http://localhost:5001/api/stock/search/${query}`);
    return response.data;
})

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        result: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload.bestMatches || [];
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;
