import Sidebar from "./Sidebar";
import Home from "./Home";
import "./Sidebar/index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./Topbar";
function MakeMoney() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, flexDirection: "column" }}>
        <Topbar />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default MakeMoney;
