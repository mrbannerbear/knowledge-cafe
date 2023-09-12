import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {

    useEffect(() => {
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])

    const [blogs, setBlogs] = useState([])

    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;