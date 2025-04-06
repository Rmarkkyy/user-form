function validateSignUp() {
    // Get input values
    let fullName = document.getElementById("full-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    let terms = document.getElementById("terms").checked;

    // Validation checks
    if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!terms) {
        alert("You must agree to the Terms & Conditions.");
        return;
    }

    // Success message
    alert("Account created successfully! Redirecting to login...");

    // Redirect to login.html after 2 seconds
    setTimeout(function() {
        window.location.href = "login.html";
    }, 2000);
}
