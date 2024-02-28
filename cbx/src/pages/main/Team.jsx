import React, { useState } from "react";
import Roster from "../../components/team/Roster";
import NavBar from "../../components/globals/Transition-B/Transition-B";
import Footer from "../../components/globals/static/Footer";
import VerticalMenu from "../../components/team/VerticalMenu";
const Team = () => {
    const [currentFilter, setFilter] = useState("all");
    return (
        <div className="absolute top-0 left-0">
            <NavBar />
            <section>
                <div className="w-screen h-[200vh] overflow-hidden -mb-8">
                    <div className="w-1/4 h-[200vh] absolute">
                        <VerticalMenu currentFilter={currentFilter} setFilter={setFilter}/>
                    </div>
                    <div className="ml-[25vw] w-3/4 h-full">
                        <Roster aspect={currentFilter} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Team;
