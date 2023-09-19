const students = ["Jazz", "Jada", "Jace", "Jack", "Eddie"];

const dropdownContent = document.getElementById("dropdown-content");

students.forEach((item) => {
    const dropdownItem = document.createElement("a");
    dropdownItem.textContent = item;
    dropdownItem.className = "dropdown-item";
    dropdownContent.appendChild(dropdownItem);
});

dropdownContent.addEventListener("click", (event) => {
    const selected = event.target;
    if (selected.classList.contains("dropdown-item")) {
        alert(`You selected: ${selected.textContent}`);
        dropdownContent.style.display = "none";
    }
});

const dropdownButton = document.querySelector(".dropdown-button");
dropdownButton.addEventListener("click", () => {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});