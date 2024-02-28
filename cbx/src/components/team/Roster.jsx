import React from "react";
import { people } from "./teamIndex";

const Roster = ({ aspect }) => {
    //aspect is a string
    function filter(profile) {
        if (aspect === "all") {
            return true;
        }
        return profile.teams.includes(aspect.toLowerCase());
    }
    return (
        <section className="bg-white flex flex-col justify-center items-center text-black text-4xl absolute">
            <div className="mt-20">
                <span
                    className={`mt-4 ${
                        aspect.toLowerCase() == "advisors"
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    [Button] [Button]
                </span>
            </div>
            <div className="w-full h-full grid grid-cols-4 overflow-hidden">
                {people.map((tab) => (
                    <div
                        className={`${
                            filter(tab) ? "visible" : "hidden"
                        } m-4 rounded-md bg-gray-200`}
                    >
                        {tab.name}
                        <img src={tab.profile} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Roster;
