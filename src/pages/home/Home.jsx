import React from "react";
import Hero from "../../base/Hero";
import About from "./About";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Hero imgSrc={"./images/hero/hero.png"} size={false} />
      <About />
      <Team />
    </>
  );
};

export default Home;
