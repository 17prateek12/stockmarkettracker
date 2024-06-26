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
import PrivateRoute from './component/PrivateRoute';
import About from './pages/About';

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
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard selectedSymbol={selectedSymbol} />} />
            <Route path="prediction" element={<Prediction selectedSymbol={selectedSymbol} />} />
            <Route path="news" element={<News selectedSymbol={selectedSymbol} />} />
            <Route path="profile" element={<UserProfile selectedSymbol={selectedSymbol} />} />
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