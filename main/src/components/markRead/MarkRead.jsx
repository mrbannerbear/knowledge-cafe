const MarkRead = (props) => {
  const timeRead = props.timeRead;
  return <div className="border-[1.5px] text-center py-3 my-3
  rounded-md text-blue-700 font-semibold
  border-blue-500 bg-blue-200
  ">Reading Time: {timeRead} min</div>;
};

export default MarkRead;
