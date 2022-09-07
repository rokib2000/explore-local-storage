const getInputValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;

  inputField.value = "";

  return inputValue;
};

const addProduct = () => {
  const product = getInputValueById("product-name");
  const quantity = getInputValueById("product-quantity");
  console.log(product, quantity);

  addProductToDisplay(product, quantity);

  // set to local storage
  // simple way
  //   localStorage.setItem(product, quantity);
  saveToLocalStorage(product, quantity);
};

const getCartFormLocalStorage = () => {
  let saveCart = localStorage.getItem("cart");
  let cart = {};

  if (saveCart) {
    cart = JSON.parse(saveCart);
  }
  return cart;
};

const saveToLocalStorage = (product, quantity) => {
  const cart = getCartFormLocalStorage();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);

  // set to local storage
  localStorage.setItem("cart", cartStringified);
};

const addProductToDisplay = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = `${product} - ${quantity}`;
  productContainer.appendChild(li);
};

const displayStoredProduct = () => {
  const cart = getCartFormLocalStorage();
  for (const product in cart) {
    const quantity = cart[product];
    // console.log(product, quantity);
    addProductToDisplay(product, quantity);
  }
};

displayStoredProduct();
