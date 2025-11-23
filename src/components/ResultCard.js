const ResultCard = ({ info }) => {
  if (!info) return null;

  const { snippet } = info;
  const {
    channelTitle,
    title,
    thumbnails,
    description,
    publishedAt
  } = snippet;

  return (
    <div
      className="w-full max-w-full flex gap-4 py-4 px-2 cursor-pointer 
                 hover:bg-gray-100 transition-all"
    >
   
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-[360px] h-[200px] object-cover rounded-lg"
      />

    
      <div className="flex flex-col w-full pr-6">

       
        <h2 className="text-xl font-semibold text-gray-900 leading-snug line-clamp-2">
          {title}
        </h2>

     
        <p className="text-gray-600 mt-2 text-sm font-medium">
          {channelTitle}
        </p>

     
        <p className="text-gray-700 mt-2 line-clamp-2 text-sm">
          {description}
        </p>

      
        <p className="text-gray-500 text-xs mt-3">
          {new Date(publishedAt).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
