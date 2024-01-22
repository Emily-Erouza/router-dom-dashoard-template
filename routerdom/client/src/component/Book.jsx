import React, { useState } from "react";
import {Link} from 'react-router-dom'
function Book() {
  const [blogs, setBlogs] = useState([
    { title: "horror", id: 1 },
    { title: "thrillle", id: 2 },
    { title: "zombie", id: 3 },
    { title: "mellyy", id: 4 },
  ]);
  const [title,setTitle] = useState('');



  const handleClick =  (e) => {
    e.preventDefault();
    const blog ={ title };
    console.log(blog);
    };
  return (
    <div className="books" id="Book" onClick={handleClick}>
      <h3>Books</h3>
    

                    <h2>{title}</h2>
                    {blogs.map((blog) => (
                        <div className='blog-preview' key={blog.id}>
                           <Link to ={`/Books/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        
                       
                        </Link>

                        
                        </div>
                    )
                    )}
               
      <Link to="/">
        <button onClick={() => handleClick}>Home</button>
      </Link>
      <Link to="Book">
        <button onClick={() => handleClick}>Dashboard</button>
      </Link>
    </div>
  );
}

export default Book;
