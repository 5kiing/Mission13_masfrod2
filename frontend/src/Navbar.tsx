import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// this function is the nav bar that is implemented through the index.tsx page to show on each page.
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <button className="btn text-white">Home</button>
        </Link>
        <Link to="/collection">
          <button className="btn text-white">Collection</button>
        </Link>
        <Link to="/podcast">
          <button className="btn text-white">Podcast</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
