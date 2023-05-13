import React from "react";
import "./SignIn.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function SignIn() {
  return (
    <div className="container">
      <div className="text-center m-5-auto">
        <h2>Sign In</h2>
        <form action="/home">
          <p>
            <label>Username or email address</label>
            <br />
            <input type="text" name="first_name" required />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input type="password" name="password" required />
          </p>
          <p>
            <Button color="inherit" id="sub_btn" type="submit">
              SignIn
            </Button>
          </p>
        </form>
        <footer>
          <div className="footers">
            <p>
              First time? <Link to="/SignUp">Create an account</Link>
            </p>
            <p>
              <Link to="/">Back to Homepage</Link>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
