import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Navigate, Link } from "react-router-dom";
import "./index.css";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    try {
      const account = await client.account();
      setAccount(account);
    } catch (error) {
      console.log("Not logged in");
    }
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
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
            <Link to="/makemoney/signin" className="btn btn-primary">
              Sign In
            </Link>
            <Link to="/makemoney/signup" className="btn btn-success">
              Sign Up
            </Link>
          </div>
        )}
        {account && (
          <div>
            <br />
            <label for="username">Current Username</label>
            <input
              id="username"
              className="form-control"
              value={account.username}
              onChange={(e) =>
                setAccount({ ...account, username: e.target.value })
              }
            />
            <br />
            <label for="password">Current Password</label>
            <input
              id="password"
              className="form-control"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <br />
            <label for="fname">Your First Name</label>
            <input
              id="fname"
              className="form-control"
              type="text"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />
            <br />
            <label for="lname">Your Last Name</label>
            <input
              id="lname"
              className="form-control"
              type="text"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />
            <br />
            <label for="email">Your Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
            <br />
            <label for="phone">Your Phone Number</label>
            <input
              id="phone"
              className="form-control"
              value={account.phone}
              onChange={(e) =>
                setAccount({ ...account, phone: e.target.value })
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
