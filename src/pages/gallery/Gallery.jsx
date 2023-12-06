import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../base/Hero";
import Grid from "../../base/Grid";

const Gallery = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Hero
        imgSrc={"./images/hero/hero-2.png"}
        size={true}
        title={state.title}
      />
      <Grid />
    </>
  );
};

export default Gallery;
