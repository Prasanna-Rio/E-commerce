const cartItems = [];

function addToCart(product, price) {
  let found = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].product === product) {
      cartItems[i].quantity++;
      found = true;
      break;
    }
  }
  if (!found) {
    cartItems.push({ product, price, quantity: 1 });
  }
  totalPrice += price;
  renderCartItems();
}

let totalPrice = 0;

function renderCartItems() {
  const cartSection = document.querySelector("#cart-items");
  cartSection.innerHTML = "";

  cartItems.forEach((item) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `<h3>${item.product}</h3>
              <p>Price: ${item.price} x ${item.quantity}</p>
            `;
    cartSection.appendChild(productElement);
  });
  const totalElement = document.createElement("div");
  totalElement.innerHTML = `<h4>Total: ${totalPrice}</h4>`;
  cartSection.appendChild(totalElement);
}

const cartButton = document.querySelector(".ethnic-a");
cartButton.addEventListener("click", function () {
  renderCartItems();
});
