// index.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
  
    // Hardcoded credentials for bypass (you can adjust this for your hackathon)
    const validUsername = "admin";
    const validPassword = "password123"; // Use a bypass password here for the hackathon.
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Check if the entered username and password match the valid ones
      if (
        usernameInput.value === validUsername &&
        passwordInput.value === validPassword
      ) {
        // Simulate login bypass (you can redirect to a new page or change content)
        window.location.href = "bypassed.html"; // Redirect to a bypassed page
      } else {
        // Display an error message if credentials don't match
        errorMessage.style.display = "block";
      }
    });
  });