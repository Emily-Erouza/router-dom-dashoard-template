// import React, { useState, useEffect } from 'react';

// const Dashboard = () => {
//   const [bookInput, setBookInput] = useState('');
//   const [nameInput, setNameInput] = useState('');
//   const [booksCount, setBooksCount] = useState(10); 
//   const [namesCount, setNamesCount] = useState(10); 
//   const [countdownTime, setCountdownTime] = useState(5);

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       setCountdownTime((prevTime) => {
//         if (prevTime === 0) {
//           clearInterval(countdownInterval);
//           return 5; 
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(countdownInterval);
//   }, [countdownTime]);

//   const addBook = (event) => {
//     event.preventDefault();
    
//     console.log('Book added:', bookInput);
    
//     setCountdownTime(5);
//     setBookInput('');
    
//   };

//   const addname = (event) => {
//     event.preventDefault();
    
//     console.log('Name added:', nameInput);
    
//     setCountdownTime(5);
//     setNameInput('');
//   };

//   return (
//     <div>
//  <h1>Countdown for Books</h1>
//       <h3>Number of Books: {booksCount}</h3>
//       <h3>Number of Names: {namesCount}</h3>
//       <div>Countdown: {countdownTime} seconds</div>
//       <button className="buttonHome"  >
//                             Home
//                           </button>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [booksCount, setBooksCount] = useState(4);
  const [namesCount, setNamesCount] = useState(4);
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

    console.log('Book added:', title);

    setCountdownTime(5);
    setTitle('');
    setBooksCount((prevCount) => prevCount + 1);
  };

  const addName = (event) => {
    event.preventDefault();

    console.log('Name added:', author);

    setCountdownTime(5);
    setAuthor('');
    setNamesCount((prevCount) => prevCount + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
    });
  };

  return (
    <div>
      <h1>Countdown for Books</h1>
      <h3>Books length: {booksCount}</h3>
      <h3>Names length: {namesCount}</h3>
      <div>Countdown: {countdownTime} seconds</div>

      <Link to="/">
        <button className="buttonHome">Home</button>
      </Link>

      <div className="Addpages">
        <input type="checkbox" id="form-switch" />

        <form
          className="Books"
          id="AddBooks-form"
          action=""
          method="post"
          onSubmit={handleSubmit} 
        >
          <h2>Add Book</h2>
          <p>Book title</p>
          <input
            type="text"
            placeholder="Enter Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit" id="btn">
            Add Book
          </button>
          <label htmlFor="form-switch">
            <span>Add Name</span>
          </label>
        </form>

        <form
          id="AddName-form"
          action=" "
          method="post"
          onSubmit={handleSubmit} 
        >
          <h2>Add Name</h2>
          <p>Author name</p>
          <input
            type="text"
            placeholder="Enter Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button type="submit" id="btn">
            Add Name
          </button>

          <label htmlFor="form-switch">Add Book..</label>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

