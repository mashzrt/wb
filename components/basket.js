const basketBtn = document.createElement("button");
basketBtn.classList.add("basket-btn");
root.append(basketBtn);
const basketImg = document.createElement("img");
basketImg.src = "/styles/basket-img.png";
basketBtn.append(basketImg);

const modalWindow = document.createElement("div");
modalWindow.classList.add("modalWindow");
root.append(modalWindow);

const closeBtn = document.createElement("button");
closeBtn.classList.add("closeButton");
closeBtn.textContent = "x";
modalWindow.append(closeBtn);

//события
basketBtn.addEventListener("click", function () {
  modalWindow.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
