import Sidebar from "./Sidebar";
import Home from "./Home";
import "./Sidebar/index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./Topbar";
import Account from "./Account/account";
import Watchlist from "./Watchlist";
import Help from "./Help";
import Signup from "./Account/signup";
import Signin from "./Account/signin";
function MakeMoney() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, flexDirection: "column" }}>
        <Topbar />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Home" element={<Home />} />
            <Route path="Watchlist" element={<Watchlist />} />
            <Route path="Help" element={<Help />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default MakeMoney;
