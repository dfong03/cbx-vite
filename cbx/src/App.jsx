import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import ComingSoon from "./pages/ComingSoon";
import SecretLogo from "./pages/SecretLogo"
import LPLogin from "./pages/main/LPLogin";
import ShowCompanies from "./components/team/companies/ShowCompany";
import Recruiting from "./pages/main/Recruiting";
import Team from "./pages/main/Team";
import TeamMember from "./pages/sub/TeamMember";
import Portfolio from "./pages/main/Portfolio";
import Footer from "./components/globals/static/Footer";
import NavBar from "./components/globals/Transition-B/Navbar";

function App() {
    return (
        <div className="absolute top-0 left-0 w-screen h-full">
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/team/*" element={<TeamMember />} />
                    <Route path="/investments" element={<ComingSoon />} />
                    <Route path="/news" element={<ComingSoon />} />
                    <Route path="/partners" element={<ComingSoon />} />
                    <Route path="/partner-firms" element={<ComingSoon />} />
                    <Route path="/insights" element={<ComingSoon />} />
                    <Route path="/recruiting" element={<Recruiting />} />
                    <Route path="/applicationForm" element={<Recruiting />} />
                    <Route path="/lp-login" element={<LPLogin />} />
                    <Route path="/company/:name" element={<ShowCompanies />} />
                    <Route path="/94F6E5B388EF8986DC378540641195B0" element={<SecretLogo />} />
                </Routes>
            <div className="bottom-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
}

export default App;
