function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkModeToggle.textContent = "🌙";
    } else {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }
}

// Event listener for the dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);