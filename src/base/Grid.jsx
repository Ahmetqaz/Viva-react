import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { PopUpCreate } from "../utils/PopUpControl";
import {
  arrDress,
  arrBrides,
  arrHair,
  arrNail,
  arrMakeUp,
  arrHair_make,
} from "../data/DataImages";
import { arrParty, arrSession, arrStory } from "../data/DataVideos";
import { play } from "../components/Svg.";

const Grid = () => {
  const location = useLocation();
  const state = location.state;
  let controlArr = () => {
    if (state.arr === "arrDress") {
      return arrDress;
    }
    if (state.arr === "arrBrides") {
      return arrBrides;
    }
    if (state.arr === "arrHair") {
      return arrHair;
    }
    if (state.arr === "arrMakeUp") {
      return arrMakeUp;
    }
    if (state.arr === "arrNail") {
      return arrNail;
    }
    if (state.arr === "arrHair_make") {
      return arrHair_make;
    }
    if (state.arr === "arrSession") {
      return arrSession;
    }
    if (state.arr === "arrParty") {
      return arrParty;
    }
    if (state.arr === "arrStory") {
      return arrStory;
    }
  };
  let renderArr = controlArr();
  return (
    <section className="grid">
      <div className="autoContainer autoContainer--sm">
        <div className="grid__row">
          {renderArr.map((item, i) => (
            <div
              className={`grid__item ${state.video ? "grid__item--video" : ""}`}
              key={i}
              onClick={() => {
                PopUpCreate(item, state.video, renderArr);
              }}
            >
              {state.video ? <div className="grid__item-bg"></div> : ""}
              {state.video ? (
                <button className="button button--play">
                  <span className="ico">{play}</span>
                </button>
              ) : (
                ""
              )}

              <div className="ratioImage">
                {state.video ? (
                  <video>
                    <source src={item}></source>
                  </video>
                ) : (
                  <img src={item} alt="pic" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
