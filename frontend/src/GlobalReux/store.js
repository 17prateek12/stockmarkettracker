import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../feature/stockSlice';
import searchReducer from '../feature/searchSlice';
import detailReducer from "../feature/detailSlice"
import authReducer from "../feature/authSlice";
import newsReducer from "../feature/newsSlice"

export const store = configureStore({
    reducer: {
      stock: stockReducer,
      search:searchReducer,
      detail:detailReducer,
      auth: authReducer,
      news: newsReducer
    },
  });
  
  export default store;