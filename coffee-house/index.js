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

  const BTN_LEFT = document.querySelector(".button-left");
const BTN_RIGHT = document.querySelector(".button-right");
const CAROUSEL = document.querySelector(".slider-line");
const ITEM_LEFT = document.querySelector(".slide-2");
const ITEM_RIGHT = document.querySelector(".slide-3");

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("slide1-content");
  return card;
}

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector(".slide-1").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector(".slide-1").innerHTML = ITEM_RIGHT.innerHTML;
  }
  
  changedItem.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const card = createCardTemplate();
    card.innerText = Math.floor(Math.random() * 3);
    changedItem.appendChild(card);
  }
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})


// let slideIndex = 0;
// const slides = window.document.querySelectorAll(".slide-1, .slide-2, .slide-3");
// const lines = document.querySelectorAll(".line1, .line2, line3");
// const buttonRight = document.querySelector(".button-right");
// const buttonLeft = document.querySelector(".button-left");
// let timerId;
// let progressId;
// let width = 0;


// function showSlide(n) {
//   slides.forEach((slide, index) => {
//     slide.style.display = "none";
//   });

//   slides[n].style.display = "block";
// }

// function changeSlide() {
//   showSlide(slideIndex);
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
// }

// function startTimer() {
//   timerId = setInterval(changeSlide, 5000);
// }

// function stopTimer() {
//   clearInterval(timerId);
// }

// slides.forEach((slide) => {
//   slide.addEventListener("mouseenter", stopTimer);
//   slide.addEventListener("mouseleave", startTimer);
//   slide.addEventListener("mousedown", stopTimer);
//   slide.addEventListener("mouseup", startTimer);
// });

// buttonRight.addEventListener("click", function () {
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   showSlide(slideIndex);
// });

// buttonLeft.addEventListener("click", function () {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   showSlide(slideIndex);
// });

// changeSlide();
// startTimer();
// let touchStartX = 0;
// let touchEndX = 0;

// function handleTouchStart(e) {
//   touchStartX = e.changedTouches[0].screenX;
// }

// function handleTouchMove(e) {
//   touchEndX = e.changedTouches[0].screenX;
// }

// function handleTouchEnd() {
//   if (touchEndX < touchStartX) {
//     slideIndex++;
//     if (slideIndex >= slides.length) {
//       slideIndex = 0;
//     }
//   }

//   if (touchEndX > touchStartX) {
//     slideIndex--;
//     if (slideIndex < 0) {
//       slideIndex = slides.length - 1;
//     }
//   }

//   showSlide(slideIndex);
// }

// slides.forEach((slide) => {
//   slide.addEventListener("touchstart", handleTouchStart);
//   slide.addEventListener("touchmove", handleTouchMove);
//   slide.addEventListener("touchend", handleTouchEnd);
// });
