import React from "react";
import NavBar from "../../components/globals/Transition-B/Transition-B";
import RecruitmentForm from "../../components/home/E-Form/RecruitForm";
import Footer from "../../components/globals/static/Footer";

const Recruiting = () => {
    return (
        <div className="absolute top-0 left-0">
            <NavBar />
            <RecruitmentForm />
            <Footer />
        </div>
    );
};

export default Recruiting;
