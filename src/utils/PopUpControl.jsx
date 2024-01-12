export const PopUpCreate = (element, video, arr) => {
  let popUp = document.getElementById("popUp");
  let popImage = document.getElementById("popImage");
  let imageWrapper = document.getElementById("imageWrapper");
  let videoWrapper = document.getElementById("videoWrapper");
  let videoSource = document.getElementById("videoSource");
  let prevItem = document.getElementById("prevItem");
  let nextItem = document.getElementById("nextItem");

  let index = 0;
  arr.forEach((item, i) => {
    if (item === element) {
      index = i;
    }
  });
  let lengthArr = arr.length;

  popImage.src = element;
  videoSource.src = element;
  if (video) {
    imageWrapper.classList.remove("active");
    videoWrapper.classList.add("active");
  } else {
    imageWrapper.classList.add("active");
    videoWrapper.classList.remove("active");
  }

  nextItem.addEventListener("click", () => {
    index += 1;
    if (index === lengthArr) {
      index = 0;
    }
    popImage.src = arr[index];
  });
  prevItem.addEventListener("click", () => {
    index -= 1;
    if (index === 0) {
      index = lengthArr - 1;
    }
    popImage.src = arr[index];
  });

  // -----------------
  let videoControl = (item) => {
    let video = item.querySelector("video");
    let videoButton = item.querySelector(".button--play");
    let videoBg = item.querySelector(".grid__item-bg");
    let state = false;
    let stateBg = false;

    videoButton.addEventListener("click", () => {
      state = !state;
      if (state === true) {
        videoBg.classList.add("_hide");
        videoButton.classList.add("_hide");
        video.play();
        video.setAttribute("controls", "");
      } else {
        videoBg.classList.remove("_hide");
        videoButton.classList.remove("_hide");
        video.pause();
        video.removeAttribute("controls");
      }
    });

    video.addEventListener("click", (e) => {
      state = !state;
      if (state === true) {
        videoButton.classList.add("_hide");
        videoBg.classList.add("_hide");
        video.setAttribute("controls", "");
      } else {
        videoBg.classList.remove("_hide");
        videoButton.classList.remove("_hide");
        video.pause();
        video.removeAttribute("controls");
      }
    });
    nextItem.addEventListener("click", () => {
      index += 1;
      stateBg = true;
      if (index === lengthArr) {
        index = 0;
      }
      videoSource.src = arr[index];
      if (stateBg === true) {
        videoBg.classList.remove("_hide");
        videoButton.classList.remove("_hide");
        video.pause();
        video.removeAttribute("controls");
        state = false;
      }
    });
    prevItem.addEventListener("click", () => {
      stateBg = true;
      index -= 1;
      if (index === 0) {
        index = lengthArr - 1;
      }
      videoSource.src = arr[index];
      if (stateBg === true) {
        videoBg.classList.remove("_hide");
        videoButton.classList.remove("_hide");
        video.pause();
        video.removeAttribute("controls");
        state = false;
      }
    });
  };

  videoControl(videoWrapper);
  const bodyMain = document.body;
  popUp.classList.toggle("active");
  bodyMain.classList.toggle("freeze");
};

export const PopUpClose = (e) => {
  let popUp = document.getElementById("popUp");
  let popUpInner = popUp.querySelector(".popUp__inner");
  let videoSource = document.getElementById("videoSource");
  let close = document.getElementById("close");
  let videoWrapper = document.getElementById("videoWrapper");
  const bodyMain = document.body;
  if (popUp === e.target || popUpInner === e.target || close === e.target) {
    videoSource.src = "/";
    bodyMain.classList.toggle("freeze");
    popUp.classList.toggle("active");
    if (videoWrapper.classList.contains("active")) {
      window.location.reload();
    }
  }
};
