import React from "react";

const VerticalMenu = ({ currentFilter, setFilter }) => {
    function filterEquals(val) {
        return (currentFilter.toLowerCase() === val.toLowerCase());
    }

    function clickedMenu(name) {
        if (name === currentFilter) {
            setFilter("all");
        } else {
            setFilter(name);
        }
    }

    const teams = ["Investment", "Operations", "Advisors"];

    const elements = (
        <div className="sticky bg-gray-500 text-white text-3xl top-0 h-screen">
            <div className="flex flex-col items-start justify-center w-full h-full ml-8 gap-8 font-extralight">
                <span className="text-xl text-gray-300">OUR TEAMS</span>
                {teams.map((name) => (
                    <div
                        className={`hover:cursor-pointer hover:text-white transition duration-300 ease-in-out text-4xl select-none ${
                            filterEquals(name)
                                ? "underline text-white"
                                : "no-underline text-gray-300"
                        }`}
                        onClick={() => clickedMenu(name)}
                    >
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );

    return elements;
};

export default VerticalMenu;
