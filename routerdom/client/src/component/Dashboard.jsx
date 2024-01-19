import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [bookInput, setBookInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [booksCount, setBooksCount] = useState(10); 
  const [namesCount, setNamesCount] = useState(10); 
  const [countdownTime, setCountdownTime] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(countdownInterval);
          return 5; 
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdownTime]);

  const addBook = (event) => {
    event.preventDefault();
    
    console.log('Book added:', bookInput);
    
    setCountdownTime(5);
    setBookInput('');
    
  };

  const addname = (event) => {
    event.preventDefault();
    
    console.log('Name added:', nameInput);
    
    setCountdownTime(5);
    setNameInput('');
  };

  return (
    <div>
 <h1>Countdown for Books</h1>
      <h3>Number of Books: {booksCount}</h3>
      <h3>Number of Names: {namesCount}</h3>
      <div>Countdown: {countdownTime} seconds</div>
      <button className="buttonHome"  >
                            Home
                          </button>
    </div>
  );
};

export default Dashboard;