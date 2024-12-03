let currentPage = 1;
let itemsPerPage = 20;
let sortOrder = {};
const columns = ['ID', 'Summary', 'Component', 'Version', 'Milestone', 'Type', 'Severity', 'Owner', 'Status', 'Time', 'Changetime', 'Reporter', 'CC', 'Keywords', 'Resolution', 'Project'];
let filters = {
    ID: 'ALL',
    Summary: 'ALL',
    Component: 'ALL',
    Version: 'ALL',
    Milestone: 'ALL',
    Type: 'ALL',
    Severity: 'ALL',
    Owner: 'ALL',
    Status: 'ALL',
    Time: 'ALL',
    Changetime: 'ALL',
    Reporter: 'ALL',
    CC: 'ALL',
    Keywords: 'ALL',
    Resolution: 'ALL',
    Project: 'ALL'
};

function populateFilters() {
    columns.forEach(column => {
        const uniqueValues = [...new Set(defects.map(defect => defect[column]))];
        const filterElement = document.getElementById(`filter${column}`);
        filterElement.innerHTML = '<option value="ALL">ALL</option>';
        uniqueValues.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.text = value;
            filterElement.appendChild(option);
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
        return Object.keys(filters).every(key => {
            return filters[key] === 'ALL' || defect[key] == filters[key];
        });
    });
    const paginatedItems = filteredItems.slice(start, end);

    paginatedItems.forEach(defect => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${defect.ID}</td>
            <td>${defect.Summary}</td>
            <td>${defect.Component}</td>
            <td>${defect.Version}</td>
            <td>${defect.Milestone}</td>
            <td>${defect.Type}</td>
            <td>${defect.Severity}</td>
            <td>${defect.Owner}</td>
            <td>${defect.Status}</td>
            <td>${defect.Time}</td>
            <td>${defect.Changetime}</td>
            <td>${defect.Reporter}</td>
            <td>${defect.CC.join(', ')}</td>
            <td>${defect.Keywords.join(', ')}</td>
            <td>${defect.Resolution}</td>
            <td>${defect.Project}</td>
        `;
        tableBody.appendChild(row);
    });

    renderPagination(filteredItems.length);
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
        if (a[column] < b[column]) {
            return sortOrder[column] === 'asc' ? -1 : 1;
        }
        if (a[column] > b[column]) {
            return sortOrder[column] === 'asc' ? 1 : -1;
        }
        return 0;
    });

    renderTable();
}

function applyFilters() {
    columns.forEach(column => {
        const filterValue = document.getElementById(`filter${column}`).value;
        filters[column] = filterValue;
    });
    currentPage = 1;
    renderTable();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    populateFilters();
    renderTable();
});