import React from "react";
const Hero = ({ imgSrc, size, title }) => {
  return (
    <section className={`hero ${size ? "hero--sm" : ""}`}>
      <div className="autoContainer">
        <div className="hero__image">
          {size ? <span className="hero__image-title">{title}</span> : ""}
          <img src={imgSrc} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
