const petList = [];

function describePet(pet) {
    return `Meet ${pet.name}, a ${pet.age}-year-old ${pet.type}.`;
}

function createPetProfile() {
    const petName = document.getElementById("petName").value;
    const petAge = document.getElementById("petAge").value;
    const petType = document.getElementById("petType").value;

    const newPet = {
        name: petName,
        age: petAge,
        type: petType
    };

    petList.push(newPet);

    const description = describePet(newPet);
    document.getElementById("profileDescription").textContent = description;

    displayPetList();
}

function displayPetList() {
    const petListContainer = document.getElementById("petList");
    petListContainer.innerHTML = "<h2>All Pets:</h2>";

    if (petList.length === 0) {
        petListContainer.innerHTML += "<p>No pets yet.</p>";
    } else {
        const ul = document.createElement("ul");
        petList.forEach((pet) => {
            const li = document.createElement("li");
            li.textContent = describePet(pet);
            ul.appendChild(li);
        });
        petListContainer.appendChild(ul);
    }
}
