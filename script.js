document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (username === "" || email === "" || password === "") {
    errorMessage.textContent = "All fields are required!";
    return;
  }

  if (!email.includes("@")) {
    errorMessage.textContent = "Please enter a valid email!";
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters!";
    return;
  }

  errorMessage.textContent = "";
  alert("Signup successful!");
  // Here you can send data to your backend using fetch()
});
