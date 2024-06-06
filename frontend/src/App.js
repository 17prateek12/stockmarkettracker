import React from 'react';
import StockChart from './component/StockGraph';
import useStockData from './component/useStockData';
import SearchBar from './component/SearchBar';

const App = () => {
  const { loading, error } = useStockData('AA'); // Example symbol

  return (
    <div>
      <SearchBar />
      <StockChart />
    </div>
  );
};

export default App;
