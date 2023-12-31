import React from "react";

const Team = ({ strings }) => {
  return (
    <section className="team">
      <div className="autoContainer">
        <div className="team__inner">
          <div className="team__header">
            <span className="ico">
              <img src="./images/icons/team.svg" alt="ico" />
            </span>
            <h3>
              <span className="text--primary">{strings.team.title}</span>
              <br />
              {strings.team.p1}
            </h3>
          </div>
        </div>
      </div>
      <div className="team__bg">
        <img src="./images/bg-shape.svg" alt="pic" />
      </div>
      <div className="team__grid-wrapper">
        <div className="team__grid">
          <div className="team__grid-column">
            <div className="team__grid-image">
              <div className="ratioImage">
                <img src="./images/grid/about/grid-1.png" alt="pic" />
              </div>
            </div>
          </div>
          <div className="team__grid-column">
            <div className="team__grid-image">
              <div className="ratioImage">
                <img src="./images/grid/about/grid-2.png" alt="pic" />
              </div>
            </div>
            <div className="team__grid-image">
              <div className="ratioImage ratioImage--sm">
                <img src="./images/grid/about/grid-3.png" alt="pic" />
              </div>
            </div>
          </div>
          <div className="team__grid-column">
            <div className="team__grid-image">
              <div className="ratioImage">
                <img src="./images/grid/about/grid-4.png" alt="pic" />
              </div>
            </div>
          </div>
          <div className="team__grid-column">
            <div className="team__grid-image">
              <div className="ratioImage ratioImage--sm">
                <img src="./images/grid/about/grid-5.png" alt="pic" />
              </div>
            </div>
            <div className="team__grid-image">
              <div className="ratioImage">
                <img src="./images/grid/about/grid-6.png" alt="pic" />
              </div>
            </div>
          </div>
          <div className="team__grid-column">
            <div className="team__grid-image">
              <div className="ratioImage">
                <img src="./images/grid/about/grid-7.png" alt="pic" />
              </div>
            </div>
          </div>
          <div className="team__grid-column">
            <div className="team__grid-image">
              <div className="ratioImage">
                <img src="./images/grid/about/grid-8.png" alt="pic" />
              </div>
            </div>
            <div className="team__grid-image">
              <div className="ratioImage ratioImage--sm">
                <img src="./images/grid/about/grid-9.png" alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
