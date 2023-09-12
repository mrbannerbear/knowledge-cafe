import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handleBookmarkClick, handleMarkRead }) => {
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarkClick={handleBookmarkClick}
          handleMarkRead={handleMarkRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
