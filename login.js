function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Dummy credentials
    var correctEmail = "angelica@gmail.com";
    var correctPassword = "angelica18";

    if (email === correctEmail && password === correctPassword) {
        window.location.href = "homepage.html"; // Redirect to next page
    } else {
        alert("Invalid email or password!");
    }
}

function loginWith(platform) {
    alert("Login with " + platform + " coming soon!");
}
