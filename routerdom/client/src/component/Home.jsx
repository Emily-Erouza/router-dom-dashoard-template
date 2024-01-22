import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [name, setName] = useState("Home");

  const [names, setNames] = useState("");
  const [books, setBooks] = useState("");

  const [addname, setAddName] = useState("");
  const [addbooks, setAddBooks] = useState("");




const [title,setTitle] = useState('');
const [author,setAuthor] = useState('');




  const handleClick = (e) => {
    e.preventDefault();
    const blog = { names, books };
    console.log(blog);
    setName("userNames");
    // console.log('title'+ name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog ={ title,author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
    });
  };

  return (
    <div>
      <div className="home" id="home">
        <h1>Welcome to BookStore</h1>
        <p>Turning Pages, Creating Memories...</p>
        <p>{name}</p>

        <Link to="Name">
          <button onClick={() => handleClick}>Name</button>
        </Link>
        <Link to="Book">
          <button onClick={() => handleClick}>Book</button>
        </Link>
        <Link to="Dashboard">
          <button onClick={() => handleClick}>Dashboard</button>
        </Link>
      </div>

      <div className="Addpages">
        <input type="checkbox" id="form-switch" />

        <form
          className="Books"
          id="AddBooks-form"
          action=""
          method="post"
          onSubmit={handleSubmit}
        >
          <h2>AddBook</h2>
          <p>Blog title </p>
          <input
            type="text"
            placeholder=" Enter AddBook"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit" id="btn" onSubmit={addbooks}>
            AddBook
          </button>
          <label for="form-switch">
            <span>AddName</span>
          </label>
        </form>

        <form
          id="AddName-form"
          action=" "
          method="post"
          onSubmit={handleSubmit}
        >
          <h2>AddName</h2>
          <p>Blog Author </p>
          <input
            type="name "
            placeholder=" Enter AddName"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button type="submit" id="btn" onSubmit={addname}>
            AddName
          </button>

          <label for="form-switch">AddBook..</label>
       
        </form>
      </div>
    </div>
  );
}

export default Home;
