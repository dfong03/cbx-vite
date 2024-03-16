import React, { useState } from "react";
import Footer from "../../components/globals/static/Footer";
import { people } from "../../components/team/teamIndex";
import arrow from "../../components/team/arrow.svg";
import { useNavigate } from "react-router-dom";

const TeamMember = () => {
    let profile;
    const split_url = window.location.href.split("/");
    const nav = useNavigate();

    for (let person of people) {
        if (person.redirect == split_url[split_url.length - 1]) {
            profile = person;
            break;
        }
    }

    function backToTeams() {
        nav("/team")
    }

    return split_url.length != 5 ||
        split_url[split_url.length - 2] != "team" ? (
        <></>
    ) : (
        <div className="w-screen absolute top-0 left-0 mt-20 overflow-hidden">
            <div className="absolute w-screen flex flex-row justify-end items-center mt-[15vh] opacity-30 hover:opacity-100 hover:cursor-pointer group transition duration-500 ease-in-out"
            onClick={()=>{backToTeams()}}>
                <span className="mr-8 text-4xl italic font-semibold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                    Back to Teams
                </span>
                <img src={arrow} className="h-12 mr-[5vw]" />
            </div>
            <section className="h-full w-full flex flex-row justify-center items-center mx-[5vw] my-[15vh]">
                <img
                    src={profile.profile}
                    className="h-[30vw] aspect-square bg-gray-100 rounded-xl mr-8"
                />

                <div className="w-2/3 flex flex-col text-left text-wrap">
                    <span className="font-semibold text-5xl">
                        {profile.name}
                    </span>
                    <span className="font-light text-3xl mt-2">
                        {profile.title}
                    </span>
                    {profile.description
                        .split("\n")
                        .map((sectionDescription) => (
                            <p className="mt-4 mr-[8vw]">
                                {sectionDescription}
                            </p>
                        ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default TeamMember;
