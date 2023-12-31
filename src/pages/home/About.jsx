import React from "react";

const About = ({ strings }) => {
  return (
    <section className="about">
      <div className="autoContainer autoContainer--extraSm">
        <div className="about__inner">
          <div className="about__image">
            <div className="ratioImage">
              <img src="./images/about.png" alt="pic" />
            </div>
          </div>
          <div className="about__content">
            <h3 className="text--primary">{strings.about.title}</h3>
            <p>
              {strings.about.p1}
              <br />
              {strings.about.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
