export default function Bookmark({bookmarkName}) {
  return (
    <>
      <div className="border-2 w-1/4">
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
