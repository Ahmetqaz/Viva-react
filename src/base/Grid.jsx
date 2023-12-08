import React, { useEffect } from "react";
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
  };

  let renderArr = controlArr();
  return (
    <section className="grid">
      <div className="autoContainer autoContainer--sm">
        <div className="grid__row">
          {renderArr.map((item, i) => (
            <div
              className="grid__item"
              key={i}
              onClick={(e) => {
                PopUpCreate(e);
              }}
            >
              <div className="ratioImage">
                <img src={item} alt="pic" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
