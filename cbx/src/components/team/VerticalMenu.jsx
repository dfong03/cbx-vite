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
        <div className="sticky bg-gray-100 text-gray-900 text-3xl top-0 h-screen overflow-hidden">
            <div className="flex flex-col items-start justify-center w-full h-full px-8 gap-8 font-extralight">
                <span
                    className="text-xl text-gray-900 hover:text-gray-400 transition duration-300 ease-in-out hover:cursor-pointer"
                    onClick={() => {
                        setFilter("all");
                    }}
                >
                    OUR TEAM
                </span>
                {teams.map((name) => (
                    <div
                        className={`hover:cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out text-4xl select-none ${
                            filterEquals(name)
                                ? "underline text-gray-400"
                                : "no-underline text-gray-900"
                        }`}
                        onClick={() => clickedMenu(name)}
t                    >
                        {name}
                    </div>
                ))}
                <input type="text" 
                className="rounded-none focus:ring-transparent outline-none ext-gray-900 
                w-full bg-gray-100 placeholder:text-gray-400 caret-gray-800 border-b-2 border-gray-400 focus:border-gray-300"
                placeholder="Search"
                onInput={e=>{handleInput(e.target.value)}}></input>
            </div>
        </div>
    );

    return elements;
};

export default VerticalMenu;
