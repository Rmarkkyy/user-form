function confirmLogout() {
    let confirmAction = confirm("Are you sure you want to log out?");
    if (confirmAction) {
        window.location.href = "login.html"; // Redirect to login page
    }
}
