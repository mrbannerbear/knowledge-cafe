import PropTypes from 'prop-types'; // ES6

const Blog = (props) => {
  const { cover_image, blog_title, author, date, reading_time, category } =
    props.blog;

    const handleBookmarkClick = () => {
        
    }

  return (
    <div className="my-8 w-2/3 px-0">
      <div className="">
        <img
          className="lg:w-full lg:h-[380px] rounded-md my-2"
          src={cover_image}
          alt=""
        />
        <div>
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">{author}</div>
              <div className="font-semibold text-xs text-neutral-500">
                {date}
              </div>
            </div>
            <div className="font-semibold text-xs text-neutral-500">
              {reading_time}{" "}
              <button onClick={handleBookmarkClick} className="ml-2">
                <i className="{`${handleBookmarkClick() ? fa-solid : fa-regular}`} fa-bookmark"></i>
              </button>
            </div>
          </div>
          <a className="px-0 w-max hover:cursor-pointer">
            {" "}
            <h3 className="my-3 font-semibold text-3xl hover:underline">{blog_title} </h3>
          </a>
          <div className="font-semibold text-sm text-neutral-500">
            <a className="hover:cursor-pointer">{category}</a>
          </div>
          <div>
            <a className="font-semibold text-sm text-blue-500 hover:cursor-pointer hover:underline">
              Mark as Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
    props: PropTypes.object
}

export default Blog;
