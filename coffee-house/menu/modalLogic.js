const cardsWrapper = document.querySelector("#cards-wrapper");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
let modal;
let totalPriceElement;

// modal content

const getProducts = async () => {
  const resp = await fetch("./products.json");
  return await resp.json();
};

const getSizeAddPrice = (cardData, index) => {
  const key = index === 0 ? "s" : index === 1 ? "m" : "l";
  return Number(cardData.sizes[key]["add-price"]);
};

const preventHandler = (e) => {
  e.preventDefault();
};

const switchModal = (isOpen) => {
  if (isOpen) {
    modal = document.querySelector("#modal").cloneNode(true);
    document.body.appendChild(modal);
    totalPriceElement = modal?.querySelector(".total-price");
    modal.classList.add("active");
    modal.querySelector(".tab-item11").classList.add("tab-item-active");
    modal.querySelector(".icon11").classList.add("icon-active");
    overlay.classList.add("active");
    document.addEventListener("wheel", preventHandler, { passive: false });
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    document.removeEventListener("wheel", preventHandler);
    modal.remove();
  }
};

const setTotal = (number) => {
  totalPriceElement.innerText = `$${Number(number).toFixed(2)}`;
};

const getPrevTotalPrice = () => {
  return Number(totalPriceElement.innerText.slice(1));
};

const setModalData = (cardData) => {
  modal.querySelector(".modal-title1").innerText = cardData.name;
  modal.querySelector(".modal-title2").innerText = cardData.description;
  modal.querySelector(".modal-img-1").style.background = `url(${cardData.img})`;
  modal.querySelector(".tab-item11-text").innerText = cardData.sizes.s.size;
  modal.querySelector(".tab-item22-text").innerText = cardData.sizes.m.size;
  modal.querySelector(".tab-item33-text").innerText = cardData.sizes.l.size;
  modal.querySelector(".tab-item111-text").innerText =
    cardData.additives[0].name;
  modal.querySelector(".tab-item222-text").innerText =
    cardData.additives[1].name;
  modal.querySelector(".tab-item333-text").innerText =
    cardData.additives[2].name;

  setTotal(cardData.price);

  const sizeButtons = modal.querySelectorAll(".size-button");
  const addButtons = modal.querySelectorAll(".add-button");

  // size buttons logic
  sizeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("tab-item-active")) return;
      let prevSizeAddPrice = 0;
      const prevTotalPrice = getPrevTotalPrice();

      sizeButtons.forEach((buttonItem, indexItem) => {
        if (buttonItem.classList.contains("tab-item-active")) {
          prevSizeAddPrice = getSizeAddPrice(cardData, indexItem);
          buttonItem.classList.remove("tab-item-active");
        }
      });
      button.classList.add("tab-item-active");
      const startPricePlusAdds = prevTotalPrice - prevSizeAddPrice;
      setTotal(startPricePlusAdds + getSizeAddPrice(cardData, index));
    });
  });

  // addButtons logic
  addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const prevTotalPrice = getPrevTotalPrice();
      const addPrice = Number(cardData.additives[index]["add-price"]);
      if (button.classList.contains("tab-item-active")) {
        setTotal(prevTotalPrice - addPrice);
      } else {
        setTotal(prevTotalPrice + addPrice);
      }
      button.classList.toggle("tab-item-active");
    });
  });

  // close modal button
  modal.querySelector(".button-secondary").addEventListener("click", () => {
    switchModal(false);
  });
};

const clickWrapperHandler = async (e) => {
  const card = e.target.closest(".preview");
  if (card) {
    const products = await getProducts();
    const cardName = card.querySelector(".text-coffee")?.innerText?.trim();
    const cardData = products.find((item) => item.name === cardName);

    switchModal(true);
    setModalData(cardData);

    overlay.addEventListener("click", () => {
      switchModal(false);
    });
  }
};

cardsWrapper.addEventListener("click", clickWrapperHandler);
