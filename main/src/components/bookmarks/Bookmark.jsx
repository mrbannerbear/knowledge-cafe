import MarkRead from "../markRead/MarkRead";

export default function Bookmark(props) {
    const bookmarkName = props.bookmarkName;
    const timeRead = props.timeRead
  return (
    <>
      <div className="border-2 w-1/4">
      <div>
        <MarkRead timeRead={timeRead}></MarkRead>
            </div>
        <h2 className="text-center">Bookmarks</h2>
            <div>
            {
                bookmarkName.map((eachBookmark) => 
                <div>
                    <button className="text-left">{eachBookmark}</button>
                </div>)
            }
            </div>
      </div>
    </>
  );
}
