const ChatMessage = ({ name, message }) => {
  return (
    <div className="
      flex items-center gap-2 py-1 px-2 rounded-lg
      hover:bg-gray-100 transition-colors cursor-pointer
    ">
      
      <img
        alt="user"
        className="w-6 h-6 rounded-full"
        src="https://openclipart.org/image/2000px/247319"
      />
      <p className="text-sm">
        <span className="font-semibold mr-1">{name}</span>
        <span className="text-gray-700">{message}</span>
      </p>

    </div>
  );
};

export default ChatMessage;
