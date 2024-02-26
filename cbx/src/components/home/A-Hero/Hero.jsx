import logoCbx from "./assets/CBX_white_cbx.png";
import logoPartners from "./assets/CBX_white_partners.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function Hero() {
    const [eat, setMyass] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setMyass(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div
                id="home"
                className={`bg-hero bg-no-repeat bg-center bg-cover`}
            >
                <div className="w-screen px-5 pb-24 m-auto h-screen flex flex-col justify-center items-center object-scale-down">
                    <div className="flex flex-row justify-center items-center">
                        <motion.div
                            className="m-auto flex justify-center w-[26%]"
                            alt="logo"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.7,
                                delay: 1.2,
                                ease: "easeInOut",
                            }}
                            variants={{
                                visible: { x: "5%", y: "-50%", opacity: 100 },
                                hidden: { x: "25%", y: "-100%", opacity: 0 },
                            }}
                        >
                            <img
                                src={logoCbx}
                                className="inline p-0 w-full"
                                alt="logo"
                            />
                        </motion.div>
                        <div
                            className="w-[10%] flex justify-center display-inline"
                            alt="logo"
                        >
                            <div
                                className={`absolute h-[5px] w-[25%] 
                            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                            ${eat? "opacity-100 animate-slice" :"opacity-0"}  from-50% from-[#B5DEF6]
                            to-60% to-[#ffffff00] -rotate-[50deg]`}
                            ></div>
                        </div>
                        <motion.div
                            className="m-auto flex justify-center w-[64%] "
                            alt="logo"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.7,
                                delay: 1.2,
                                ease: "easeInOut",
                            }}
                            variants={{
                                visible: { x: 0, y: "50%", opacity: 100 },
                                hidden: { x: "-10%", y: "100%", opacity: 0 },
                            }}
                        >
                            <img
                                src={logoPartners}
                                className="inline p-0 h-full"
                                alt="logo"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
