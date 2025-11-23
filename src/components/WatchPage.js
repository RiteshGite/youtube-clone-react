import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsConatainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex w-full px-10 mt-[70px] gap-6">

      <div className="flex-[3]"> 
        <iframe
          className="w-full rounded-xl"
          style={{ height: "500px" }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="mt-6">
          <CommentsContainer />
        </div>
      </div>

      <div className="flex-[1]">
        <LiveChat />
      </div>

    </div>
  );
};

export default WatchPage;