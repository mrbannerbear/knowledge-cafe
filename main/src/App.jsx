import Blogs from "./components/blogs/Blogs";
import { useState } from 'react';
import Bookmark from "./components/bookmarks/Bookmark";
import Header from "./components/header/Header";


function App() {
  const [bookmarkName, setBookmarkName] = useState([]);
  const [timeRead, setTimeRead] = useState(0)

  const handleBookmarkClick = (blog_title) => {
    console.log(blog_title);
    const bookMarkArray = [...bookmarkName, blog_title]
    setBookmarkName(bookMarkArray);
  };

  const handleMarkRead = (reading_time) => {
    const newTimeRead = parseFloat(timeRead) + parseFloat(reading_time);
    setTimeRead(newTimeRead)
  }

  return (
    <div className="px-16 ">
      <Header></Header>
      <div className="flex flex-col md:flex-row justify-between">
        <Blogs handleBookmarkClick={handleBookmarkClick}
        handleMarkRead={handleMarkRead}
        ></Blogs>
        <Bookmark timeRead = {timeRead}
         bookmarkName={bookmarkName}></Bookmark>
      </div>
    </div>
  );
}

export default App;
