const links = window.document.querySelectorAll(".nav-menu-item");

window.document
  .querySelector(".button-icon-burger")
  .addEventListener("click", function () {
    window.document
      .querySelector(".burger-hover1")
      .classList.toggle("burger-hover-active");
    window.document
      .querySelector(".burger-hover2")
      .classList.toggle("burger-hover-active");
    window.document
      .querySelector(".burger-default1")
      .classList.toggle("burger-default-active");
    window.document
      .querySelector(".burger-default2")
      .classList.toggle("burger-default-active");
    window.document.querySelector(".new-menu").classList.toggle("new-menu2");
  });

links.forEach(function (links) {
  links.addEventListener("click", function () {
    const menu = window.document.querySelector(".new-menu");
    menu.classList.remove("new-menu2");
    window.document
      .querySelector(".burger-hover1")
      .classList.remove("burger-hover-active");
    window.document
      .querySelector(".burger-hover2")
      .classList.remove("burger-hover-active");
    window.document
      .querySelector(".burger-default1")
      .classList.remove("burger-default-active");
    window.document
      .querySelector(".burger-default2")
      .classList.remove("burger-default-active");
  });
});

function smallerSize() {
  if (window.innerWidth > 768) {
    document.querySelector(".new-menu").classList.remove("new-menu2");
    window.document
      .querySelector(".burger-hover1")
      .classList.remove("burger-hover-active");
    window.document
      .querySelector(".burger-hover2")
      .classList.remove("burger-hover-active");
    window.document
      .querySelector(".burger-default1")
      .classList.remove("burger-default-active");
    window.document
      .querySelector(".burger-default2")
      .classList.remove("burger-default-active");
  }
}
window.addEventListener("resize", smallerSize);

const BTN_LEFT = document.querySelector(".button-left");
const BTN_RIGHT = document.querySelector(".button-right");
const CAROUSEL = document.querySelector(".slider-line");

let shift = 0;

function moveLeft () {
  shift += 1152;
  if (shift > 2304) {
    shift = 0;
  }
  CAROUSEL.style.transform = `translateX(-${shift}px)`;
}

let intervalId = setInterval(moveLeft, 5000); 

BTN_RIGHT.addEventListener("click", function() {
  moveLeft(); 
  clearInterval(intervalId);
  intervalId = setInterval(moveLeft, 5000);
});



function moveRight () {
  shift-= 1152;
   if (shift<0) {
    shift = 2304;}
    CAROUSEL.style.transform = `translateX(-${shift}px)`;
  
}
BTN_LEFT.addEventListener("click", moveRight);

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  clearInterval(intervalId);
  if (touchEndX < touchStartX) {
    moveLeft();
  } else {
    moveRight();
  }
  intervalId = setInterval(moveLeft, 5000);
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);










