import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Navigate, Link } from "react-router-dom";
import { setAccount, updateAccount } from "./accountReducer";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import DisplayWatchlist from "../Watchlist/displayWatchlist";
import { findWatchlistById } from "../Watchlist/client";
function Account() {
  const account = useSelector((state) => state.accountReducer.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchAccount = async () => {
    try {
      const account = await client.account();
      dispatch(setAccount(account));
    } catch (error) {
      console.log("Not logged in");
    }
  };
  const save = async () => {
    await client.updateUser(account);
    dispatch(updateAccount(account));
  };
  const signout = async () => {
    await client.signout();
    dispatch(setAccount(null));
    navigate("/makemoney/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="content">
      <div className="container-fluid">
        <h4>My Account</h4>
        {!account && (
          <div>
            <Link to="/makemoney/signin" className="btn btn-custom-filled me-2">
              Sign In
            </Link>
            <Link to="/makemoney/signup" className="btn btn-custom-outline">
              Sign Up
            </Link>
          </div>
        )}
        {account && (
          <div>
            <br />
            <label htmlFor="username">Current Username</label>
            <input
              id="username"
              className="form-control"
              value={account.username}
              onChange={(e) =>
                dispatch(setAccount({ ...account, username: e.target.value }))
              }
            />
            <br />
            <label htmlFor="password">Current Password</label>
            <input
              id="password"
              className="form-control"
              value={account.password}
              onChange={(e) =>
                dispatch(setAccount({ ...account, password: e.target.value }))
              }
            />
            <br />
            <label htmlFor="fname">Your First Name</label>
            <input
              id="fname"
              className="form-control"
              type="text"
              value={account.firstName}
              onChange={(e) =>
                dispatch(setAccount({ ...account, firstName: e.target.value }))
              }
            />
            <br />
            <label htmlFor="lname">Your Last Name</label>
            <input
              id="lname"
              className="form-control"
              type="text"
              value={account.lastName}
              onChange={(e) =>
                dispatch(setAccount({ ...account, lastName: e.target.value }))
              }
            />
            <br />
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={account.email}
              onChange={(e) =>
                dispatch(setAccount({ ...account, email: e.target.value }))
              }
            />
            <br />
            <label htmlFor="phone">Your Phone Number</label>
            <input
              id="phone"
              className="form-control"
              value={account.phone}
              onChange={(e) =>
                dispatch(setAccount({ ...account, phone: e.target.value }))
              }
            />
            <br />
            <button className="btn btn-primary" onClick={save}>
              Update your Information
            </button>
            <br />
            <button className="btn btn-danger" onClick={signout}>
              Signout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Account;
