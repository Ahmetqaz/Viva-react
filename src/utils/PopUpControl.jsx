export const PopUpCreate = (e) => {
  let gridItem = e.target.parentNode;
  const clone = gridItem.cloneNode(true);
  let popUp = document.getElementById("popUp");
  let popUpInner = popUp.querySelector(".popUp__inner");
  const bodyMain = document.body;
  popUp.classList.toggle("active");
  popUpInner.append(clone);
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
