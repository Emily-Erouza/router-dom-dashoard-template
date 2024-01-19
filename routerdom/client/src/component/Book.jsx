import React, { useState } from "react";
import {Link} from 'react-router-dom'
function Book() {
  const [books, setBooks] = useState([
    { title: "horror", id: 1 },
    { title: "thrillle", id: 2 },
    { title: "zombie", id: 3 },
    { title: "mellyy", id: 4 },
  ]);


  const handleClick =  (e) => {
    e.preventDefault();
      const blog={books}
      console.log(blog) 
      
    };
  return (
    <div className="books" id="Book" onClick={handleClick}>
      <h3>Books</h3>
      {books.map((book) => (
        <div className="blog-preview" key={book.id}>
          <h2>{book.title}</h2>
        </div>
      ))}

      <Link to="/">
        <button onClick={() => handleClick}>Home</button>
      </Link>
      <Link to="Book">
        <button onClick={() => handleClick}>Dashbaord</button>
      </Link>
    </div>
  );
}

export default Book;
