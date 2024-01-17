import React from "react";
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Homepage</h1>

      <div className="links">
        
        <a href="/">Home</a>
        <a href="Name">Names</a>
        <a href="#Book">Books</a>
        <a href="#Dashbaord">Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;
