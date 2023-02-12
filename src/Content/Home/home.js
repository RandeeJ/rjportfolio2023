import React, { Component } from "react";
import About from "../About/about";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <About />
        <div className="todo">
          <p>
            Next time:
            <ul>
              <li>Find some templates that you like and start designing</li>
              <li>
                {" "}
                blog posts cards - need to figure out links to each blog post
                and blog page
              </li>
            </ul>
          </p>

          <h1> YOU GOT THIS!</h1>
        </div>
      </div>
    );
  }
}

export default Home;
