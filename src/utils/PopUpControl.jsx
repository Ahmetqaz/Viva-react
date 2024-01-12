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
    videoSource.src = arr[index];
  });
  prevItem.addEventListener("click", () => {
    index -= 1;
    if (index === 0) {
      index = lengthArr - 1;
    }
    popImage.src = arr[index];
    videoSource.src = arr[index];
  });

  // -----------------
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
        videoButton.classList.toggle("_hide");
        videoBg.classList.toggle("_hide");
        video.setAttribute("controls", "");
      } else {
        videoBg.classList.toggle("_hide");
        videoButton.classList.toggle("_hide");
        video.pause();
        video.removeAttribute("controls");
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
