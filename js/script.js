
function login(event) {
  event.preventDefault();

  // Get input values
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Basic validation (for demo purposes only)
  if (username === validCredentials.username && password === validCredentials.password) {
    // Redirect to main page
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}
