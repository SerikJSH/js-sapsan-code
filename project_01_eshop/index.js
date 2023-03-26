function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();
console.log(spinnerPage.error);

let CATALOG = [];

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 1000);
  })
  .catch((error) => {
    console.log(error);
    spinnerPage.handleClear();
    errorPage.render();
  });
