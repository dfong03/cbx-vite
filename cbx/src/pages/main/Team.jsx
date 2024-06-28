import React, { useEffect, useRef, useState } from "react";
import Roster from "../../components/team/Roster";
import VerticalMenu from "../../components/team/VerticalMenu";
const Team = () => {
    const [currentFilter, setFilter] = useState("all");
    return (
        <div className="top-0 left-0 mb-8 bg-gray-100">
            <section>
                <div className="w-screen h-[150vh] overflow-hidden -mb-8">
                    <div className="w-1/4 h-[150vh] absolute">
                        <VerticalMenu currentFilter={currentFilter} setFilter={setFilter}/>
                    </div>
                    <div className="ml-[25vw] w-3/4 h-full relative z-10">
                        <Roster aspect={currentFilter} setAspect={setFilter}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
