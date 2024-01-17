import React, { useEffect, useState } from "react";
import NameProps from "./NameProps";

function Name() {
  const [blogs, setBlogs] = useState(null);
  const handleSubmit = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id === id);
    setBlogs(newBlogs);
  };

  const handleClick = (id) => {};

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="names" id="Name">
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
