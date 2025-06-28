// JavaScript for the dropdown menu
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropbtn = dropdown.querySelector(".dropbtn");
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Hardcoded credentials for demonstration purposes
    const validUsername = "2314067";
    const validPassword = "1234567";

    if (username === validUsername && password === validPassword) {
      message.style.color = "green";
      message.textContent = "Login successful!";

      // Set login status in localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to home page after a short delay
      setTimeout(function () {
        window.location.href = "home.html"; // Change this to your home page URL
      }, 1000);
    } else {
      message.textContent = "Invalid username or password.";
    }
  });
// Logout functionality
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html"; // Change this to your login page URL
});

// Check login status on page load
window.addEventListener("load", function () {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "/"; // Change this to your login page URL
  }
});

// Check login status on page load
window.addEventListener("load", function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "home.html"; // Change this to your home page URL
  }
});
