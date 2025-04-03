document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const reportInput = document.getElementById('reportInput');
    const generateButton = document.getElementById('generateButton');
    const reportResults = document.getElementById('reportResults');
    const downloadReport = document.getElementById('downloadReport');
    const shareReport = document.getElementById('shareReport');

    // Handle drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#2563eb';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '#e2e8f0';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#e2e8f0';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    // Handle click to upload
    uploadArea.addEventListener('click', () => {
        reportInput.click();
    });

    reportInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    function handleFile(file) {
        if (file.type.startsWith('image/') || file.type === 'application/pdf') {
            uploadArea.innerHTML = `
                <i class="fas fa-file-medical"></i>
                <p>${file.name}</p>
            `;
            generateButton.disabled = false;
        } else {
            alert('Please upload an image or PDF file');
        }
    }

    // Handle generate button click
    generateButton.addEventListener('click', async () => {
        generateButton.disabled = true;
        generateButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

        // Simulate API call delay
        setTimeout(() => {
            reportResults.hidden = false;
            reportResults.querySelector('.result-content').innerHTML = `
                <div class="report-analysis">
                    <h4>Analysis Results:</h4>
                    <div class="analysis-item">
                        <strong>Key Findings:</strong>
                        <ul>
                            <li>Normal blood pressure readings</li>
                            <li>Cholesterol levels within normal range</li>
                            <li>Recommended follow-up in 6 months</li>
                        </ul>
                    </div>
                    <div class="analysis-item">
                        <strong>Recommendations:</strong>
                        <ul>
                            <li>Maintain current medication regimen</li>
                            <li>Continue regular exercise routine</li>
                            <li>Schedule follow-up appointment</li>
                        </ul>
                    </div>
                </div>
            `;
            generateButton.innerHTML = 'Generate Report';
            generateButton.disabled = false;
        }, 2000);
    });

    // Handle download and share buttons
    downloadReport.addEventListener('click', () => {
        alert('Download feature will be implemented here');
    });

    shareReport.addEventListener('click', () => {
        alert('Share feature will be implemented here');
    });
});