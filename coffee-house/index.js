window.document
  .querySelector(".button-icon-burger")
  .addEventListener("click", function () {
    var element = window.document.querySelector(".new-menu");
    if (element.classList.contains("new-menu2")) {
      element.classList.remove("new-menu2");
    } else {
      element.classList.add("new-menu2");
    }
  });

let offset = 0;
const sliderLine = window.document.querySelector(".slider-line");
window.document
  .querySelector(".button-right")
  .addEventListener("click", function () {
    offset += 1152;
    if (offset > 2304) {
      offset=0;
    }
    sliderLine.style.left = -offset + "px";
  });

  window.document
  .querySelector(".button-left")
  .addEventListener("click", function () {
    offset -= 1152;
    if (offset < 0) {
      offset=2304;
    }
    sliderLine.style.left = -offset + "px";
  });