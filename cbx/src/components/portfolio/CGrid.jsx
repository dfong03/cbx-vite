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
        <section className="bg-gray-100 flex flex-col justify-start items-center text-black text-4xl">
            <span className="mt-48 mb-12 w-3/4 text-left font-light font-sans text-7xl">CBX Partners Portfolio</span>
            <div className="h-[2px] w-3/4 bg-gray-400 mb-20"/>
            {/* <div className="mt-28 w-full ml-16">
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
            </div> */}

            {/* Profiles */}
            <div className="w-3/4 h-screen grid grid-cols-4 overflow-hidden gap-8 mb-20">
                {companies.map((tab) => (
                    <div
                        className={`rounded-lg overflow-hidden hover:cursor-pointer group hover:opacity-70 transition-opacity duration-300 ease-in-out`}
                    >
                        <div className=" bg-white w-[18vw] h-[16vw] overflow-hidden rounded-lg">
                            <img
                                src={tab.profile}
                                className="bg-cover w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CGrid;
