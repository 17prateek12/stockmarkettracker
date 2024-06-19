import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../feature/authSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className='navbar'>
      <SearchBar />
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/prediction">Prediction</Link>
        <Link to="/news">News</Link>
        <Link to="/profile">User Profile</Link>
        <Link to="/watchlist">Watchlist</Link>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </div>
  );
};

export default NavBar;
