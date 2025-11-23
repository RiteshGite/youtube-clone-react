import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const btnArray = [
        "All", "Anime", "Science", "Music", "Gaming", "AI", "History",
        "Sports", "Movies", "Technology", "Education", "Comedy", "Travel",
        "Food", "Vlogs", "Documentary", "News", "Coding", "Shorts", "Podcasts"
    ];

    return (
        <div
            className={`fixed top-[52px] z-50 right-0 flex overflow-x-auto hide-scrollbar bg-white border-b border-gray-200 py-3 px-4 transition-all duration-300 ${
                isMenuOpen ? "left-60" : "left-0"
            }`}
        >
            {btnArray.map((sub, index) => (
                <Button key={index} name={sub} />
            ))}
        </div>
    );
};

export default ButtonList;
