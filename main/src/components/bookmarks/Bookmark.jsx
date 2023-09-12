import MarkRead from "../markRead/MarkRead";

export default function Bookmark(props) {
  const bookmarkName = props.bookmarkName;
  const timeRead = props.timeRead;
  return (
    <>
      <div className="w-1/4">
        <div>
          <MarkRead timeRead={timeRead}></MarkRead>
        </div>
        <div className="bg-neutral-200 rounded-md p-3">
          <h2
            className="text-center mb-3 font-semibold"
          >
            Bookmarks
          </h2>
          <div>
            {bookmarkName.map((eachBookmark) => (
              <div className="">
                <button className="text-left hover:underline text-sm mb-2
                ">{eachBookmark}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
