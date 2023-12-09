const cardsWrapper = document.querySelector("#cards-wrapper");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const body = document.querySelector("body");
const inner = document.querySelector(".inner");

// modal content

const getProducts = async () => {
  const resp = await fetch("./products.json");
  return await resp.json();
};

const switchModal = (isOpen) => {
  if (isOpen) {
    modal.classList.add("active");
    overlay.classList.add("active");
    body.classList.add("noscroll");
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("noscroll");
  }
};

const clickWrapperHandler = async (e) => {
  const card = e.target.closest(".preview");
  if (card) {
    const products = await getProducts();
    const cardName = card.querySelector(".text-coffee")?.innerText?.trim();
    const cardData = products.find((item) => item.name === cardName);
    switchModal(true);
    overlay.addEventListener("click", () => {
      switchModal(false);
    });

    console.log(cardData);
  }
};

cardsWrapper.addEventListener("click", clickWrapperHandler);
