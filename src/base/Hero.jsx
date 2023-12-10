import React from "react";
const Hero = ({ imgSrc, size, title, strings }) => {
  const heroTitle = () => {
    if (title === 1) {
      return strings.header.link1;
    } else if (title === 2) {
      return strings.header.link2;
    } else if (title === 3) {
      return strings.header.link3;
    } else if (title === 4) {
      return strings.header.link4;
    } else if (title === 5) {
      return strings.header.link5;
    } else if (title === 6) {
      return strings.header.link6;
    } else if (title === 7) {
      return strings.header.link7;
    } else if (title === 8) {
      return strings.header.link8;
    } else if (title === 9) {
      return strings.header.link9;
    }
  };
  return (
    <section className={`hero ${size ? "hero--sm" : ""}`}>
      <div className="autoContainer">
        <div className="hero__image">
          {size ? <span className="hero__image-title">{heroTitle()}</span> : ""}
          <img src={imgSrc} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
