// Footer.jsx
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import email from "./assets/email.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import X from "./assets/X.svg";

import React, { useState } from "react";
import logo from "../static/assets/final-logos.png";
import { motion } from "framer-motion";

const CookieNotice = ({ onAccept, acceptedState }) => {
    const handleAccept = () => {
        onAccept();
    };

    return (
        <motion.div
            initial="hidden"
            whileInView={acceptedState ? "visible" : "hidden"}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 * acceptedState }}
            variants={{
                visible: { y: 0 },
                hidden: { y: "100%" },
            }}
            className="fixed bottom-0 left-0 w-screen bg-black text-white p-2 text-center z-30"
        >
            <p>
                This website uses cookies. By continuing to use this site, you
                accept our use of cookies.
            </p>
            <div className="w-screen absolute flex flex-row justify-end items-start">
                <img
                    src={X}
                    className="h-6 mr-8 hover:cursor-pointer"
                    onClick={() => {
                        handleAccept();
                    }}
                />
            </div>
            <button
                onClick={handleAccept}
                className="hover:underline hover:bg-white bg-black hover:text-black border-[1px] px-4 my-2 transition-all duration-300 ease-linear border-white"
            >
                Accept
            </button>
        </motion.div>
    );
};

const currentYear = new Date().getFullYear();
const Footer = () => {
    const [showCookieNotice, setShowCookieNotice] = useState(true);

    const handleCookieAccept = () => {
        setShowCookieNotice(false);
    };

    return (
        <footer className="p-8 pt-16 bg-black text-white w-screen">
            <CookieNotice
                onAccept={handleCookieAccept}
                acceptedState={showCookieNotice}
            />
            <div className="grid grid-cols-9 gap-4">
                <div className="col-start-1 col-3 w-64">
                    <img
                        className="object-contain h-16 content-start"
                        src={logo}
                        alt="CBX Partners Logo"
                    />
                </div>
                <div className="col-start-8 mx-3">
                    <ul className="flex items-center">
                        {<li>
                            <a
                                href="mailto:info@cbxcapitalpartners.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4.5rem",
                                    }}
                                    src={email}
                                    alt=""
                                    className="scale-150"
                                />
                            </a>
                        </li>}
                        {/* <li>
                            <a
                                href="www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={facebook}
                                    alt=""
                                />
                            </a>
                        </li> */}
                        <li>
                            <a
                                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcbxpartners"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    className="scale-125"
                                    src={twitter}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/cbxpartners/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={instagram}
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/cbxpartners/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{
                                        width: "2rem",
                                        marginRight: "4rem",
                                    }}
                                    src={linkedin}
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="grid grid-cols-9 mt-2 text-left">
                <div className="col-start-1 col-span-8">
                    <p>
                        Contact: info@cbxcapitalpartners.com
                    </p>
                    <p>
                        © {currentYear} CBX Capital Partners Management LLC. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-end text-nowrap text-md gap-2 text-gray-300 oerflow-hidden -mt-6">
                    <div className="hover:underline">
                        <a>Legal & Regulatory Information</a>
                    </div>
                    <span>|</span>
                    <div className="hover:underline">
                        <a>Terms & Conditions</a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
