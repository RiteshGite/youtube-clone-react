import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  return (
    <div className={`flex-1 h-screen transition-all duration-300 ${isMenuOpen ? "ml-60" : "ml-0"}`}>
      <ButtonList />
      <div className="overflow-y-auto h-full">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;