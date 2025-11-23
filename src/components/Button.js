const Button = ({ name }) => {
    if (name === "All")
        return (
            <button className="font-medium text-white bg-black px-4 py-1.5 rounded-full mx-2 whitespace-nowrap">
                All
            </button>
        );

    return (
        <button className="font-medium bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full mx-2 whitespace-nowrap">
            {name}
        </button>
    );
};
export default Button;