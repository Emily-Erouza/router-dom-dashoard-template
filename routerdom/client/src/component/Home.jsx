
import React, { useState } from 'react';

function Home () {
    const [name, setName] = useState("Home");


    const handleClick =  (name) => {
        setName("userNames");
        console.log('title'+ name) 
      };


  
  return (
    <div className='home' id='home'>
<h1>Welcome to BookStore</h1>
<p>{name}</p>
<button onClick={() => handleClick('userNames')} >Name</button>
<button onClick={() => handleClick('Books')}>Book</button>
<button onClick={() => handleClick('dashboard')}>Dashboard</button>
    </div>
  )
}

export default Home