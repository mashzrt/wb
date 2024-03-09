document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
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
    sectionTitle.textContent = "\u0425\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0430\u0436";
    container.appendChild(sectionTitle);
    //создание модального окна
    const { modal, modalImg, modalTitle } = createModal();
    root.appendChild(modal);
    const cardsContainer = document.createElement("div");
    addClass(cardsContainer, "products__container");
    container.appendChild(cardsContainer);
    if (!localStorage.getItem("Products")) fetchDataAndRenderCards();
    else renderCardsFromLocalStorage();
    function fetchDataAndRenderCards() {
        fetch("https://65d7760427d9a3bc1d7b168a.mockapi.io/product").then((response)=>response.json()).then((json)=>{
            const products = json.map((product)=>{
                product.img = `${product.img}/cats?lock=${Math.floor(Math.random() * 100) + 1}`;
                let rating = parseFloat(product.rating / 10).toFixed(1);
                if (rating > 5.0 || rating < 3.5) rating = (Math.random() * 1.5 + 3.5).toFixed(1);
                product.rating = rating;
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
        products.forEach((product)=>{
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
        quickViewBtn.textContent = "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440";
        addClass(quickViewBtn, "product__btn--quickview");
        quickViewBtn.style.display = "none";
        const showQuickBtn = ()=>{
            quickViewBtn.style.display = quickViewBtn.style.display === "none" ? "block" : "none";
            discount.style.display = discount.style.display === "none" ? "block" : "none";
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
        const price = document.createElement("div");
        price.textContent = `${product.price} \u{440}`;
        addClass(price, "product__price");
        const discountPrice = document.createElement("div");
        discountPrice.textContent = `${product.price - Math.ceil(product.price * product.discount / 100)} \u{440}`;
        addClass(discountPrice, "product__discount-price");
        const discountSignature = document.createElement("p");
        addClass(discountSignature, "product__discount-signature");
        discountSignature.textContent = "\u0441 WB \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u043E\u043C";
        const discount = document.createElement("span");
        discount.textContent = `-${product.discount}%`;
        addClass(discount, "product__discount");
        const addBtn = document.createElement("span");
        addClass(addBtn, "icon-cart");
        imgWrapper.append(productImg, quickViewBtn, discount, addBtn);
        card.append(imgWrapper, discountPrice, price, discountSignature, productTitle, rating);
        quickViewBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            modal.style.display = "block";
            modalImg.src = product.img;
            modalTitle.textContent = product.name;
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
        addClass(modalCloseBtn, "product__btn--closemodal");
        modalContent.appendChild(modalCloseBtn);
        const modalImg = document.createElement("img");
        addClass(modalImg, "products__modal-img");
        modalContent.appendChild(modalImg);
        const modalDescrip = document.createElement("div");
        addClass(modalDescrip, "products__modal-description");
        modalContent.appendChild(modalDescrip);
        const modalTitle = document.createElement("p");
        modalDescrip.appendChild(modalTitle);
        modal.addEventListener("click", function(event) {
            if (event.target.classList.contains("product__btn--closemodal")) modal.style.display = "none";
        });
        window.addEventListener("click", function(event) {
            if (event.target == modal) modal.style.display = "none";
        });
        return {
            modal,
            modalImg,
            modalTitle
        };
    }
});

//# sourceMappingURL=index.3e426e73.js.map
