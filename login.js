function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Dummy credentials
    var correctEmail = "user@example.com";
    var correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "homepage.html"; // Redirect to next page
    } else {
        alert("Invalid email or password!");
    }
}

function loginWith(platform) {
    alert("Login with " + platform + " coming soon!");
}
