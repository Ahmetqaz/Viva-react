import React from "react";

const About = () => {
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
            <h3 className="text--primary">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </h3>
            <p>
              Viva La’mour Ashgabat based digital and creative agency. Our team
              is lead in creating digital products. Viva La’mour is not only
              about creating, but it’s about teaching, and support moves like
              gender equality.
              <br />
              Viva La’mour Ashgabat based digital and creative agency. Our team
              is lead in creating digital products. Viva La’mour is not only
              about creating, but it’s about teaching, and support moves like
              gender equality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
