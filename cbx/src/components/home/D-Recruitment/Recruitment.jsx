import { Link as ScrollLink } from "react-scroll";
const Recruitment = () => {
    return (
        <div className="h-screen w-screen flex flex-col">
            <div
                id="recruitment"
                className="flex flex-col justify-center items-center font-bold text-4xl text-white h-full w-full mb-56"
            >
                <div className="sm:text-5xl text-3xl text-center sm:mt-[20vh] flex flex-col gap-2">
                    <span>Applications Open Fall 2024</span>
                    {/* application open fall 2024 */}
                    <br />
                    <span className="sm:text-4xl font-bold text-center">
                        {/* Use ScrollLink instead of Link */}
                        <ScrollLink
                            style={{
                                textDecoration: "underline",
                                cursor: "pointer",
                                transition: "color 0.3s ease", // Adding a transition for a smooth effect
                                color: "lightblue", // Default color
                            }}
                            to="applicationForm"
                            smooth={true}
                            duration={500}
                        >
                            Investment Team Resume Drop
                            {/* Investment team resume*/}
                        </ScrollLink>{" "}
                        | Submit Interest
                    </span>{" "}
                    <br />
                    <span className="sm:text-4xl">
                        <ScrollLink
                            style={{
                                textDecoration: "underline",
                                cursor: "pointer",
                                transition: "color 0.3s ease", // Adding a transition for a smooth effect
                                color: "lightblue", // Default color
                            }}
                            to="applicationForm"
                            smooth={true}
                            duration={500}
                        >
                            Operations Team Resume Drop
                            {/* Investment team resume*/}
                        </ScrollLink>{" "}
                        | Submit Interest
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;
