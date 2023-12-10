import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SwitchLang } from "../components/SwitchLang";
const Header = ({ strings }) => {
  console.log();
  const [state, setState] = useState("active");
  const Tab = () => {
    const dropdown = document.querySelectorAll(".dropdown");
    if (dropdown) {
      dropdown.forEach((item) => {
        const dropdownBtn = item.querySelector(".dropdown__button");
        const dropdownContent = item.querySelector(".dropdown__content");
        dropdownBtn.addEventListener("click", () => {
          dropdownContent.classList.add(state);
          dropdownBtn.classList.add(state);
        });
        window.addEventListener("click", (e) => {
          if (
            !dropdownContent.contains(e.target) &&
            !dropdownBtn.contains(e.target)
          ) {
            setState("active");
            dropdownContent.classList.remove(state);
            dropdownBtn.classList.remove(state);
          }
        });
      });
    }
  };
  useEffect(() => {
    Tab();
  });
  const [menu, setMenu] = useState(false);
  const header = useRef(null);
  const toggle = () => setMenu(!menu);
  const onFogClick = (e) => {
    if (e.target === e.currentTarget && menu) toggle();
  };
  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        header.current.classList.add("sticky");
      } else {
        header.current.classList.remove("sticky");
      }
    };
    if (header.current) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [header]);
  const data = [
    { title: 1, arr: "arrDress" },
    { title: 2, arr: "arrBrides" },
    { title: 3, arr: "arrHair_make" },
    { title: 4, arr: "arrHair" },
    { title: 5, arr: "arrMakeUp" },
    { title: 6, arr: "arrNail" },
    { title: 7, arr: "arrSession", video: true },
    { title: 8, arr: "arrParty", video: true },
    { title: 9, arr: "arrStory", video: true },
  ];
  return (
    <header className="header" ref={header}>
      <div className="autoContainer">
        <div className="header__inner">
          <Link to={"/"} className="logo logo--hideDesktop">
            Viva La’mour
          </Link>
          <div
            className={`burger  ${menu ? "active" : ""}`}
            id="menuBtn"
            onClick={toggle}
          >
            <span></span>
          </div>
          <nav className={`nav ${menu ? "active" : ""}`} onClick={onFogClick}>
            <div className="nav__inner">
              <div className="nav__inner-container">
                <Link to={"/"} className="logo logo--hideMob">
                  Viva La’mour
                </Link>
                <div className="nav__group">
                  <div className="dropdown">
                    <button className="button button--ico dropdown__button">
                      <span className="text">
                        {strings.header.button1}
                        <br />
                        {strings.header.button1_text}
                      </span>
                      <span className="ico">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.49519 11.25L-3.78487e-06 -1.81981e-07L12.9904 9.53674e-07L6.49519 11.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="dropdown__content">
                      <Link
                        to="gallery"
                        state={data[0]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link1}</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[2]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link2}</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[1]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link3}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="button button--ico dropdown__button">
                      <span className="text">{strings.header.button2}</span>
                      <span className="ico">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.49519 11.25L-3.78487e-06 -1.81981e-07L12.9904 9.53674e-07L6.49519 11.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="dropdown__content">
                      <Link
                        to={"gallery"}
                        state={data[3]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link4}</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[4]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link5}</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[5]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link6}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="button button--ico dropdown__button">
                      <span className="text">
                        {strings.header.button3}
                        <br />
                        {strings.header.button3_text}
                      </span>
                      <span className="ico">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.49519 11.25L-3.78487e-06 -1.81981e-07L12.9904 9.53674e-07L6.49519 11.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="dropdown__content">
                      <Link
                        to={"gallery"}
                        state={data[6]}
                        className="dropdown__content-item"
                      >
                        <span className="text"> {strings.header.link7}</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[7]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link8}</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[8]}
                        className="dropdown__content-item"
                      >
                        <span className="text">{strings.header.link9}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <SwitchLang strings={strings} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
