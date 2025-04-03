document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');
    const storeType = document.getElementById('storeType');
    const radius = document.getElementById('radius');
    const storesList = document.getElementById('storesList');

    // Sample store data (in real app, this would come from an API)
    const sampleStores = [
        {
            name: "HealthCare Pharmacy",
            type: "pharmacy",
            address: "123 Medical Ave",
            distance: "0.5 km",
            status: "Open",
            phone: "+1 (555) 123-4567"
        },
        {
            name: "City Medical Clinic",
            type: "clinic",
            address: "456 Health Street",
            distance: "1.2 km",
            status: "Open",
            phone: "+1 (555) 234-5678"
        },
        {
            name: "Community Pharmacy",
            type: "pharmacy",
            address: "789 Wellness Road",
            distance: "2.1 km",
            status: "Closed",
            phone: "+1 (555) 345-6789"
        }
    ];

    function displayStores(stores) {
        storesList.innerHTML = stores.map(store => `
            <div class="store-card">
                <h3>${store.name}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${store.address}</p>
                <p><i class="fas fa-road"></i> ${store.distance}</p>
                <p><i class="fas fa-phone"></i> ${store.phone}</p>
                <span class="store-status ${store.status.toLowerCase()}">
                    ${store.status}
                </span>
                <button class="direction-button">
                    <i class="fas fa-directions"></i> Get Directions
                </button>
            </div>
        `).join('');
    }

    // Handle search
    searchButton.addEventListener('click', () => {
        const location = locationInput.value;
        const type = storeType.value;
        const searchRadius = radius.value;

        // Filter stores based on type (in real app, this would be an API call)
        let filteredStores = sampleStores;
        if (type !== 'all') {
            filteredStores = sampleStores.filter(store => store.type === type);
        }

        displayStores(filteredStores);
    });

    // Initial display
    displayStores(sampleStores);

    // Add store card styles
    const style = document.createElement('style');
    style.textContent = `
        .store-card {
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .store-card h3 {
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }

        .store-card p {
            margin: 0.25rem 0;
            color: var(--text-color);
        }

        .store-status {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            margin: 0.5rem 0;
            font-size: 0.875rem;
        }

        .store-status.open {
            background-color: #10b981;
            color: white;
        }

        .store-status.closed {
            background-color: #ef4444;
            color: white;
        }

        .direction-button {
            display: block;
            width: 100%;
            padding: 0.5rem;
            margin-top: 0.5rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .direction-button:hover {
            background-color: var(--secondary-color);
        }
    `;
    document.head.appendChild(style);
});