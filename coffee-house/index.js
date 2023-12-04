const clickHandler = () => {
  window.document.querySelector(".slider").classList.add("test-red");
};

window.document.querySelector("#button-left").addEventListener("click", clickHandler);
