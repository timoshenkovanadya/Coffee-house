const buttoncoffee = window.document.querySelector(".tab-item1");
const buttontea = window.document.querySelector(".tab-item2");
const buttondesserts = window.document.querySelector(".tab-item3");

const coffee = window.document.querySelector(".coffee");
const tea = window.document.querySelector(".tea");
const desserts = window.document.querySelector(".desserts");

const elementscoffee = window.document.querySelectorAll(".nextcoffee");
const elementsdesserts = window.document.querySelectorAll(".nextdessert");

const restartHelper = () => {
  buttonrefresh.style.visibility = "visible";
  for (let i = 0; i < elementscoffee.length; i++) {
    elementscoffee[i].style.display = "none";
  }

  for (let i = 0; i < elementsdesserts.length; i++) {
    elementsdesserts[i].style.display = "none";
  }
};

coffee.style.display = "flex";
tea.style.display = "none";
desserts.style.display = "none";

buttontea.addEventListener("click", function () {
  coffee.style.display = "none";
  tea.style.display = "flex";
  desserts.style.display = "none";
  restartHelper();
});

buttondesserts.addEventListener("click", function () {
  coffee.style.display = "none";
  tea.style.display = "none";
  desserts.style.display = "flex";
  restartHelper();
});

buttoncoffee.addEventListener("click", function () {
  coffee.style.display = "flex";
  tea.style.display = "none";
  desserts.style.display = "none";
  restartHelper();
});

buttontea.addEventListener("click", function () {
  buttontea.style.backgroundColor = "#665f55";
  buttontea.style.color = "#e1d4c9";
  window.document.querySelector(".icon2").style.backgroundColor = "#e1d4c9";
  buttoncoffee.style.backgroundColor = "#E1D4C9";
  buttoncoffee.style.color = "#403F3D";
  window.document.querySelector(".icon1").style.backgroundColor = "#c1b6ad";
  buttondesserts.style.backgroundColor = "#E1D4C9";
  buttondesserts.style.color = "#403F3D";
  window.document.querySelector(".icon3").style.backgroundColor = "#c1b6ad";
});
buttondesserts.addEventListener("click", function () {
  buttondesserts.style.backgroundColor = "#665f55";
  buttondesserts.style.color = "#e1d4c9";
  window.document.querySelector(".icon3").style.backgroundColor = "#e1d4c9";
  buttoncoffee.style.backgroundColor = "#E1D4C9";
  buttoncoffee.style.color = "#403F3D";
  window.document.querySelector(".icon1").style.backgroundColor = "#c1b6ad";
  buttontea.style.backgroundColor = "#E1D4C9";
  buttontea.style.color = "#403F3D";
  window.document.querySelector(".icon2").style.backgroundColor = "#c1b6ad";
});
buttoncoffee.addEventListener("click", function () {
  buttoncoffee.style.backgroundColor = "#665f55";
  buttoncoffee.style.color = "#e1d4c9";
  window.document.querySelector(".icon1").style.backgroundColor = "#e1d4c9";
  buttondesserts.style.backgroundColor = "#E1D4C9";
  buttondesserts.style.color = "#403F3D";
  window.document.querySelector(".icon3").style.backgroundColor = "#c1b6ad";
  buttontea.style.backgroundColor = "#E1D4C9";
  buttontea.style.color = "#403F3D";
  window.document.querySelector(".icon2").style.backgroundColor = "#c1b6ad";
});

const buttonrefresh = window.document.querySelector(".button-refresh");
function initRefresh() {
  if (
    (window.innerWidth <= 768 && coffee.style.display === "flex") ||
    (window.innerWidth <= 768 && desserts.style.display === "flex")
  ) {
    buttonrefresh.style.display = "flex";
  }
  if (window.innerWidth > 768 || tea.style.display === "flex") {
    buttonrefresh.style.display = "none";
  }
}
setInterval(initRefresh, 1000);

buttonrefresh.addEventListener("click", function () {
  buttonrefresh.style.visibility = "hidden";
  if (coffee.style.display === "flex") {
    for (let i = 0; i < elementscoffee.length; i++) {
      elementscoffee[i].style.display = "flex";
    }
  }
  if (desserts.style.display === "flex") {
    for (let i = 0; i < elementsdesserts.length; i++) {
      elementsdesserts[i].style.display = "flex";
    }
  }
});

/*function backToSmallSize() {
  if (window.innerWidth > 768) {
    for (let i = 0; i < elementscoffee.length; i++) {
      elementscoffee[i].style.display = "flex";
    }
    for (let i = 0; i < elementsdesserts.length; i++) {
      elementsdesserts[i].style.display = "flex";
    }
    buttonrefresh.style.display = "none";
  }
}
setInterval(backToSmallSize, 1000);*/
