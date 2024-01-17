import React, { useState } from 'react';

function Book() {

    const[books,setBooks] = useState([
        {title:"horror", id:1},
        {title:"thrillle", id:2},
        {title:"zombie" , id:3},
        {title:"mellyy" , id:4}
            ])
  return (
    <div className='books' id='Book'>
        
        <h3>Books</h3>
        {books.map((book)=> (

<div className='blog-preview' key={book.id}>
<h2>{book.title}</h2>

</div>
)
)}
        </div>
        
  )
}

export default Book