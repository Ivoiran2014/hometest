function togglePassword() {
  var passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Show password
  } else {
    passwordInput.type = "password"; // Hide password
  }
}
