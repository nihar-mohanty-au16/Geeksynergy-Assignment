import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      <Link to="/company">
        <button className="CI">Company Info</button>
      </Link>
      <h1>Hello Homepage</h1>
      <div className="button" onClick={() => setLoginUser({})}>
        <button className="btn">Log-out</button>
      </div>
    </div>
  );
};

export default Homepage;
