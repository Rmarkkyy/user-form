document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const container = document.querySelector(".container");
    const loadingScreen = document.querySelector(".loading-screen");

    // Apply blur effect initially
    body.classList.add("blur");

    setTimeout(() => {
        // Remove blur and fade in content after 3 seconds
        body.classList.remove("blur");
        container.style.opacity = "1";
        loadingScreen.style.display = "none";
    }, 3000);
});

