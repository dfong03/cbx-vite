import React, { useState } from "react";

const VerticalMenu = ({ currentFilter, setFilter }) => {
    function filterEquals(val) {
        return currentFilter.toLowerCase() === val.toLowerCase();
    }

    function clickedMenu(name) {
        if (name === currentFilter) {
            setFilter("all");
        } else {
            setFilter(name);
        }
    }

    function handleInput(value) {
        if (value === "") {
            setFilter("all")
        } else {
            setFilter(value)
        }
    }

    const teams = ["Investment", "Operations", "Advisors"];

    const elements = (
        <div className="sticky bg-gray-500 text-white text-3xl top-0 h-screen overflow-hidden">
            <div className="flex flex-col items-start justify-center w-full h-full px-8 gap-8 font-extralight">
                <span
                    className="text-xl text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer"
                    onClick={() => {
                        setFilter("all");
                    }}
                >
                    OUR TEAM
                </span>
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
                <input type="text" 
                className="rounded-none focus:ring-transparent outline-none text-gray-300 
                w-full bg-gray-500 placeholder:text-gray-400 caret-white border-b-2 border-gray-400 focus:border-white"
                placeholder="Search our team"
                onInput={e=>{handleInput(e.target.value)}}></input>
            </div>
        </div>
    );

    return elements;
};

export default VerticalMenu;
