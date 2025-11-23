

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [SearchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[SearchQuery]) {
        setSuggestions(searchCache[SearchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [SearchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
    const json = await data.json();
    dispatch(cacheResults({ [SearchQuery]: json[1] }));
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 sticky top-0 bg-white z-[9999]">
      
      <div className="flex items-center gap-2">
        <div
          onClick={toggleMenuHandler}
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
        >
          <i className="ri-menu-line text-2xl"></i>
        </div>

        <Link to="/" className="flex items-center">
          <img
            alt="youtube-logo"
            className="w-24 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </Link>
      </div>

      <div className="relative w-[40%]">
        <div className="flex items-center">
          <input
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-l-full px-5 py-2 w-full focus:outline-none focus:border-blue-500"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <Link to={"/result?q=" + SearchQuery}>
            <button className="border border-gray-300 bg-gray-100 rounded-r-full px-5 py-2.5 hover:bg-gray-200">
              <i className="ri-search-line text-lg"></i>
            </button>
          </Link>

          <div className="p-2.5 ml-3 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
            <i className="ri-mic-line text-xl"></i>
          </div>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute mt-1 left-0 bg-white border border-gray-300 rounded-xl shadow-lg z-[10000] w-[calc(100%-80px)]">
            <ul className="py-2">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-4"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSearchQuery(s);
                    setShowSuggestions(false);
                    navigate("/result?q=" + s);
                  }}
                >
                  <i className="ri-search-line text-gray-500"></i>
                  <span className="text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>


      <div className="flex items-center gap-1">

        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <i className="ri-video-add-line text-2xl"></i>
        </div>


        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer relative">
          <i className="ri-notification-3-line text-2xl"></i>
      
          <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-medium px-1.5 rounded-full">
            9+
          </span>
        </div>

        <img
          alt="user"
          className="w-8 h-8 rounded-full cursor-pointer ml-3"
          src="https://openclipart.org/image/2000px/247319"
        />
      </div>
    </div>
  );
};

export default Head;