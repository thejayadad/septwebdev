function sortTable(columnIndex) {
    const table = document.getElementById("sortable-table");
    const rows = Array.from(table.rows).slice(1);

    const isAscending = table.rows[0].cells[columnIndex].classList.contains("asc");

    for (let i = 0; i < table.rows[0].cells.length; i++) {
        table.rows[0].cells[i].classList.remove("asc", "desc");
    }

    table.rows[0].cells[columnIndex].classList.toggle(isAscending ? "desc" : "asc");

    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent;
        const bValue = b.cells[columnIndex].textContent;
        return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

    const tbody = table.tBodies[0];
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(row => tbody.appendChild(row));
}
