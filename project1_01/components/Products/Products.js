class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "➕ Add to cart";
    this.labelRemove = "➖ Remove from cart";
  }

  handleSetLocationStorage(element, id) {
    // console.log(element);
    // console.log(id);
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    // console.log(pushProduct);
    // console.log(products);
    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    // console.log(CATALOG);

    CATALOG.forEach(({ id, name, price, img }) => {
      // console.log(id, name, price, img);
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeText = this.labelRemove;
        activeClass = "products-element__button_active";
      }

      htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}">
                <span class="products-element__price">⚡️ ${price.toLocaleString()} KZT</span>
                <button class="products-element__button ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
            </li>
        `;
    });
    const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();

// productsPage.render();
