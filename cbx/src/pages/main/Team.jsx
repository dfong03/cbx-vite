import React from "react";
import Roster from "../../components/team/Roster";
import NavBar from "../../components/globals/Transition-B/Transition-B";
import Footer from "../../components/globals/static/Footer";
import VerticalMenu from "../../components/team/VerticalMenu";
const Team = () => {
    return (
        <div className="absolute top-0 left-0">
            <NavBar />
            <div className="w-screen h-[200vh] overflow-hidden mb-20">
                <div className="w-1/4 h-3/4 absolute">
                    <VerticalMenu />
                </div>
                <div className="ml-[25vw] w-3/4 h-full">
                    <Roster aspect={"investment"} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
