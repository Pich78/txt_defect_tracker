let currentPage = 1;
let itemsPerPage = 20;
let sortOrder = {};
const columns = ['ID', 'Summary', 'Component', 'Version', 'Milestone', 'Type', 'Severity', 'Owner', 'Status', 'Time', 'Changetime', 'Reporter', 'CC', 'Keywords', 'Resolution', 'Project'];
let filterRows = [{ ID: 'ALL', Summary: 'ALL', Component: 'ALL', Version: 'ALL', Milestone: 'ALL', Type: 'ALL', Severity: 'ALL', Owner: 'ALL', Status: 'ALL', Time: 'ALL', Changetime: 'ALL', Reporter: 'ALL', CC: 'ALL', Keywords: 'ALL', Resolution: 'ALL', Project: 'ALL' }];
let visibleColumns = new Set(columns); // Track visible columns

function populateFilters() {
    filterRows.forEach((filters, index) => {
        const filterRow = document.getElementById(`filterRow${index + 1}`);
        filterRow.innerHTML = '';
        columns.forEach(column => {
            if (visibleColumns.has(column)) {
                const uniqueValues = [...new Set(defects.map(defect => defect[column] || ""))];
                const select = document.createElement('select');
                select.classList.add('filter');
                select.id = `filter${column}${index + 1}`;
                select.onchange = applyFilters;
                select.innerHTML = '<option value="ALL">ALL</option>';
                uniqueValues.forEach(value => {
                    const option = document.createElement('option');
                    option.value = value;
                    option.text = value;
                    select.appendChild(option);
                });
                filterRow.appendChild(select);
            }
        });
    });
}

function renderTable() {
    console.log('Rendering table');
    const tableBody = document.getElementById('defectTableBody');
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredItems = defects.filter(defect => {
        return filterRows.some(filters => {
            return Object.keys(filters).every(key => {
                return filters[key] === 'ALL' || defect[key] == filters[key];
            });
        });
    });
    const paginatedItems = filteredItems.slice(start, end);

    paginatedItems.forEach(defect => {
        const row = document.createElement('tr');
        columns.forEach(column => {
            if (visibleColumns.has(column)) {
                const cell = document.createElement('td');
                cell.classList.add(`column-${column}`);
                if (column === 'ID') {
                    cell.innerHTML = `<a href="details.html?id=${defect.ID}">#${defect.ID}</a>`;
                } else {
                    cell.innerText = Array.isArray(defect[column]) ? defect[column].join(', ') : (defect[column] || "");
                }
                row.appendChild(cell);
            }
        });
        tableBody.appendChild(row);
    });

    renderPagination(filteredItems.length);
    updateColumnVisibility();
}

function renderPagination(totalItems) {
    console.log('Rendering pagination');
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.innerText = i;
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            renderTable();
        });
        pagination.appendChild(pageLink);
    }
}

function changeItemsPerPage() {
    const input = document.getElementById('itemsPerPage');
    itemsPerPage = parseInt(input.value);
    if (isNaN(itemsPerPage) || itemsPerPage < 1) {
        itemsPerPage = 20; // Default value
        input.value = 20;
    }
    currentPage = 1;
    renderTable();
}

function sortTable(column) {
    if (!sortOrder[column]) {
        sortOrder[column] = 'asc';
    } else {
        sortOrder[column] = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    }

    defects.sort((a, b) => {
        const aValue = a[column] || "";
        const bValue = b[column] || "";
        
        if (aValue < bValue) {
            return sortOrder[column] === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortOrder[column] === 'asc' ? 1 : -1;
        }
        return 0;
    });

    renderTable();
}

function applyFilters() {
    filterRows.forEach((filters, index) => {
        columns.forEach(column => {
            if (visibleColumns.has(column)) {
                const filterValue = document.getElementById(`filter${column}${index + 1}`).value;
                filters[column] = filterValue;
            } else {
                filters[column] = 'ALL';
            }
        });
    });
    currentPage = 1;
    renderTable();
}

function addFilterRow() {
    const newFilterRow = { ID: 'ALL', Summary: 'ALL', Component: 'ALL', Version: 'ALL', Milestone: 'ALL', Type: 'ALL', Severity: 'ALL', Owner: 'ALL', Status: 'ALL', Time: 'ALL', Changetime: 'ALL', Reporter: 'ALL', CC: 'ALL', Keywords: 'ALL', Resolution: 'ALL', Project: 'ALL' };
    filterRows.push(newFilterRow);
    const filterContainer = document.getElementById('filterContainer');
    const newRowDiv = document.createElement('div');
    newRowDiv.classList.add('filter-row');
    newRowDiv.id = `filterRow${filterRows.length}`;
    filterContainer.appendChild(newRowDiv);
    populateFilters();
}

function updateColumnVisibility() {
    columns.forEach(column => {
        const isVisible = visibleColumns.has(column);
        const th = document.querySelector(`th.column-${column}`);
        const tds = document.querySelectorAll(`td.column-${column}`);
        if (isVisible) {
            th.style.display = '';
            tds.forEach(td => td.style.display = '');
        } else {
            th.style.display = 'none';
            tds.forEach(td => td.style.display = 'none');
        }
    });
    populateFilters(); // Update filters when a column is toggled
}

function toggleColumnVisibility(column) {
    if (visibleColumns.has(column)) {
        visibleColumns.delete(column);
    } else {
        visibleColumns.add(column);
    }
    updateColumnVisibility();
}

function populateColumnSelector() {
    const columnSelector = document.getElementById('columnSelector');
    columns.forEach(column => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.onchange = () => toggleColumnVisibility(column);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(column));
        columnSelector.appendChild(label);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    populateFilters();
    populateColumnSelector();
    renderTable();
});