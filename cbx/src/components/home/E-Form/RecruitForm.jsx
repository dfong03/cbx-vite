import axios from "axios";
import React, { useState } from "react";
import check from "./greenCheckMark.svg";
import "../../../index.css";

export default function RecruitmentForm() {
    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // submit button is disabled while sending
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files) {
            setFile(files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (file && email && name && !sending) {
            // prepare form data for sending
            const formData = new FormData();
            formData.append("file", file);
            formData.append("ApplicantEmail", email);
            formData.append("Name", name);

            // start sending process
            setSending(true);
            try {
                await axios.post(
                    "https://cbx-backend-e5909b4449e5.herokuapp.com/team/sendpdf",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                setSubmitted(true);
                // alert(
                //     "PDF sent successfully, thank you! If your application is successful, we will be in contact via email."
                // );
            } catch (error) {
                alert("Error sending PDF");
                console.error(error);
            } finally {
                setSending(false);
            }
        } else {
            alert("Please select a PDF and fill all relevant fields");
        }
    };

    return (
        <div id="applicationForm" style={{ backgroundColor: "white" }}>
            <section className="h-screen flex flex-col justify-center items-center text-black">
                {/* Note: The action functionality for form submission is not yet implemented. */}
                <form
                    className={`flex flex-col items-start ${submitted ? "absolute opacity-0 transition duration-500 ease-linear" : "opacity-100 z-10"}`}
                    action="/submit-form"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <span className="font-bold text-3xl text-black">
                        Resume Drop 2024
                    </span>
                    <br />
                    <br />
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="bg-transparent border-b border-black focus:border-white focus:outline-none text-black w-full"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br />
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Columbia School Email"
                        className="bg-transparent border-b border-black focus:border-white focus:outline-none text-black w-full"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br />
                    <br />

                    <label>Team: </label>
                    <select className="mt-2 w-full opacity-50 outline-none mb-10 rounded-none border-b border-black">
                        <option disabled selected value>
                            Select one of the following teams:
                        </option>
                        <option>Investment</option>
                        <option>Operations</option>
                    </select>

                    <label htmlFor="fileInput">Resume: </label>
                    <label
                        id="fileLabel"
                        className="text-customBlue underline py-2 px-4 cursor-pointer inline-block"
                    >
                        <span className="-ml-4">Upload</span>
                        <input
                            type="file"
                            className="hidden"
                            id="fileInput"
                            onChange={handleFileChange}
                            accept=".pdf"
                        />
                    </label>
                    <div id="fileNameDisplay" className="text-black mt-2">
                        {file ? `Selected file: ${file.name}` : ""}
                    </div>
                    <br />
                    <br />

                    <input
                        type="submit"
                        value="Submit"
                        className={`hover:font-bold bg-gray-500 text-white py-2 px-4 rounded w-full ${sending ? "opacity-60" : "opacity-100"}`}
                        disabled={sending}
                    />
                </form>

                {/* /checkmarker */}
                <div className={`flex flex-col items-center justify-center ${submitted ? "opacity-100 transition duration-1000 ease-linear delay-[800ms]" : "absolute opacity-0"}`}>
                    <img src={check} className="h-36"/>
                    <p className="flex flex-col font-light text-4xl mt-10">
                    <span className="font-bold">You've successfully applied!</span>
                    <span className="mt-2 w-3/5 text-center mx-auto">We've successfully recieved your application. If your application is successful, we will be in contact via email.</span>
                    </p>
                </div>
            </section>
        </div>
    );
}
