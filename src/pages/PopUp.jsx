import React from "react";
import { arrow } from "../components/Svg.";
import useLocalization from "../hooks/useLocalization";

const PopUp = ({ PopUpClose, nextItem, prevItem }) => {
  const location = useLocalization();
  const state = location.state;
  return (
    <div
      className="popUp"
      id="popUp"
      onClick={(e) => {
        PopUpClose(e);
      }}
    >
      <div className="popUp__inner">
        <div className="popUp__inner-container">
          <div className="popUp__inner-close" id="close"></div>
          <div className="popUp__inner-videos" id="videoWrapper">
            <div className="grid__item grid__item--video">
              <div className="ratioImage">
                <video id="videoSource">
                  <source src=""></source>
                </video>
              </div>
              <div className="grid__item-bg"></div>
              <button className="button button--play">
                <span className="ico">
                  <svg
                    width="16"
                    height="23"
                    viewBox="0 0 16 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.825317 0.750001L19.5753 11.5753L0.825316 22.4006L0.825317 0.750001Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="popUp__inner-images active" id="imageWrapper">
            <div className="popUp__inner-image">
              <div className="ratioImage">
                <img
                  src="./images/grid/dress/image-1.png"
                  alt=""
                  id="popImage"
                />
              </div>
            </div>
          </div>
          <div className="popUp__inner-arrows">
            <div className="popUp__inner-button" id="prevItem">
              <span
                className="ico ico--stroke"
                style={{ transform: "rotate(180deg)" }}
              >
                {arrow}
              </span>
            </div>
            <div className="popUp__inner-button" id="nextItem">
              <span className="ico ico--stroke">{arrow}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
