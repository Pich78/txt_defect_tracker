document.addEventListener('DOMContentLoaded', () => {
    const defectDetailsContainer = document.getElementById('defectDetailsContainer');
    const defectId = new URLSearchParams(window.location.search).get('id');
    const defect = defects.find(d => d.ID == defectId);

    if (defect) {
        const detailsHtml = `
            <h1>Defect Details</h1>
            <p><strong>ID:</strong> ${defect.ID}</p>
            <p><strong>Summary:</strong> ${defect.Summary}</p>
            <p><strong>Description:</strong> ${defect.Description || ''}</p>
            <p><strong>Status:</strong> ${defect.Status}</p>
            <p><strong>Type:</strong> ${defect.Type}</p>
            <p><strong>Priority:</strong> ${defect.Priority || ''}</p>
            <p><strong>Milestone:</strong> ${defect.Milestone}</p>
            <p><strong>Component:</strong> ${defect.Component}</p>
            <p><strong>Version:</strong> ${defect.Version}</p>
            <p><strong>Severity:</strong> ${defect.Severity}</p>
            <p><strong>Reporter:</strong> ${defect.Reporter}</p>
            <p><strong>Owner:</strong> ${defect.Owner}</p>
            <p><strong>CC:</strong> ${defect.CC.join(', ')}</p>
            <p><strong>Keywords:</strong> ${defect.Keywords.join(', ')}</p>
            <p><strong>Resolution:</strong> ${defect.Resolution}</p>
            <p><strong>Created Time:</strong> ${defect.Time}</p>
            <p><strong>Change Time:</strong> ${defect.Changetime}</p>
            <p><strong>Project:</strong> ${defect.Project}</p>
        `;
        defectDetailsContainer.innerHTML = detailsHtml;
    } else {
        defectDetailsContainer.innerHTML = '<p>No defect found with the provided ID.</p>';
    }
});