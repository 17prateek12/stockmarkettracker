import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../feature/stockSlice';
import searchReducer from '../feature/searchSlice';


export const store = configureStore({
    reducer: {
      stock: stockReducer,
      search:searchReducer
    },
  });
  
  export default store;