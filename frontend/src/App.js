import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './CSS/Style.css';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Prediction from './pages/Prediction';
import News from './pages/News';
import UserProfile from './pages/UserProfile';
import Watchlist from './pages/Watchlist';
import Login from './pages/Login';
import Register from './pages/Register';
import { checkAuthStatus } from './feature/authSlice';
import PrivateRoute from './component/PrivateRoute';
import About from './pages/About';
import useStockData from './component/useStockData';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [symbol, setSymbol] = useState('MS');
  const { stockData, loading, error } = useStockData({
    symbol,
    startdate: '2023-07-10',
    enddate: '2024-07-10'
  });

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  const handleSelectSymbol = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout onSelectSymbol={handleSelectSymbol} />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard symbol={symbol} />} />
            <Route path="prediction" element={<Prediction />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="watchlist" element={<Watchlist />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />
          <Route path="register" element={!isAuthenticated ? <Register /> : <Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
