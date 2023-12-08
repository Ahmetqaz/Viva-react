export const PopUpCreate = (element, video) => {
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid__item");
  let videoControl = (item) => {
    let video = item.querySelector("video");
    let videoButton = item.querySelector(".button--play");
    let videoBg = item.querySelector(".grid__item-bg");
    let state = false;
    videoButton.addEventListener("click", () => {
      state = !state;
      if (state) {
        videoBg.classList.toggle("_hide");
        videoButton.classList.toggle("_hide");
        video.play();
        video.setAttribute("controls", "");
      } else {
        videoBg.classList.toggle("_hide");
        videoButton.classList.toggle("_hide");
        video.pause();
        video.removeAttribute("controls");
      }
    });

    video.addEventListener("click", (e) => {
      state = !state;
      if (state) {
        videoBg.classList.toggle("_hide");
        videoButton.classList.toggle("_hide");
        video.setAttribute("controls", "");
      } else {
        videoBg.classList.toggle("_hide");
        videoButton.classList.toggle("_hide");
        video.pause();
        video.removeAttribute("controls");
      }
    });
  };

  if (video) {
    gridItem.innerHTML = `  <div class="grid__item grid__item--video">
    <div class="ratioImage">
      <video>
        <source src="${element}" ></source>
      </video>
    </div>
    <div class="grid__item-bg">
    </div>
    <button class="button button--play">
      <span class="ico">
        <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.825317 0.750001L19.5753 11.5753L0.825316 22.4006L0.825317 0.750001Z"
            fill="currentColor" />
        </svg>
      </span>
    </button>
  </div>`;
    videoControl(gridItem);
  } else {
    gridItem.innerHTML = `<div class="grid__item">
    <div class="ratioImage">
      <img src="${element}" alt="image">
    </div>
  </div>`;
  }

  let popUp = document.getElementById("popUp");
  let popUpInner = popUp.querySelector(".popUp__inner");
  const bodyMain = document.body;
  popUp.classList.toggle("active");
  popUpInner.append(gridItem);
  bodyMain.classList.toggle("freeze");
};
export const PopUpClose = (e) => {
  let popUp = document.getElementById("popUp");
  let popUpInner = popUp.querySelector(".popUp__inner");
  const bodyMain = document.body;
  if (popUp === e.target || popUpInner === e.target) {
    popUp.classList.toggle("active");
    bodyMain.classList.toggle("freeze");
  }
  if (!popUp.classList.contains("active")) {
    popUpInner.innerHTML = "";
  }
};
