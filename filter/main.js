const products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'T-shirt', price: 20, category: 'Clothing' },
    { name: 'Smartphone', price: 599, category: 'Electronics' },
    { name: 'Jeans', price: 40, category: 'Clothing' },
    { name: 'Book', price: 15, category: 'Books' },
];

function generateTable(data) {
    const tableBody = document.querySelector('#productTable tbody');

    tableBody.innerHTML = '';

    data.forEach(product => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const priceCell = row.insertCell(1);
        const categoryCell = row.insertCell(2);
        nameCell.textContent = product.name;
        priceCell.textContent = `$${product.price.toFixed(2)}`;
        categoryCell.textContent = product.category;
    });
}

generateTable(products);

document.querySelector('#filterButton').addEventListener('click', filterProducts);
document.querySelector('#clearFiltersButton').addEventListener('click', clearFilters);

function filterProducts() {
    const filterName = document.querySelector('#filterName').value.toLowerCase();
    const filterCategory = document.querySelector('#filterCategory').value.toLowerCase();
    const filterPriceMin = parseFloat(document.querySelector('#filterPriceMin').value) || 0;
    const filterPriceMax = parseFloat(document.querySelector('#filterPriceMax').value) || Number.MAX_VALUE;

    const filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(filterName) || filterName === '') &&
        (product.category.toLowerCase() === filterCategory || filterCategory === '') &&
        (product.price >= filterPriceMin && product.price <= filterPriceMax)
    );

    generateTable(filteredProducts);
}

function clearFilters() {
    document.querySelector('#filterName').value = '';
    document.querySelector('#filterCategory').value = '';
    document.querySelector('#filterPriceMin').value = '';
    document.querySelector('#filterPriceMax').value = '';
    generateTable(products);
}
