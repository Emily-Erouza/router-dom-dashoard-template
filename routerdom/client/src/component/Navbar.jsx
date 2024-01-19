import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Homepage</h1>

      <div className="links">
        
        <Link to="/">Home</Link>
        <Link to="Name">Names</Link>
        <Link to="Book">Books</Link>
        <Link to="Dashbaord">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
