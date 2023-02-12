import React from "react";
// import About from "./about";

export default function introWelcome() {
  const hours = new Date().getHours();

  if (hours < 12) {
    // document.body.className = "morning";
    document.getElementsByClassName("about-me-container").className =
      "about-me-container morning";
    return (
      <div className="about-me-bio-introduction-welcome">Good Morning!</div>
    );
  }
  if (hours >= 12 && hours < 17) {
    document.getElementsByClassName("about-me-container").className =
      "about-me-container day";
    return (
      <div className="about-me-bio-introduction-welcome">Good Afternoon!</div>
    );
  } else {
    document.getElementsByClassName("page-container").className =
      "page-container evening";
    return (
      <div className="about-me-bio-introduction-welcome">Good Evening!</div>
    );
  }
}
