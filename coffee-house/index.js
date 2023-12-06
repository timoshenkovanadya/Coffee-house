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

/*let offset = 0;
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
  });*/

const slides = window.document.querySelectorAll(".slide-1, .slide-2, .slide-3");
const sliderLine = window.document.querySelector(".slider-line");
let count = 0;
let width;
/*function init() {
  console.log("resize");
  width = window.document.querySelector(".row-slider").offsetWidth;
  sliderLine.style.width = width * slides.length + "px";
  slides.forEach((item) => {
    item.style.width = width + "px";
  });
  
}
init();*/

window.document
  .querySelector(".button-left")
  .addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = slides.length - 1;
    }
    rollSlider();
  });

window.document
  .querySelector(".button-right")
  .addEventListener("click", function () {
    count++;
    if (count >= slides.length) {
      count = 0;
    }
    rollSlider();
  });
function rollSlider() {
  /*width = document.documentElement.scrollWidth;*/
  width = window.document.querySelector(".body").offsetWidth;
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
