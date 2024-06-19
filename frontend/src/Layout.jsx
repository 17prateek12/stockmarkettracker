import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './component/NavBar';

const Layout = ({ onSelectSymbol }) => {
  return (
    <>
      <NavBar onSelectSymbol={onSelectSymbol} />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
