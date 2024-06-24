import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../feature/searchSlice';
import { fetchStockDetail } from '../feature/detailSlice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box } from '@mui/material';

const SearchBar = ({ onSelectSymbol }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track highlighted index
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);
  console.log("quotes", results);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 1) {
      dispatch(fetchSearchResults(e.target.value));
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSelect = (symbol) => {
    dispatch(fetchStockDetail(symbol));
    setQuery(symbol);
    setShowResults(false);
    onSelectSymbol(symbol);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, results.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) =>
        Math.max(prevIndex - 1, 0)
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handleSelect(results[highlightedIndex].symbol);
    }
  };

  return (
    <Box 
    sx={{ 
      width: '500px',
      '@media (max-width:770px)':{
        width:'200px'
      }
       }}>
      <div className='searchbox'>
        <SearchOutlinedIcon
          sx={{ position: 'absolute', marginRight: '16px' }}
          onClick={() => handleSelect(query)}
        />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search stock symbol..."
          className='searchbar'
          onKeyDown={handleKeyDown}
        />
      </div>
      {loading && <p style={{marginTop:'4rem'}}>Loading...</p>}
      {error && <p style={{marginTop:'4rem'}}>Error: {error}</p>}
      {showResults && (
        <ul className='resultlist'>
          {results && results.map((result, index) => (
            <li
              key={result.symbol}
              onClick={() => handleSelect(result.symbol)}
              onMouseEnter={() => setHighlightedIndex(index)}
              style={{
                backgroundColor: highlightedIndex === index ? '#bde4ff' : 'transparent',
                cursor: 'pointer',
              }}
            >
              {result.symbol} - {result.shortname}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default SearchBar;
