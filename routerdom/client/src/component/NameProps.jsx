import React from 'react'

const NameProps=({blogs, title,handleSubmit,handleClick}) =>{


    return (
                <div className="Blog-list">
                    <h2>{title}</h2>
                    {blogs.map((blog) => (
                        <div className='blog-preview' key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>written by {blog.author}</p>
                            <button onClick={() => handleClick('Books')}>Home</button>
                            <button onClick={()=> handleSubmit(blog.id)}>Book</button>
                        </div>
                    )
                    )}
                </div>
            );
        }

export default NameProps;