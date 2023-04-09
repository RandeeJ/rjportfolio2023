import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="welcome-title">Randee Johnson</div>

        <div className="navbar-links">
          <div className="navbar-link home">
            <Link to="/">HOME</Link>
          </div>
          <div className="navbar-link projects">
            <Link to="/myProjects">MY PROJECTS</Link>
          </div>

          <div className="navbar-link journal">
            <Link to="/codingJournal">CODING JOURNAL</Link>
          </div>

          <div className="navbar-link mathematizedmind">
            <Link to="/theMathematizedMind">THE MATHEMATIZED MIND</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
