import React from "react";
import TransitionA from "../../components/home/A-Hero/Hero.jsx";
import Metrics from "./../../components/home/B-Metrics/Metrics.jsx";
import Organizer from "./../../components/home/C-Bricks/Organizer.jsx";
import Recruitment from "./../../components/home/D-Recruitment/Recruitment.jsx";
import RecruitmentForm from "../../components/home/E-Form/RecruitForm.jsx";
const Home = () => {
    return (
        <div className="w-screen top-0 left-0 bg-black">
            {/* Render components for the '/' route */}
            <TransitionA />
            <Metrics />
            <Organizer />
            
        </div>
    );
};

export default Home;
