import React from "react";
import { people } from "./teamIndex";
import arrow from "./arrow.svg";
import { useNavigate } from "react-router-dom";

const Roster = ({ aspect }) => {
    const nav = useNavigate();
    //aspect is a string
    function filter(profile) {
        if (aspect === "all") {
            return true;
        }
        return profile.teams.includes(aspect.toLowerCase());
    }

    function profileClick(person) {
        //navigate to a NEW PAGE with that 
        nav("/team/" + person.redirect);
    }

    return (
        <section className="bg-gray-100 flex flex-col justify-center items-center text-black text-4xl absolute">
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
            <div className="w-full h-full grid grid-cols-4 overflow-hidden px-4">
                {people.map((tab) => (
                    <div
                        className={`${
                            filter(tab) ? "visible" : "hidden"
                        } m-4 rounded-md overflow-hidden hover:cursor-pointer group`}
                        onClick={()=>{profileClick(tab)}}
                    >
                        <div className="rounded-lg bg-white w-full">
                            <img
                                src={tab.profile}
                                className="brightness-100 contrast-75 saturate-100 scale-100 grayscale"
                            />
                        </div>
                        <div className="flex flex-col text-left mt-4">
                            <span className="text-2xl font-semibold group-hover:underline">
                                {tab.name}
                            </span>
                            <span className="text-xl">{tab.title}</span>
                        </div>
                        <div className="w-full flex flex-row justify-end items-center -mt-6 mb-4">
                            <img
                                src={arrow}
                                className="h-4 left-0 group-hover:visible invisible"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Roster;
