import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <h4>Sign in</h4>
        <label for="username">Username</label>
        <input
          id="username"
          className="form-control"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <br />
        <label for="password">Password</label>
        <input
          id="password"
          className="form-control"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <br />
        <button className="btn btn-primary" onClick={signin}>
          Signin
        </button>
        <br />
        <br />
        {errorMessage && <h4>{errorMessage}</h4>}
      </div>
    </div>
  );
}
export default Signin;
