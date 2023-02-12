import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="welcome-title">Randee Johnson</div>

        <div className="navbar-links">
          <div className="navbar-link home">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-link projects">
            <Link to="/myProjects">My Projects</Link>
          </div>

          <div className="navbar-link journal">
            <Link to="/codingJournal">Coding Journal</Link>
          </div>

          <div className="navbar-link mathematizedmind">
            <Link to="/theMathematizedMind">The Mathematized Mind</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
