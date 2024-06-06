import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../feature/searchSlice';
import { fetchStockData } from '../feature/stockSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]); // Define setResults here
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 1) {
      dispatch(fetchSearchResults(e.target.value)).then((action) => {
        if (action.payload && action.payload.bestMatches) {
          setResults(action.payload.bestMatches);
        }
      });
    } else {
      setResults([]);
    }
  };

  const handleSelect = (symbol) => {
    dispatch(fetchStockData(symbol));
    setQuery('');
    setResults([]);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search stock symbol"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {results.map((result) => (
          <li key={result.symbol} onClick={() => handleSelect(result.symbol)}>
            {result.symbol} - {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
