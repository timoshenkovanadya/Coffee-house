const clickHandler = () => {
  window.document.querySelector(".slider").classList.add("test-red");
};

window.document.querySelector("#button-left").addEventListener("click", clickHandler);


window.document.querySelector(".button-icon-burger").addEventListener('click', function() {
  var element = window.document.querySelector(".new-menu");
  if (element.classList.contains("new-menu2")) {
    element.classList.remove("new-menu2");
  } else {
    element.classList.add("new-menu2");
  }
});