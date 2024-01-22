import React from 'react'
import {Link} from 'react-router-dom'
const NameProps=({blogs, title,handleSubmit,handleClick}) =>{


    return (
                <div className="Blog-list">
                    <h2>{title}</h2>
                    {blogs.map((blog) => (
                        <div className='blog-preview' key={blog.id}>
                           <Link to ={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                       
                        </Link>

                        <Link to="/">
                            <button onClick={() => handleClick}>Home</button>
                        </Link>
                        <Link to="Book">
                        
                            <button onClick={()=> handleClick}>Book</button>
                        </Link>
                        </div>
                    )
                    )}
                </div>
            );
        }

export default NameProps;