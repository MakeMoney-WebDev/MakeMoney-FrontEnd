import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import "./index.css";
import { stockSearch } from "./client";
import { useState } from "react";
import { useNavigate, Routes, Route, Navigate, Link } from "react-router-dom";

function Topbar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const handleSearch = async () => {
		try {
			const searchData = await stockSearch(searchTerm);
			console.log("Search Data:", searchData);
			navigate("/makemoney/home", { state: { searchData } });
		} catch (error) {
			console.log("Error occurred:", error);
			setErrorMessage(error.response.data.message);
			navigate("/makemoney/home", { state: { errorMessage } });
		}
	};
	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<div className="topbar">
			<div className="topbar-center">
				<input
					type="text"
					placeholder="Search for various stocks"
					value={searchTerm}
					onChange={handleChange}
				/>
				<button className="btn btn-light" onClick={handleSearch}>
					<FaSearch className="search-icon" />
				</button>
			</div>
			<div className="topbar-right">
				<FaBell className="icon" />
				<FaUserCircle className="icon" />
				<div className="profile">
					<span className="name">Profile Name</span>
					<img src="/path-to-your-profile-picture.jpg" alt="profile" className="profile-picture" />
					<div className="dropdown">{/* Dropdown items */}</div>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
