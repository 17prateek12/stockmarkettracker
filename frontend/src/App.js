// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('AA');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout onSelectSymbol={(symbol) => setSelectedSymbol(symbol)} />}>
          <Route index element={isAuthenticated ? <Dashboard selectedSymbol={selectedSymbol} /> : <Navigate to="/login" replace />} />
          <Route path="prediction" element={isAuthenticated ? <Prediction selectedSymbol={selectedSymbol} /> : <Navigate to="/login" replace />} />
          <Route path="news" element={isAuthenticated ? <News selectedSymbol={selectedSymbol} /> : <Navigate to="/login" replace />} />
          <Route path="profile" element={isAuthenticated ? <UserProfile selectedSymbol={selectedSymbol} /> : <Navigate to="/login" replace />} />
          <Route path="watchlist" element={isAuthenticated ? <Watchlist /> : <Navigate to="/login" replace />} />
          <Route path="login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />
          <Route path="register" element={!isAuthenticated ? <Register /> : <Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
