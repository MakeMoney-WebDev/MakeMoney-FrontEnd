import "./App.css";
import MakeMoney from "./MakeMoney";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/MakeMoney" />} />
          <Route path="/MakeMoney/*" element={<MakeMoney />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
