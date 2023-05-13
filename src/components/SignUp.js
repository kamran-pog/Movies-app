import React from "react";
import "./SignIn.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function SignUp() {
  return (
    <div className="container">
      <div className="text-center m-5-auto">
        <h2>Sign Up</h2>
        <form action="/home">
          <p>
            <label>Full Name</label>
            <br />
            <input type="text" name="full name" required />
          </p>
          <p>
            <label>Email address</label>
            <br />
            <input type="text" name="email address" required />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </p>
          <p>
            <Button color="inherit" id="sub_btn" type="submit">
              SignUp
            </Button>
          </p>
        </form>
        <footer>
          <div className="footers">
            <p>
              <Link to="/">Back to Homepage</Link>.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
