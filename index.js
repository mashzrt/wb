document.addEventListener("DOMContentLoaded", function createHeader() {
  const root = document.getElementById("root");
  const header = document.createElement("header");
  header.classList.add("header");
  root.append(header);
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");
  header.append(headerContainer);
  const headerIcon = document.getElementById("header-icon");
  headerContainer.append(headerIcon);
  const searchInp = document.createElement("input");
  searchInp.placeholder = "Найти на Wildberries";
  searchInp.classList.add("search-inp");
  headerContainer.append(searchInp);
  const basketBtn = document.createElement("button");
  basketBtn.classList.add("basket-btn");
  basketBtn.textContent = "Корзина";
  headerContainer.append(basketBtn);
  const basketImg = document.getElementById("basket-img");
  basketBtn.append(basketImg);
});
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

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const root = document.getElementById("root");

  let productsInTheCart = [];

  function addClass(element, elemClass) {
    element.classList.add(elemClass);
  }

  const section = document.createElement("section");
  addClass(section, "products");
  root.appendChild(section);

  const container = document.createElement("div");
  addClass(container, "container");
  section.appendChild(container);

  const sectionTitle = document.createElement("h2");
  addClass(sectionTitle, "products__title");
  sectionTitle.textContent = "Хиты продаж";
  container.appendChild(sectionTitle);

  const modalData = createModal();
  section.appendChild(modalData.modal);

  const cardsContainer = document.createElement("div");
  addClass(cardsContainer, "products__container");
  container.appendChild(cardsContainer);

  if (!localStorage.getItem("Products")) {
    fetchDataAndRenderCards();
  } else {
    renderCardsFromLocalStorage();
  }

  function fetchDataAndRenderCards() {
    Promise.all([
      fetch("https://65d7760427d9a3bc1d7b168a.mockapi.io/product").then(
        (response) => {
          console.log(response);
          return response.json();
        }
      ),
      fetch(
        "https://pixabay.com/api/?key=42728531-79aa93e813ebff2abafbfc81d&q=dress&image_type=photo&per_page=12"
      ).then((response) => {
        console.log(response);
        return response.json();
      }),
    ]).then(([mockResponse, pixabayResponse]) => {
      console.log(mockResponse);
      console.log(pixabayResponse);
      const products = mockResponse.map((product, index) => {
        product.img = pixabayResponse.hits[index].webformatURL;
        let rating = parseFloat(product.rating / 10).toFixed(1);
        if (rating > 5.0 || rating < 3.8) {
          rating = (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
        }
        product.rating = rating;
        product.discount_price =
          product.price - Math.ceil((product.price * product.discount) / 100);
        return product;
      });

      localStorage.setItem("Products", JSON.stringify(products));
      renderCards(products);
    });
  }

  function renderCardsFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem("Products"));
    renderCards(products);
  }

  function renderCards(products) {
    products.forEach((product) => {
      const card = createCard(product);
      cardsContainer.appendChild(card);
    });
  }

  function createCard(product) {
    const card = document.createElement("div");
    addClass(card, "product__card");

    const imgWrapper = document.createElement("div");
    addClass(imgWrapper, "product__img-wrapper");

    const productImg = document.createElement("img");
    productImg.src = `${product.img}`;
    addClass(productImg, "product__img");

    const quickViewBtn = document.createElement("button");
    quickViewBtn.textContent = "Быстрый просмотр";
    addClass(quickViewBtn, "product__btn--quickview");

    const showQuickBtn = () => {
      quickViewBtn.classList.toggle("show");
    };

    productImg.addEventListener("mouseover", showQuickBtn);
    productImg.addEventListener("mouseleave", showQuickBtn);
    quickViewBtn.addEventListener("mouseenter", showQuickBtn);
    quickViewBtn.addEventListener("mouseleave", showQuickBtn);

    const productTitle = document.createElement("h2");
    addClass(productTitle, "product__title");

    const brand = document.createElement("span");
    addClass(brand, "product__brand");
    brand.textContent = product.brand;

    const name = document.createElement("span");
    name.textContent = ` / ${product.name}`;
    productImg.alt = product.name;
    addClass(name, "product__name");

    productTitle.append(brand, name);

    const rating = document.createElement("div");
    addClass(rating, "product__rating");
    rating.textContent = product.rating;

    let evaluationCase;
    let evaluationLastSymbol = product.evaluation % 10;
    let evaluationLastTwoSymbols = product.evaluation % 100;
    if (
      (evaluationLastTwoSymbols >= 11 && evaluationLastTwoSymbols <= 14) ||
      evaluationLastSymbol === 0 ||
      (evaluationLastSymbol >= 5 && evaluationLastSymbol <= 9)
    ) {
      evaluationCase = "оценок";
    } else if (evaluationLastSymbol == 1) {
      evaluationCase = "оценка";
    } else {
      evaluationCase = "оценки";
    }

    const evaluation = document.createElement("div");
    addClass(evaluation, "product__evaluation");
    evaluation.textContent = `${product.evaluation.toLocaleString()} ${evaluationCase}`;

    const review = document.createElement("div");
    addClass(review, "product__review");
    review.append(rating, evaluation);

    const price = document.createElement("div");
    price.textContent = `${product.price} р`;
    addClass(price, "product__price");

    const discountPrice = document.createElement("div");
    discountPrice.textContent = `${product.discount_price} p`;
    addClass(discountPrice, "product__discount-price");

    const discountSignature = document.createElement("p");
    addClass(discountSignature, "product__discount-signature");
    discountSignature.textContent = "с WB кошельком";

    const discount = document.createElement("span");
    discount.textContent = `-${product.discount}%`;
    addClass(discount, "product__discount");

    const addBtn = document.createElement("button");
    addClass(addBtn, "icon-cart");

    imgWrapper.append(productImg, quickViewBtn, discount);

    card.append(
      imgWrapper,
      discountPrice,
      price,
      discountSignature,
      productTitle,
      review,
      addBtn
    );

    addBtn.addEventListener("click", function (e) {
      const productCopy = Object.assign({}, product);
      productsInTheCart.push(productCopy);
      console.log(productsInTheCart);
    });

    quickViewBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      body.style.overflow = "hidden";
      modalData.modal.style.display = "block";
      modalData.modalImg.src = product.img;
      modalData.modalTitle.textContent = `${product.brand} / ${product.name}`;
      modalData.modalRating.textContent = product.rating;
      modalData.modalDiscountPrice.textContent = `${product.discount_price} p`;
      modalData.modalPrice.textContent = `${product.price} p`;
      modalData.modalArticle.textContent = `Арт: ${product.article}`;
      modalData.modalWbWallet.textContent = "с WB кошельком";
      modalData.modalEvaluation.textContent = `${product.evaluation.toLocaleString()} ${evaluationCase}`;
    });

    return card;
  }

  function createModal() {
    const modal = document.createElement("div");
    addClass(modal, "products__modal");

    const modalContent = document.createElement("div");
    addClass(modalContent, "products__modal-content");
    modal.appendChild(modalContent);

    const modalCloseBtn = document.createElement("button");
    addClass(modalCloseBtn, "products__btn--closemodal");
    modalContent.appendChild(modalCloseBtn);

    const modalImgWrapper = document.createElement("div");
    addClass(modalImgWrapper, "products__img-wrapper");

    const modalImg = document.createElement("img");
    addClass(modalImg, "products__modal-img");
    modalImgWrapper.appendChild(modalImg);
    modalContent.appendChild(modalImgWrapper);

    const modalDescrip = document.createElement("div");
    addClass(modalDescrip, "products__modal-description");
    modalContent.appendChild(modalDescrip);

    const modalTitle = document.createElement("p");
    addClass(modalTitle, "products__modal-title");

    const modalReview = document.createElement("div");
    addClass(modalReview, "products__modal-review");

    const modalRating = document.createElement("span");
    addClass(modalRating, "products__modal-rating");

    const modalEvaluation = document.createElement("span");
    addClass(modalEvaluation, "products__modal-evaluation");

    const modalArticle = document.createElement("span");
    addClass(modalArticle, "products__modal-article");

    modalReview.append(modalRating, modalEvaluation, modalArticle);

    const modalDiscountPrice = document.createElement("div");
    addClass(modalDiscountPrice, "products__modal-discountprice");

    const modalPrice = document.createElement("div");
    addClass(modalPrice, "products__modal-price");

    const modalWbWallet = document.createElement("p");
    addClass(modalWbWallet, "products__modal-wbwallet");

    modalDescrip.append(
      modalTitle,
      modalReview,
      modalDiscountPrice,
      modalPrice,
      modalWbWallet
    );

    modalImgWrapper.addEventListener("mousemove", (event) => {
      const rect = modalImgWrapper.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      modalImg.style.transformOrigin = `${x}px ${y}px`;
      modalImg.style.transform = "scale(1.7)";
    });
    modalImgWrapper.addEventListener("mouseleave", () => {
      modalImg.style.transformOrigin = "center";
      modalImg.style.transform = "scale(1)";
    });

    modal.addEventListener("click", function (event) {
      if (event.target.classList.contains("products__btn--closemodal")) {
        modal.style.display = "none";
        body.style.overflow = "visible";
      }
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "visible";
      }
    });

    return {
      modal,
      modalImg,
      modalTitle,
      modalRating,
      modalDiscountPrice,
      modalPrice,
      modalArticle,
      modalEvaluation,
      modalWbWallet,
    };
  }
});
