import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import "./index.css";
import { stockSearch } from "./client";
import { useState } from "react";
import { useNavigate, Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Topbar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const account = useSelector((state) => state.accountReducer.account);
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
				<button className="btn btn-light ms-2" onClick={handleSearch}>
					<FaSearch className="search-icon" />
				</button>
			</div>
				<div className="topbar-right">
				{account ? (
					<Link to="/MakeMoney/Account" className="profile-link">
						<FaUserCircle className="icon" />
						<div className="profile">
							<span className="name">
								{account.firstName} {account.lastName}
							</span>
							{/* <img src="/path-to-your-profile-picture.jpg" alt="profile" className="profile-picture" /> */}
							<div className="dropdown">{/* Dropdown items */}</div>
						</div>
					</Link>
				):(
					<>
					<Link to="/makemoney/signin" className="btn btn-custom-filled me-2">
						Sign In
					</Link>
					<Link to="/makemoney/signup" className="btn btn-custom-outline">
						Sign Up
					</Link>
					</>
				)}	
				</div>
		</div>
	);
}

export default Topbar;
