import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="welcome-title">Randee Johnson</div>

        <div className="navbar-links">
          <div className="navbar-link home">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "rgba(0, 0, 0, 0.2)",
                    }
                  : { color: "#4623f7" }
              }
            >
              HOME
            </NavLink>
          </div>
          <div className="navbar-link projects">
            <NavLink
              to="/myProjects"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "rgba(0, 0, 0, 0.2)",
                    }
                  : { color: "#4623f7" }
              }
            >
              MY PROJECTS
            </NavLink>
          </div>

          <div className="navbar-link journal">
            <NavLink
              to="/codingJournal"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "rgba(0, 0, 0, 0.2)",
                    }
                  : { color: "#4623f7" }
              }
            >
              CODING JOURNAL
            </NavLink>
          </div>

          <div className="navbar-link mathematizedmind">
            <NavLink
              to="/theMathematizedMind"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      background: "rgba(0, 0, 0, 0.2)",
                    }
                  : { color: "#4623f7" }
              }
            >
              THE MATHEMATIZED MIND
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
