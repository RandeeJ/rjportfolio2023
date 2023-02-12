import React, { Component } from "react";
import NavBar from "./Navigation/navbar";
import Footer from "./Navigation/footer";
import Content from "./Content/content";

import "./styles/main.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="navigation-container">
          <NavBar />
        </div>
        <div className="content-container">
          <Content />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
