import commentsData from "../utils/CommentData";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 mt-4 shadow-sm bg-gray-100 rounded-lg">
      <img
        alt="user"
        className="w-8 h-8 rounded-full cursor-pointer"
        src="https://openclipart.org/image/2000px/247319"
      />
      <div className="ml-3">
        <h1 className="font-bold">{name}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-10 pl-5 border-l-2 border-gray-400">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-4 p-2 w-full">
      <h1 className="text-2xl font-bold mb-2">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
