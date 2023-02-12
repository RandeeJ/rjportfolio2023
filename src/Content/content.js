import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Projects from "./MyProjects/projects";
import Journal from "./CodingJournal/journal";
import MathematizedMind from "./TheMathematizedMind/mathematizedmind";

class Content extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="myProjects" element={<Projects />} />
          <Route path="codingJournal/:id" element={<Journal />} />
          <Route path="theMathematizedMind" element={<MathematizedMind />} />
        </Routes>
      </div>
    );
  }
}

export default Content;
