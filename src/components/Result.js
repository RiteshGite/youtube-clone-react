import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";

const Result = () => {
  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getSearchResult();
  }, [query]);

  const getSearchResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div
      className={`pt-6 w-full max-w-full flex flex-col transition-all duration-300 
  ${isMenuOpen ? "ml-60" : "ml-0"}`}
    >
      {videos?.map((video) => (
        <Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}>
        <ResultCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Result;

