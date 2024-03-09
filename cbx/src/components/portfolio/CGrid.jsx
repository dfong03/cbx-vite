import React from "react";
// import { people } from "./teamIndex";
// import arrow from "./arrow.svg";
// import { useNavigate } from "react-router-dom";
import { companies } from "./companies";

const CGrid = () => {
    // const nav = useNavigate();
    // //aspect is a string
    // function filter(profile) {
    //     if (aspect === "all") {
    //         return true;
    //     }
    //     return profile.teams.includes(aspect.toLowerCase());
    // }

    // function namesearch(profile) {
    //     for (const name in profile.names) {
    //         if (profile.names[name].startsWith(aspect.toLowerCase())) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // function profileClick(person) {
    //     //navigate to a NEW PAGE with that
    //     nav("/team/" + person.redirect);
    // }

    return (
        <section className="bg-gray-100 h-[200vh] flex flex-col justify-start items-center text-black text-4xl">
            <div className="mt-28 w-full ml-16">
                <div
                    className={`mb-4 text-sm flex flex-row w-full gap-3`}
                >
                    <button
                        className="h-8 text-black border-black border-2 px-4 
                                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                                          hover:text-white transition duration-500 ease-in-out"
                    >
                        ADVISORY BOARD
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-4 
                                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                                          hover:text-white transition duration-500 ease-in-out"
                    >
                        TECHNOLOGY ADVISORY BOARD
                    </button>
                </div>
            </div>

            <div className="w-full ml-16">
                <div
                    className={`mt-4 mb-4 text-sm flex flex-row w-full gap-3`}
                >
                    <button
                        className="h-8 text-black border-black border-2 px-4 
                                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                                          hover:text-white transition duration-500 ease-in-out"
                    >
                        ANALYST
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-4 
                                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                                          hover:text-white transition duration-500 ease-in-out"
                    >
                        ASSOCIATE
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-4 
                                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                                          hover:text-white transition duration-500 ease-in-out"
                    >
                        PRINCIPAL
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-4 
                                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                                          hover:text-white transition duration-500 ease-in-out"
                    >
                        MANAGING DIRECTOR
                    </button>
                </div>
            </div>

            {/* Profiles */}
            <div className="w-full h-full grid grid-cols-4 overflow-hidden px-4">
                {companies.map((tab) => (
                    <div
                        className={`m-4 rounded-md overflow-hidden hover:cursor-pointer group`}
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

export default CGrid;
