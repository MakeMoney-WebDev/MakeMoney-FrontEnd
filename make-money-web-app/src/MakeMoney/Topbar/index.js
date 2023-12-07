import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import "./index.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-center">
        <input type="text" placeholder="Search for various stocks" />
        <FaSearch className="search-icon" />
      </div>
      <div className="topbar-right">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
        <div className="profile">
          <span className="name">Profile Name</span>
          <img src="/path-to-your-profile-picture.jpg" alt="profile" className="profile-picture" />
          <div className="dropdown">
            {/* Dropdown items */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;