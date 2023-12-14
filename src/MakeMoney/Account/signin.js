import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/makemoney/account");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      }
    }
  };
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="infocard">
          <h4>Welcome Back</h4>
          <br />
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="form-control"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <br />
          <div className="sign-up-prompt">
            Don't have an account?{" "}
            <Link to="/makemoney/signup" className="colored-link">
              Sign up here
            </Link>
          </div>
          <br />
          <button className="btn btn-custom-filled" onClick={signin}>
            Sign In
          </button>
          <br />
          <br />
          {errorMessage && <h4>{errorMessage}</h4>}
        </div>
      </div>
    </div>
  );
}
export default Signin;
