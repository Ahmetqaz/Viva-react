import React from "react";
import { useLocation } from "react-router-dom";
const Grid = () => {
  const location = useLocation();
  const state = location.state;
  let arrDress = [
    "./images/grid/dress/image-1.png",
    "./images/grid/dress/image-2.png",
    "./images/grid/dress/image-3.png",
    "./images/grid/dress/image-4.png",
    "./images/grid/dress/image-5.png",
    "./images/grid/dress/image-6.png",
    "./images/grid/dress/image-7.png",
    "./images/grid/dress/image-8.png",
    "./images/grid/dress/image-9.png",
    "./images/grid/dress/image-10.png",
    "./images/grid/dress/image-11.png",
    "./images/grid/dress/image-12.png",
    "./images/grid/dress/image-13.png",
    "./images/grid/dress/image-14.png",
    "./images/grid/dress/image-15.png",
    "./images/grid/dress/image-16.png",
  ];
  let arrHair = [
    "./images/grid/hair/hair-1.jpg",
    "./images/grid/hair/hair-2.jpg",
    "./images/grid/hair/hair-3.jpg",
    "./images/grid/hair/hair-4.jpg",
    "./images/grid/hair/hair-5.jpg",
    "./images/grid/hair/hair-6.jpg",
    "./images/grid/hair/hair-7.jpg",
    "./images/grid/hair/hair-8.jpg",
    "./images/grid/hair/hair-9.jpg",
    "./images/grid/hair/hair-10.jpg",
    "./images/grid/hair/hair-11.jpg",
    "./images/grid/hair/hair-12.jpg",
    "./images/grid/hair/hair-13.jpg",
    "./images/grid/hair/hair-14.jpg",
  ];
  let arrNail = [
    "./images/grid/nail/nail-1.jpg",
    "./images/grid/nail/nail-2.jpg",
    "./images/grid/nail/nail-3.jpg",
    "./images/grid/nail/nail-4.jpg",
    "./images/grid/nail/nail-5.jpg",
    "./images/grid/nail/nail-6.jpg",
    "./images/grid/nail/nail-7.jpg",
    "./images/grid/nail/nail-8.jpg",
    "./images/grid/nail/nail-9.jpg",
    "./images/grid/nail/nail-10.jpg",
    "./images/grid/nail/nail-11.jpg",
    "./images/grid/nail/nail-12.jpg",
    "./images/grid/nail/nail-13.jpg",
    "./images/grid/nail/nail-14.jpg",
    "./images/grid/nail/nail-15.jpg",
  ];
  let makeUp = [
    "./images/grid/make_up/make_up-1.jpg",
    "./images/grid/make_up/make_up-2.jpg",
    "./images/grid/make_up/make_up-3.jpg",
    "./images/grid/make_up/make_up-4.jpg",
    "./images/grid/make_up/make_up-5.jpg",
    "./images/grid/make_up/make_up-7.jpg",
    "./images/grid/make_up/make_up-8.jpg",
    "./images/grid/make_up/make_up-9.jpg",
    "./images/grid/make_up/make_up-10.jpg",
    "./images/grid/make_up/make_up-11.jpg",
    "./images/grid/make_up/make_up-12.jpg",
  ];
  let hair_make =[
    "./images/grid/hair/hair-1.jpg",
    "./images/grid/hair/hair-2.jpg",
    "./images/grid/hair/hair-3.jpg",
    "./images/grid/hair/hair-4.jpg",
    "./images/grid/hair/hair-5.jpg",
    "./images/grid/hair/hair-6.jpg",
    "./images/grid/hair/hair-7.jpg",
    "./images/grid/hair/hair-8.jpg",
    "./images/grid/hair/hair-9.jpg",
    "./images/grid/hair/hair-10.jpg",
    "./images/grid/hair/hair-11.jpg",
    "./images/grid/hair/hair-12.jpg",
    "./images/grid/hair/hair-13.jpg",
    "./images/grid/hair/hair-14.jpg",
    "./images/grid/make_up/make_up-1.jpg",
    "./images/grid/make_up/make_up-2.jpg",
    "./images/grid/make_up/make_up-3.jpg",
    "./images/grid/make_up/make_up-4.jpg",
    "./images/grid/make_up/make_up-5.jpg",
    "./images/grid/make_up/make_up-7.jpg",
    "./images/grid/make_up/make_up-8.jpg",
    "./images/grid/make_up/make_up-9.jpg",
    "./images/grid/make_up/make_up-10.jpg",
    "./images/grid/make_up/make_up-11.jpg",
    "./images/grid/make_up/make_up-12.jpg",
  ]
  let controlArr = () => {
    if (state.arr === "dress") {
      return arrDress;
    }
    if (state.arr === "hair") {
      return arrHair;
    }
    if (state.arr === "makeUp") {
      return makeUp;
    }
    if (state.arr === "nail") {
      return arrNail;
    }
    if (state.arr === "hair_make") {
      return hair_make;
    }
  };
  let renderArr = controlArr();
  return (
    <section className="grid">
      <div className="autoContainer autoContainer--sm">
        <div className="grid__row">
          {renderArr.map((item, i) => (
            <div className="grid__item" key={i}>
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
