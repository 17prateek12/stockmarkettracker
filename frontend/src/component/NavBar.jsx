import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../feature/authSlice';
import SearchBar from './SearchBar';
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Box, Typography } from '@mui/material';

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleMenu = [
    { link: "/", label: "Dashboard" },
    { link: "/prediction", label: "Prediction" },
    { link: "/news", label: "News" },
    { link: "/profile", label: "User Profile" },
    { link: "/watchlist", label: "WatchList" },
    { link:"/about", label:"About"}
  ];

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleSelectSymbol = (symbol) => {
    console.log('Selected symbol:', symbol);
  };

  const handleScreenOverflow = (state) => {
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const toggleDrawer = (state) => {
    setOpen(state);
    handleScreenOverflow(state);
  };

  return (
    <div className='navbar'>
      <nav>
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchBar onSelectSymbol={handleSelectSymbol} />
            <Button onClick={() => toggleDrawer(true)}>
              <GiHamburgerMenu />
            </Button>
            {open && <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                opacity: 1,
                visibility: 'visible',
                transition: 'opacity 0.3s, visibility 0.3s'
              }}
              onClick={() => toggleDrawer(false)}
            />}
            <Box
              style={{
                position: 'fixed',
                top: 0,
                left: open ? 0 : '-350px',
                width: '300px',
                height: '100%',
                background: 'white',
                zIndex: 1000,
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                transition: 'left 0.3s',
                padding: '1rem',
              }}
            >
              <Button
                onClick={() => toggleDrawer(false)}
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                &times;
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
                role="presentation"
                onClick={() => toggleDrawer(false)}
                onKeyDown={() => toggleDrawer(false)}
              >
                {toggleMenu.map((item, index) => (
                  <Link to={item.link} key={index} style={{ textDecoration: 'none', width: '100%' }}>
                    <Typography sx={{ fontSize: '20px', textAlign: 'left', color: 'gray', fontWeight: 600, padding: '10px 0' }}>
                      {item.label}
                    </Typography>
                  </Link>
                ))}
                <Button onClick={handleLogout} sx={{ marginTop: '1rem' }}>Logout</Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <button className='loginbutton'><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link></button>
            <button className='loginbutton'><Link style={{ textDecoration: 'none', color: 'white' }} to="/register">Signup</Link></button>
          </Box>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
