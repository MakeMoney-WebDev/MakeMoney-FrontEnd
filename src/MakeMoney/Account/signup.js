import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./index.css";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/makemoney/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="content">
      <div className="container-fluid">
        <h4>Sign Up for An Account Today!</h4>
        {error && <div>{error}</div>}
        <br />
        <label for="username">Username</label>
        <input
          id="username"
          className="form-control"
          placeholder="Enter your desired Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
        <br />
        <label for="password">Password</label>
        <input
          id="password"
          className="form-control"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <br />
        <label for="first">First Name</label>
        <input
          id="first"
          className="form-control"
          placeholder="Enter your first name"
          value={credentials.firstName}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              firstName: e.target.value,
            })
          }
        />
        <br />
        <label for="last">Last Name</label>
        <input
          id="last"
          className="form-control"
          placeholder="Enter your last name"
          value={credentials.lastName}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              lastName: e.target.value,
            })
          }
        />
        <br />
        <label for="email">Email</label>
        <input
          id="email"
          className="form-control"
          type="email"
          placeholder="Enter your email."
          value={credentials.email}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          }
        />
        <br />
        <label for="phone">Phone Number</label>
        <input
          id="phone"
          className="form-control"
          placeholder="Enter your phone number"
          value={credentials.phone}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              phone: e.target.value,
            })
          }
        />
        <br />
        <button className="btn btn-primary" onClick={signup}>
          Signup
        </button>
      </div>
    </div>
  );
}
export default Signup;
