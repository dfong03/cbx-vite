import React from "react";

const VerticalMenu = ({ currentFilter, setFilter }) => {
    function swap(state) {
        setFilter(state);
    }
    const elements = (
        <div className="sticky bg-gray-500 text-white text-3xl top-0">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
            </div>
        </div>
    );

    return elements;
};

export default VerticalMenu;
