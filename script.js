document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const username = form.querySelector('input[type="text"]').value.trim();
    const password = form.querySelector('input[type="password"]').value;

    if (username === "MahalkosiRJ" && password === "Honest") {
      window.location.href = "mygift.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});
