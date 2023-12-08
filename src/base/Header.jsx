import React, { useEffect, useState, useRef } from "react";
import CustomSelect from "../utils/CustomSelect";
import { Link } from "react-router-dom";
const Header = () => {
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
    CustomSelect();
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
    { title: "Koynekler", arr: "arrDress" },
    { title: "Gelinlerimiz", arr: "arrBrides" },
    { title: "Hair and make up", arr: "arrHair_make" },
    { title: "Hair", arr: "arrHair" },
    { title: "Make up", arr: "arrMakeUp" },
    { title: "Nails", arr: "arrNail" },
    { title: "Photo Session", arr: "arrSession", video: true },
    { title: "Open Party", arr: "arrParty", video: true },
    { title: "Love Story", arr: "arrStory", video: true },
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
                        Viva La Mour
                        <br />
                        Wedding House
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
                        <span className="text">Koynekler</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[2]}
                        className="dropdown__content-item"
                      >
                        <span className="text">Sach we make up</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[1]}
                        className="dropdown__content-item"
                      >
                        <span className="text">Gelinlerimiz</span>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="button button--ico dropdown__button">
                      <span className="text">Viva Beauty</span>
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
                        <span className="text">Sach</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[4]}
                        className="dropdown__content-item"
                      >
                        <span className="text">Make up</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[5]}
                        className="dropdown__content-item"
                      >
                        <span className="text">Nails</span>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="button button--ico dropdown__button">
                      <span className="text">
                        Viva La Mour
                        <br />
                        Production
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
                        <span className="text">Photo Session</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[7]}
                        className="dropdown__content-item"
                      >
                        <span className="text">Open Party</span>
                      </Link>
                      <Link
                        to={"gallery"}
                        state={data[8]}
                        className="dropdown__content-item"
                      >
                        <span className="text">Love Story</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input input--select">
                <input type="hidden" />
                <div className="input__selected"></div>
                <ul className="input__dropdown">
                  <li
                    className="input__dropdown-item"
                    data-value="En"
                    data-default
                  >
                    <span className="text">En</span>
                    <span className="ico">
                      <img src="./images/language/english.svg" alt="ico" />
                    </span>
                  </li>
                  <li className="input__dropdown-item" data-value="Tkm">
                    <span className="text">Tkm</span>
                    <span className="ico">
                      <img src="./images/language/turkmen.svg" alt="ico" />
                    </span>
                  </li>
                  <li className="input__dropdown-item" data-value="Rus">
                    <span className="text">Rus</span>
                    <span className="ico">
                      <img src="./images/language/russian.svg" alt="ico" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
