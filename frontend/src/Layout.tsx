import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

// this used to by my app.tsx folder but I changed to fit my navbar needs better

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
