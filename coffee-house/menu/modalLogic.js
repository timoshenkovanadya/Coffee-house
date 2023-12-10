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

const preventHandler = (e) => {
  e.preventDefault();
};

const switchModal = (isOpen) => {
  if (isOpen) {
    modal.classList.add("active");
    document.querySelector(".tab-item11").classList.add("tab-item-active");
    document.querySelector(".icon11").classList.add("icon-active");
    overlay.classList.add("active");
    document.addEventListener("wheel", preventHandler, { passive: false });
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    document.removeEventListener("wheel", preventHandler);
  }
};

const clickWrapperHandler = async (e) => {
  const card = e.target.closest(".preview");
  if (card) {
    const products = await getProducts();
    const cardName = card.querySelector(".text-coffee")?.innerText?.trim();
    const cardData = products.find((item) => item.name === cardName);

    modal.querySelector(".modal-title1").innerText = cardData.name;
    modal.querySelector(".modal-title2").innerText = cardData.description;
    modal.querySelector(".total-price").innerText = cardData.price;
    modal.querySelector(
      ".modal-img-1"
    ).style.background = `url(${cardData.img})`;
    if (cardData.category === "dessert") {
      modal.querySelector(".tab-item11-text").innerText = cardData.sizes.s.size;
      modal.querySelector(".tab-item22-text").innerText = cardData.sizes.m.size;
      modal.querySelector(".tab-item33-text").innerText = cardData.sizes.l.size;
      modal.querySelector(".tab-item11-text").innerText = cardData.sizes.s.size;
      modal.querySelector(".tab-item111-text").innerText =
        cardData.additives[0].name;
      modal.querySelector(".tab-item222-text").innerText =
        cardData.additives[1].name;
      modal.querySelector(".tab-item333-text").innerText =
        cardData.additives[2].name;
    }
    if (cardData.category === "tea") {
      modal.querySelector(".tab-item222-text").innerText = "Lemon";
    }
    switchModal(true);
    overlay.addEventListener("click", () => {
      switchModal(false);
    });

    console.log(cardData);
  }
};

cardsWrapper.addEventListener("click", clickWrapperHandler);
