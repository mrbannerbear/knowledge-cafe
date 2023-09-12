import Blogs from "./components/blogs/Blogs";
import { useState } from 'react';
import Bookmark from "./components/bookmarks/Bookmark";
import Header from "./components/header/Header";

function App() {
  const [bookmarkName, setBookmarkName] = useState([])

  const handleBookmarkClick = (blog_title) => {
    console.log(blog_title);
    const bookMarkArray = [...bookmarkName, blog_title]
    setBookmarkName(bookMarkArray);
  };

  return (
    <div className="px-16 ">
      <Header></Header>
      <div className="flex flex-col md:flex-row justify-between">
        <Blogs handleBookmarkClick={handleBookmarkClick}></Blogs>
        <Bookmark bookmarkName={bookmarkName}></Bookmark>
      </div>
    </div>
  );
}

export default App;
