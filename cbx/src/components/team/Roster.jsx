import React from "react";
import { people } from "./teamIndex";

const Roster = ({ aspect }) => {
    //aspect is a string
    function filter(profile) {
        return profile.teams.includes(aspect);
    }
    return (
        <div className="bg-white flex flex-col justify-center items-center text-black text-4xl absolute">
            {people.map((tab, index) => (
                <div className={`${filter(tab) ? "visible" : "hidden"}`}>
                    {tab.teams}
                </div>
            ))}
        </div>
    );
};

export default Roster;
