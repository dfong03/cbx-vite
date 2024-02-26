import React from "react";
import NavBar from "../components/globals/Transition-B/Transition-B";
import Footer from "../components/globals/static/Footer";

const ComingSoon = () => {
    return (
        <div className="absolute left-0 top-0">
            <NavBar />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#000",
                    font: "font-poppins",
                    fontSize: "4rem",
                    color: "white",
                }}
                className="w-screen h-screen"
            >
                {/* change font */}
                Coming Spring 2024
            </div>
            <Footer />
        </div>
    );
};

export default ComingSoon;
