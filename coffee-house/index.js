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




/*
let slideIndex = 0;
const slides = window.document.querySelectorAll(".slide-1, .slide-2, .slide-3");
const lines = document.querySelectorAll('.line1, .line2');
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');

function showSlide(n) {
  // Сбросить стиль всех прогресс-баров
  lines.forEach((line) => {
    line.style.background = 'var(--border-light, #c1b6ad)';
  });

  // Скрыть все слайды
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });

  // Показать текущий слайд
  slides[n].style.display = 'block';
  fillLine(n);
}

function fillLine(n) {
  let width = 0;
  const id = setInterval(frame, 50); // 50 мс * 100 = 5000 мс = 5 секунд
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      lines[n].style.background = 'var(--border-dark, #665f55)';
    } else {
      width++;
      lines[n].style.background = `linear-gradient(to right, var(--border-dark, #665f55) ${width}%, var(--border-light, #c1b6ad) ${width}%)`;
    }
  }
}

function changeSlide() {
  showSlide(slideIndex);
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  }
  
buttonRight.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

buttonLeft.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

changeSlide(); // Показать первый слайд
setInterval(changeSlide, 5000); // Изменить слайд каждые 5 секунд*/

let slideIndex = 0;
const slides = window.document.querySelectorAll(".slide-1, .slide-2, .slide-3");
const lines = document.querySelectorAll('.line1, .line2');
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');
let timerId;
let progressId;
let width = 0;

function showSlide(n) {
  // Сбросить стиль всех прогресс-баров
  lines.forEach((line) => {
    line.style.background = 'var(--border-light, #c1b6ad)';
  });

  // Скрыть все слайды
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });

  // Показать текущий слайд
  slides[n].style.display = 'block';
  width = 0; // Сбросить ширину прогресс-бара
  fillLine(n);
}

function fillLine(n) {
  function frame() {
    if (width >= 100) {
      lines[n].style.background = 'var(--border-dark, #665f55)';
    } else {
      width++;
      lines[n].style.background = `linear-gradient(to right, var(--border-dark, #665f55) ${width}%, var(--border-light, #c1b6ad) ${width}%)`;
      progressId = setTimeout(frame, 50); // 50 мс * 100 = 5000 мс = 5 секунд
    }
  }
  frame();
}

function changeSlide() {
  showSlide(slideIndex);
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

function startTimer() {
  timerId = setInterval(changeSlide, 5000); // Изменить слайд каждые 5 секунд
  fillLine(slideIndex); // Возобновить прогресс-бар
}

function stopTimer() {
  clearInterval(timerId);
  clearTimeout(progressId); // Остановить прогресс-бар
}

slides.forEach((slide) => {
  slide.addEventListener('mouseenter', stopTimer);
  slide.addEventListener('mouseleave', startTimer);
  slide.addEventListener('mousedown', stopTimer);
  slide.addEventListener('mouseup', startTimer);
});

buttonRight.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

buttonLeft.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

changeSlide(); // Показать первый слайд
startTimer(); // Начать таймер
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchMove(e) {
    touchEndX = e.changedTouches[0].screenX;
}

function handleTouchEnd() {
    if (touchEndX < touchStartX) {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
    }

    if (touchEndX > touchStartX) {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
    }

    showSlide(slideIndex);
}

slides.forEach((slide) => {
    slide.addEventListener('touchstart', handleTouchStart);
    slide.addEventListener('touchmove', handleTouchMove);
    slide.addEventListener('touchend', handleTouchEnd);
});


