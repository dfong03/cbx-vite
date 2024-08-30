import React from "react";
import RecruitmentForm from "../../components/home/E-Form/RecruitForm";

const Recruiting = () => {
    return (
        <div className="top-0 left-0 w-screen">
    <div className="w-screen h-[120vh] bg-black relative overflow-hidden flex flex-col items-center justify-center">
        <div className="text-white h-screen w-screen absolute z-10 flex flex-col items-center justify-center sm:flex">
            <div className="w-1/3 text-xl text-center">
                <h1 className="font-bold mb-4 text-2xl">
                    Recruitment
                </h1>
                <p>
                    CBX Partners’ investment team does not accept unsolicited applications or resumes. Should you be referred, you will be approached by a member of the team. We seek Columbia undergrads with demonstrated aptitude, passion, and experience in investing.
                </p>
                
                <p className="mt-8">
                recruiting@cbxcapitalpartners.com
                </p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Recruiting;
