import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStockData } from '../feature/stockSlice';
import { fetchStockDetail } from '../feature/detailSlice';

const useStockData = ({ symbol, startdate, enddate }) => {
  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.stock.data);
  const loading = useSelector((state) => state.stock.loading);
  const error = useSelector((state) => state.stock.error);

  useEffect(() => {
    dispatch(fetchStockData({ symbol, startdate, enddate }));
    dispatch(fetchStockDetail(symbol));
  }, [dispatch, symbol, startdate, enddate]);

  return { stockData, loading, error };
};

export default useStockData;
