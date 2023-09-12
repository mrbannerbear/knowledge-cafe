import Blogs from "./components/blogs/Blogs";
import Bookmark from "./components/bookmarks/Bookmark";
import Header from "./components/header/Header";


function App() {

  const [bookmarkName, setBookmarkName] = useState([])

  return (
    <div className="px-16 ">
      <Header></Header>
      <div className="flex flex-col md:flex-row justify-between">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
