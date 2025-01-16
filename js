// JavaScript for Login Validation and Dashboard Functionality

// Authorized credentials
const USERNAME = "alejandrogs";
const PASSWORD = "@lE991028";

const loginForm = document.getElementById("login-form");
const loginScreen = document.getElementById("login-screen");
const dashboard = document.getElementById("dashboard");
const errorMessage = document.getElementById("error-message");
const logoutButton = document.getElementById("logout-button");

// Handle Login Form Submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  // Validate credentials
  if (enteredUsername === USERNAME && enteredPassword === PASSWORD) {
    // Show dashboard and hide login screen
    loginScreen.style.display = "none";
    dashboard.style.display = "block";
    errorMessage.textContent = "";
  } else {
    // Show error message
    errorMessage.textContent = "Invalid username or password. Please try again.";
  }
});

// Handle Logout
logoutButton.addEventListener("click", () => {
  // Return to login screen
  dashboard.style.display = "none";
  loginScreen.style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
