import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import ComingSoon from "./pages/ComingSoon";
import LPLogin from "./pages/main/LPLogin";
import ShowCompanies from "./components/team/companies/ShowCompany";
import Recruiting from "./pages/main/Recruiting";
import Team from "./pages/main/Team";
import TeamMember from "./pages/sub/TeamMember";
import Portfolio from "./pages/main/Portfolio";

function App() {
    return (
        <div>
            <div className="bg-black">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/team/*" element={<TeamMember />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/partners" element={<ComingSoon />} />
                    <Route path="/partner-firms" element={<ComingSoon />} />
                    <Route path="/insights" element={<ComingSoon />} />
                    <Route path="/recruiting" element={<Recruiting />} />
                    <Route path="/applicationForm" element={<Recruiting />} />
                    <Route path="/lp-login" element={<LPLogin />} />
                    <Route path="/company/:name" element={<ShowCompanies />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
