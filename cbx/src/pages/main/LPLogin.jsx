import React from "react";
import LoginPage from "../../components/lplogin/loginpage";
import NavBar from "../../components/globals/Transition-B/Transition-B";
import Footer from "../../components/globals/static/Footer";

const LPLogin = () => {
    return (
        <div className="w-screen absolute top-0 left-0">
            <NavBar />
            <LoginPage />
            <Footer />
        </div>
    );
};

export default LPLogin;
