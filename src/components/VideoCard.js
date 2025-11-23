const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer group">
      <div className="p-2 -m-2 rounded-xl group-hover:bg-gray-200 transition-all duration-200">
        <img 
          className="rounded-xl w-full aspect-video object-cover group-hover:rounded-none group-hover:-translate-y-1 transition-all duration-150" 
          alt="thumbnail" 
          src={thumbnails?.medium?.url} 
        />
        <div className="py-2 px-1">
          <h3 className="font-medium text-sm line-clamp-2 mb-1">{title}</h3>
          <p className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer">{channelTitle}</p>
          <p className="text-xs text-gray-600">{statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;