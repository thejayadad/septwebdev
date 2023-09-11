// Function to update the grid layout based on the selected radio button
function updateGridLayout() {
    const selectedLayout = document.querySelector('input[name="layout"]:checked').value;
    const gridContainer = document.querySelector('.grid-container');

    // Define the number of grid items and their content based on the selected layout
    let gridItems = [];
    switch (selectedLayout) {
        case 'layout1':
            gridItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
            break;
        case 'layout2':
            gridItems = ['Item A', 'Item B', 'Item C'];
            break;
        case 'layout3':
            gridItems = ['Item X', 'Item Y', 'Item Z', 'Item W', 'Item V'];
            break;
        case 'layout4':
            gridItems = ['Item Alpha', 'Item Beta', 'Item Gamma'];
            break;
        default:
            break;
    }

    // Remove existing grid items
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Create and append grid items
    gridItems.forEach(itemText => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = itemText;
        gridContainer.appendChild(gridItem);
    });
}

// Add event listener to the radio buttons to update the grid layout
const radioButtons = document.querySelectorAll('input[name="layout"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', updateGridLayout);
});

// Initial grid layout update
updateGridLayout();
