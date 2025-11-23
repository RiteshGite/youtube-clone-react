// First add this to public/index.html in <head> section:
// <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed left-0 top-[52px] w-60 p-3 h-[calc(100vh-52px)] bg-white overflow-y-auto z-30 hide-scrollbar">
      
     
      <ul className="space-y-1 text-gray-800 mb-3">
        <Link to="/">
          <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl font-medium">
            <i className="ri-home-fill text-xl"></i>
            <span>Home</span>
          </li>
        </Link>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-youtube-line text-xl"></i>
          <span>Shorts</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-folder-video-line text-xl"></i>
          <span>Subscriptions</span>
        </li>
      </ul>

      <hr className="my-3" />

    
      <Link to="#">
        <h1 className="text-base font-medium text-gray-800 px-3 py-2 mb-1 flex items-center gap-1 hover:bg-gray-100 rounded-xl cursor-pointer">
          You <i className="ri-arrow-right-s-line text-xl"></i>
        </h1>
      </Link>
      <ul className="space-y-1 text-gray-800 mb-3">
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-account-box-line text-xl"></i>
          <span>Your Channel</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-history-line text-xl"></i>
          <span>History</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-play-list-line text-xl"></i>
          <span>Playlists</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-video-line text-xl"></i>
          <span>Your Videos</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-graduation-cap-line text-xl"></i>
          <span>Your Courses</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-time-line text-xl"></i>
          <span>Watch Later</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-thumb-up-line text-xl"></i>
          <span>Liked Videos</span>
        </li>
      </ul>

      <hr className="my-3" />

      <h1 className="text-base font-medium text-gray-800 px-3 py-2 mb-1 flex items-center gap-1">
        Subscriptions <i className="ri-arrow-right-s-line text-xl"></i>
      </h1>
      <ul className="space-y-1 text-gray-800 mb-3">
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-music-2-line text-xl"></i>
          <span>Music</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-football-line text-xl"></i>
          <span>Sports</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-gamepad-line text-xl"></i>
          <span>Gaming</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-movie-2-line text-xl"></i>
          <span>Movies</span>
        </li>
      </ul>

      <hr className="my-3" />

   
      <h1 className="text-base font-medium text-gray-800 px-3 py-2 mb-1">
        Explore
      </h1>
      <ul className="space-y-1 text-gray-800 mb-3">
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-fire-line text-xl"></i>
          <span>Trending</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-shopping-bag-line text-xl"></i>
          <span>Shopping</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-live-line text-xl"></i>
          <span>Live</span>
        </li>
      </ul>

      <hr className="my-3" />

      
      <ul className="space-y-1 text-gray-800 mb-3">
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-settings-3-line text-xl"></i>
          <span>Settings</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-flag-line text-xl"></i>
          <span>Report History</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-question-line text-xl"></i>
          <span>Help</span>
        </li>
        <li className="flex items-center gap-6 cursor-pointer hover:bg-gray-100 px-3 py-2.5 rounded-xl">
          <i className="ri-feedback-line text-xl"></i>
          <span>Send Feedback</span>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;