import React from "react";
import Hero from "../../base/Hero";
import About from "./About";
import Team from "./Team";

const Home = ({ strings }) => {
  return (
    <>
      <Hero imgSrc={"./images/hero/hero.png"} size={false} strings={strings} />
      <About strings={strings} src="./images/about.png" />
      <Team strings={strings} />
      <About strings={strings} src="./images/about.png" modifier="secondary" />
    </>
  );
};

export default Home;
