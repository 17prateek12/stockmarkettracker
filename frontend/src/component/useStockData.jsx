import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStockData } from '../feature/stockSlice';

const useStockData = (symbol) => {
  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.stock.data);
  const loading = useSelector((state) => state.stock.loading);
  const error = useSelector((state) => state.stock.error);

  useEffect(() => {
    dispatch(fetchStockData(symbol));
  }, [dispatch, symbol]);

  return { stockData, loading, error };
};

export default useStockData;
