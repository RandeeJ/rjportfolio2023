import React, { Component } from "react";
import TMAThumbnail from "../../images/TMAThumbnail.png";
import HouseplantGuideThumbnail from "../../images/HouseplantGuideThumbnail.png";
import CafeteriaViolationsThumbnail from "../../images/CafeteriaViolationsThumbnail.png";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="coding-projects-container">
          <div className="container-title coding-title">Web Development</div>
          <div className="container-link coding-link">
            <a
              href="https://github.com/RandeeJ"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
          <div className="container-list coding-list">
            <div className="coding-project project tma">
              <div className="project-title tma-title">TRANSLATE MATH APP</div>

              <div className="project-image tma-image">
                <a
                  href="https://rj-translatemathapp.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={TMAThumbnail}
                    alt="Translate Math App Thumbnail and Link"
                  />
                </a>
              </div>
              <div className="project-details tma-details">
                Use the universal language of mathematics to translate basic
                math calculations into other languages!
              </div>
            </div>
          </div>
        </div>
        <div className="data-projects-container">
          <div className="container-title data-title">Data Analytics</div>
          <div className="container-link data-link">
            <a
              href="https://public.tableau.com/app/profile/randee7303"
              target="_blank"
              rel="noreferrer"
            >
              Tableau Public Profile
            </a>
          </div>
          <div className="container-list data-list">
            <div className="data-project project houseplantGuide">
              <div className="project-title houseplantGuide-title">
                THE HOUSEPLANT GUIDE YOU'VE BEEN WAITING FOR
              </div>
              <div className="project-image houseplantGuide-image">
                <a
                  href="https://public.tableau.com/app/profile/randee7303/viz/HouseplantGuide/TheHouseplantGuideYouveBeenWaitingFor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={HouseplantGuideThumbnail}
                    alt="Houseplant Guide Thumbnail and Link"
                  />
                </a>
              </div>
              <div className="project-details houseplantGuide-details">
                Use this Houseplant Guide to find plants that are best suited to
                YOUR lifestyle!
              </div>
            </div>
            <div className="data-project project cafeteriaViolations">
              <div className="project-title cafeteriaViolations-title">
                IT'S FEEDING TIME, DO YOU KNOW WHERE YOUR CHILD IS EATING?
              </div>
              <div className="project-image cafeteriaViolations-image">
                <a
                  href="https://public.tableau.com/app/profile/randee7303/viz/NYCSchoolsCafeteriaViolations2020-2023/NYCSchoolCafeteriaViolations20-23"
                  target="_blank"
                  ref="noreferrer"
                >
                  <img
                    src={CafeteriaViolationsThumbnail}
                    alt="Cafeteria Violations Thumbnail and Link"
                  />
                </a>
              </div>
              <div className="project-details cafeteriaViolations-details">
                A data visualization on the recorded NYC School Cafeteria
                Violations 2020-2023.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
