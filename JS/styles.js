
// Buy now page or pop up

const buyButtons = document.querySelectorAll(".productButton");
const paymentSection = document.querySelector(".payment");
const closeButton = document.querySelector(".close");
const body = document.querySelector("body");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paymentSection.style.display = "flex";
  });
});

closeButton.addEventListener("click", () => {
  paymentSection.style.display = "none";
});



// for dark and light mode
function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
}
function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

