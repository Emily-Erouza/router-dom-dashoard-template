import React from 'react';
import Home from "./component/Home";
import Name from "./component/Name";
import Book from "./component/Book";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import BlogDetails from './component/BlogDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <Router>
    
    <div className="App">
      <Navbar />

      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Name" element={<Name />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
