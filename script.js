let currentPage = 1;
let itemsPerPage = 20;
let sortOrder = {};
const columns = ['ID', 'Summary', 'Component', 'Version', 'Milestone', 'Type', 'Severity', 'Owner', 'Status', 'Time', 'Changetime', 'Reporter', 'CC', 'Keywords', 'Resolution', 'Project'];

function renderTable() {
    console.log('Rendering table');
    const tableBody = document.getElementById('defectTableBody');
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = defects.slice(start, end);

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

    renderPagination();
}

function renderPagination() {
    console.log('Rendering pagination');
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const pageCount = Math.ceil(defects.length / itemsPerPage);

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

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    renderTable();
});