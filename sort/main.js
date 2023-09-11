const data = [
    { name: 'Jackson', age: 10, position: 'Lineman' },
    { name: 'Brendon', age: 11, position: 'Athlete' },
    { name: 'Jerome', age: 10, position: 'Athlete' },
    { name: 'Camden', age: 11, position: 'Lineman' },
    { name: 'Richard', age: 10, position: 'Lineman' },
    { name: 'Justin', age: 10, position: 'Lineman' },
    { name: 'Chris', age: 11, position: 'Athlete' },


];

const sortColumnSelect = document.getElementById('sortColumn');
const sortAscendingButton = document.getElementById('sortAscending');
const sortDescendingButton = document.getElementById('sortDescending');
const tableBody = document.getElementById('tableBody');
let currentSortColumn = 'name';
let isAscending = true;

function renderTable(data) {
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${item.age}</td><td>${item.position}</td>`;
        tableBody.appendChild(row);
    });
}

renderTable(data);

function sortData(column, ascending) {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
        if (valueA < valueB) return ascending ? -1 : 1;
        if (valueA > valueB) return ascending ? 1 : -1;
        return 0;
    });
    return sortedData;
}

sortAscendingButton.addEventListener('click', () => {
    isAscending = true;
    const sortedData = sortData(currentSortColumn, isAscending);
    renderTable(sortedData);
});

sortDescendingButton.addEventListener('click', () => {
    isAscending = false;
    const sortedData = sortData(currentSortColumn, isAscending);
    renderTable(sortedData);
});

sortColumnSelect.addEventListener('change', () => {
    currentSortColumn = sortColumnSelect.value;
    const sortedData = sortData(currentSortColumn, isAscending);
    renderTable(sortedData);
});
