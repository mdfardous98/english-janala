function togglePassword() {
  const passwordField = document.getElementById("password");
  const checkbox = document.getElementById("showPassword");

  if (checkbox.checked) {
    passwordField.type = "text"; // Show password
  } else {
    passwordField.type = "password"; // Hide password
  }
}
