import React, { useEffect } from "react";

export const SwitchLang = ({ strings }) => {
  const getInputValue = (value) => {
    if (value === "en") {
      strings.setLanguage("en");
    } else if (value === "tkm") {
      strings.setLanguage("tkm");
    } else if (value === "ru") {
      strings.setLanguage("ru");
    }
  };
  const CustomSelect = () => {
    const customSelectInit = ({
      selectedClassName,
      optionsWrapperClassName,
      hideSelected = true,
      onStateChange = () => {},
    }) => {
      const language = document.getElementById("language");
      const select = language;
      const input = select.querySelector("input[type='hidden']");
      const selected = select.querySelector(`.${selectedClassName}`);
      const options = select.querySelector(`.${optionsWrapperClassName}`);

      const clickEventHandler = (event) => {
        if (!select.contains(event.target)) {
          closeSelect();
        }
      };

      const closeSelect = () => {
        select.classList.remove("active");
        window.removeEventListener("click", clickEventHandler);
      };
      const setSelected = (li) => {
        if (!li || !input) {
          console.log("no input or invalid selcted option");
          return;
        }
        input.value = li.getAttribute("data-value");
        selected.innerHTML = li.innerHTML;
        input.dispatchEvent(new Event("change"));
        if (hideSelected) {
          options.querySelectorAll("li").forEach((item, index) => {
            item.style = "";
          });
          li.style = "display: none";
        }
        select.classList.add("selected");
        getInputValue(input.value);
      };

      select.onclick = () => {
        const isOpen = select.classList.contains("active");
        onStateChange(!isOpen, select);

        if (isOpen) {
          closeSelect();
        } else {
          select.classList.add("active");
          window.addEventListener("click", clickEventHandler);
        }
      };

      options.querySelectorAll("li").forEach((li, index) => {
        if (select.getAttribute("data-default-index") === index)
          setSelected(li);
        if (li.dataset?.default !== undefined) {
          li.removeAttribute("data-default");
          setSelected(li);
        }

        li.onclick = () => setSelected(li);
      });
    };
    customSelectInit({
      selectedClassName: "input__selected",
      optionsWrapperClassName: "input__dropdown",
      hideSelected: true,
    });
  };
  useEffect(() => {
    CustomSelect();
  });

  return (
    <div className="input input--select" id="language">
      <input type="hidden" />
      <div className="input__selected"></div>
      <ul className="input__dropdown">
        <li className="input__dropdown-item" data-value="en" data-default>
          <span className="text">En</span>
          <span className="ico">
            <img src="./images/language/english.svg" alt="ico" />
          </span>
        </li>
        <li className="input__dropdown-item" data-value="tkm">
          <span className="text">Tkm</span>
          <span className="ico">
            <img src="./images/language/turkmen.svg" alt="ico" />
          </span>
        </li>
        <li className="input__dropdown-item" data-value="ru">
          <span className="text">Rus</span>
          <span className="ico">
            <img src="./images/language/russian.svg" alt="ico" />
          </span>
        </li>
      </ul>
    </div>
  );
};
