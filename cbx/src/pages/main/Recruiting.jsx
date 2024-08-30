import React from "react";
import RecruitmentForm from "../../components/home/E-Form/RecruitForm";

const Recruiting = () => {
    return (
        <div className="top-0 left-0 w-screen">
        <div className="w-screen h-[120vh] bg-black relative overflow-hidden flex items-start justify-start">
            <div className="text-white h-screen w-screen absolute z-10 flex flex-col items-start justify-start pl-8">
                <div className="ml-16 w-1/3 text-xl">
                    <h1 className="font-bold mt-32 text-6xl text-left" style={{ color: '#b4e0fa' }}>
                        Recruitment
                    </h1>
                    <p className="mt-16 text-2xl text-left">
                        CBX Partners’ investment team does not accept unsolicited applications or resumes. Should you be referred, you will be approached by a member of the team.
                    </p>

                    <p className="mt-4 text-2xl text-left">
                        We seek Columbia undergrads with demonstrated aptitude, passion, and experience in investing.
                    </p>
                    
                    <p className="mt-8 text-2xl text-left">
                        recruiting@cbxcapitalpartners.com
                    </p>
                </div>
            </div>
        </div>
    </div>
    

    );
};

export default Recruiting;
