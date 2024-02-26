import React, { useState } from "react";
import axios from "axios";
import "./loginpage.css";
// import Dashboard from "../depr/AdminPages/adminDashboard";
import background from "./LP_Login.jpeg";
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [attemptedLogin, setAttemptedLogin] = useState(false);
    const [accessToken, setAccessToken] = useState("");

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post(
    //             "http://cbx-backend-e5909b4449e5.herokuapp.com/admin/login",
    //             {
    //                 email,
    //                 password,
    //             },
    //             {
    //                 withCredentials: true,
    //             }
    //         );

    //         const data = await response.data;

    //         if (data.success) {
    //             setLoggedIn(true);
    //             setAttemptedLogin(false);
    //             setEmail("");
    //             setPassword("");

    //             const newAccessToken = data.accessToken;
    //             setAccessToken(newAccessToken);
    //             axios.defaults.headers.common[
    //                 "Authorization"
    //             ] = `Bearer ${newAccessToken}`;

    //             // Perform a GET request to the '/admin' route after successful login
    //             await axios.get(
    //                 "http://cbx-backend-e5909b4449e5.herokuapp.com/admin",
    //                 {
    //                     withCredentials: true,
    //                 }
    //             );
    //         } else {
    //             setMessage(data.message); // Login failed
    //         }
    //     } catch (error) {
    //         console.error("Login error:", error);

    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             console.error("Response status:", error.response.status);
    //             console.error("Response data:", error.response.data);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             console.error("No response received:", error.request);
    //         } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.error("Error setting up the request:", error.message);
    //         }

    //         setAttemptedLogin(true);
    //         setMessage("An error occurred during login. Please try again.");
    //         setLoggedIn(false);
    //         setAccessToken("");
    //         //await handleLogout();
    //     }
    // };

    // const handleLogout = async () => {
    //     console.log("Logging out for some reason");
    //     try {
    //         const response = await axios.delete(
    //             "http://cbx-backend-e5909b4449e5.herokuapp.com/admin/logout",
    //             {
    //                 withCredentials: true,
    //             }
    //         );

    //         const data = response.data;
    //         setAccessToken("");
    //         setLoggedIn(false); // Clear the authentication state

    //         if (data.success) {
    //             console.log("Logout Success!");
    //         } else {
    //             console.log("Logout Failure");
    //             setMessage(data.message);
    //         }
    //     } catch (error) {
    //         console.error("Error during logout:", error);
    //     }
    // };

    // return !isLoggedIn ? (
        return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: "100vh", // Ensure the div covers the full height of the viewport
            }}
        >
            <div className="w-screen h-screen flex flex-row justify-center items-center">
                <div className="login-container sm:w-[40vw] w-[80vw] flex flex-col">
                    <div className="input-group w-full ">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input
                        className={"login-button"}
                        type="button"
                        // onClick={handleLogin}
                        value={"Login"}
                    />
                    {attemptedLogin && (
                        <p className="error-message">{`${message}`}</p>
                    )}
                </div>
            </div>
        </div>
        )
    // ) : (
    //     <Dashboard onLogout={handleLogout} accessToken={accessToken} />
    // );
};

export default LoginPage;
