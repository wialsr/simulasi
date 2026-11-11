
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        message.textContent = "Username dan password wajib diisi!";
        message.style.color = "red";
    } else {
        message.textContent = "Form berhasil divalidasi!";
        message.style.color = "green";
    }
});
