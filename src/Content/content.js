import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Projects from "./MyProjects/projects";
import Journal from "./CodingJournal/journal";
import MathematizedMind from "./TheMathematizedMind/mathematizedmind";
import BlogItem from "./CodingJournal/item";
import BlogPostDescription from "./CodingJournal/posts/blogPostDescription";

class Content extends Component {
  render() {
    // const BlogPostDescription = () => {
    //   return (
    //     <h3>Blog Post Full</h3>
    //   )
    // }

    return (
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="myProjects" element={<Projects />} />
          <Route path="codingJournal" element={<Journal />} />
          <Route
            exact
            path="codingJournal/:id"
            element={<BlogPostDescription />}
          />
          <Route path="theMathematizedMind" element={<MathematizedMind />} />
        </Routes>
      </div>
    );
  }
}

export default Content;
