import React, { useEffect, useState } from "react";
import NameProps from "./NameProps";

function Name() {
  const [blogs, setBlogs] = useState(null);
const [isPending,setIsPending] =useState(true);



  const handleSubmit = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id === id);
    setBlogs(newBlogs);
  };

  const handleClick = (id) => {};

  useEffect(() => {
    setTimeout(() =>{

   
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      });
    },1000)
  }, []);
  return (
    <div className="names" id="Name">
      {isPending && <div> Loading...</div>}
      {blogs && <NameProps
        blogs={blogs}
        title="userNames"
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />}
    </div>
  );
}

export default Name;
