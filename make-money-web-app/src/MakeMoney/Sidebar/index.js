import { Link, useLocation } from "react-router-dom";
import PNG from "./MakeMoney.png";
import "./index.css";
import {
  FaUser,
  FaTachometerAlt,
  FaBook,
  FaCalendar,
  FaInbox,
  FaClock,
  FaQuestionCircle,
  FaHome,
} from "react-icons/fa";

function Sidebar() {
  const links = [
    "Home",
    "Account",
    "Dashboard",
    "News",
    "Calendar",
    "Inbox",
    "Watchlist",
    "Help",
  ];
  const { pathname } = useLocation();

  const linksToIconsMap = {
    Home: <FaHome className="text-muted" />,
    Account: <FaUser className="text-muted" />,
    Dashboard: <FaTachometerAlt className="text-muted" />,
    News: <FaBook className="text-muted" />,
    Calendar: <FaCalendar className="text-muted" />,
    Inbox: <FaInbox className="text-muted" />,
    Watchlist: <FaClock className="text-muted" />,
    Help: <FaQuestionCircle className="text-muted" />,
  };

  return (
    <div id="sidebar">
      <div className="list-group">
        <img src={PNG} alt="logo" className="list-group-item" style={{textAlign: "center"}}></img>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/MakeMoney/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
          >
            {linksToIconsMap[link]}
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
