document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const prescriptionInput = document.getElementById('prescriptionInput');
    const scanButton = document.getElementById('scanButton');
    const scanResults = document.getElementById('scanResults');
    const downloadButton = document.getElementById('downloadButton');
    const shareButton = document.getElementById('shareButton');

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
        prescriptionInput.click();
    });

    prescriptionInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    function handleFile(file) {
        if (file.type.startsWith('image/')) {
            // Show file name and enable scan button
            uploadArea.innerHTML = `
                <i class="fas fa-file-image"></i>
                <p>${file.name}</p>
            `;
            scanButton.disabled = false;
        } else {
            alert('Please upload an image file');
        }
    }

    // Handle scan button click
    scanButton.addEventListener('click', async () => {
        // Simulate scanning process
        scanButton.disabled = true;
        scanButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning...';

        // Simulate API call delay
        setTimeout(() => {
            scanResults.hidden = false;
            scanResults.querySelector('.result-content').innerHTML = `
                <div class="medicine-list">
                    <h4>Detected Medicines:</h4>
                    <ul>
                        <li>Paracetamol 500mg</li>
                        <li>Amoxicillin 250mg</li>
                        <li>Vitamin C 1000mg</li>
                    </ul>
                </div>
            `;
            scanButton.innerHTML = 'Upload & Scan';
            scanButton.disabled = false;
        }, 2000);
    });

    // Handle download and share buttons
    downloadButton.addEventListener('click', () => {
        // Implement download functionality
        alert('Download feature will be implemented here');
    });

    shareButton.addEventListener('click', () => {
        // Implement share functionality
        alert('Share feature will be implemented here');
    });
});