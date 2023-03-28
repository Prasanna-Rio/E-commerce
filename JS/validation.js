
const signupForm = document.querySelector(".signup form");

const loginForm = document.querySelector(".login form");

// Add event listener to the signup form
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameInput = this.querySelector('input[name="txt"]');

  const emailInput = this.querySelector('input[name="email"]');

  const passwordInput = this.querySelector('input[name="pswd"]');

  // Validate the input fields
  if (!usernameInput.value.trim()) {
    alert("Please enter a username.");
    return;
  }

  if (!emailInput.value.trim()) {
    alert("Please enter an email address.");
    return;
  }

  if (!passwordInput.value.trim()) {
    alert("Please enter a password.");
    return;
  }

  this.submit();
});

loginForm.addEventListener("submit", function (event) {
  const loginButton = document.getElementById("login");
  // Prevent the form from submitting
  event.preventDefault();

  // Select the email input field
  const emailInput = this.querySelector('input[name="email"]');

  // Select the password input field
  const passwordInput = this.querySelector('input[name="pswd"]');

  // Validate the input fields
  if (!emailInput.value.trim()) {
    alert("Please enter an email address.");
    return;
  }

  if (!passwordInput.value.trim()) {
    alert("Please enter a password.");
    return;
  }

  // Submit the form
  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // redirect to shop.html
    window.location.href = "shop.html";
  });
});



