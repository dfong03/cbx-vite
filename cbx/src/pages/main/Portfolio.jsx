import React from "react";
import NavBar from "../../components/globals/Transition-B/Transition-B";
import Footer from "../../components/globals/static/Footer";
import CGrid from "../../components/portfolio/CGrid";
const Portfolio = () => {
    return (
        <div className="absolute top-0 left-0 bg-black">
            <NavBar />
            <CGrid />
            <Footer />
        </div>
    );
};

export default Portfolio;
