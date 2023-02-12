import React, { Component } from "react";
import greeting from "./introWelcome";

class About extends Component {
  constructor(props) {
    super(props);
    // this.state =
  }

  // componentDidMount() {

  // }
  render() {
    return (
      <div className="about-me-container">
        <div className="about-me-contact">
          <div className="about-me-contact-info">Contact me via: </div>

          <button className="about-me-contact-button">
            <a href="https://www.linkedin.com/in/randee-johnson7">Linked In</a>
          </button>
        </div>
        <div className="about-me-bio">
          <div className="about-me-bio-introduction">{greeting()}</div>
          <div className="about-me-bio-bio">
            <p>
              My name is Randee. I am born and raised in New York City and can
              truly say that there is no place like it! For the past decade, I
              have taught 7th-grade math, and for the past few years, I have
              been exploring my interest in web development. I have quite the
              curious mind; the gears are always turning and I am surely one to
              ask lots of questions. I love to learn and I love to solve
              puzzles. If you ever need an escape room partner, I'm the one!
              (Seriously.)
            </p>
            <p>Let's see, what else?</p>
            <ul>
              <li>I also love to travel!</li>
              <li>
                I am fascinated by what the Earth can do and hope to see as much
                of it as possible.{" "}
              </li>{" "}
              <li>I love to bike, hike, and play squash. </li>
              <li>I love plants and the ocean.</li>
              <li>I love games and arts & crafts.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
