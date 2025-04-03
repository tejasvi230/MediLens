# MediLens
 Medical Store Finder

![Medical Store Finder](https://via.placeholder.com/1200x600?text=Medical+Store+Finder)

## 📌 Project Overview
The **Medical Store Finder** is a web-based application that helps users locate nearby pharmacies and check the availability of medicines using **geolocation services** and **pharmacy APIs**.

## 🌟 Features
- 🌍 **Locate Nearby Pharmacies** - Uses GPS to fetch medical stores in your area.
- 🔍 **Check Medicine Availability** - Find specific medicines in stores.
- 📍 **Interactive Map** - View pharmacy locations on an embedded map.
- ⚡ **Real-Time API Integration** - Fetches live data from pharmacy APIs.
- 📱 **Mobile-Friendly UI** - Fully responsive design.

---
## 🏗 Architecture Diagram
```mermaid
graph LR;
    User-->Browser;
    Browser-->Frontend[React App];
    Frontend-->Backend[Node.js + Express];
    Backend-->Geolocation API;
    Backend-->Pharmacy API;
    Pharmacy API-->Database[Pharmacy Database];
```

---
## 🛠 Tech Stack
| **Technology**  | **Usage**  |
|---------------|------------|
| React.js | Frontend UI |
| Node.js + Express | Backend API |
| MongoDB | Database (if needed) |
| Leaflet.js / Google Maps API | Map integration |
| Geolocation API | Fetch user location |
| Pharmacy APIs | Fetch medicine availability |

---
## 📥 Installation Guide
```bash
git clone https://github.com/yourusername/medical-store-finder.git
cd medical-store-finder
npm install
```

---
## 🚀 Usage
### 1️⃣ Start the Backend Server
```bash
cd backend
node server.js
```
### 2️⃣ Start the Frontend
```bash
cd frontend
npm start
```
### 3️⃣ Open in Browser
```
http://localhost:3000
```

---
## 📡 API Endpoints
### 🔹 Fetch Nearby Stores
```http
GET /api/stores?lat=28.7041&lon=77.1025
```
#### 🔸 Response
```json
[
  { "name": "ABC Pharmacy", "address": "123 Street, City" },
  { "name": "XYZ Medicos", "address": "456 Avenue, City" }
]
```

---
## 📌 Future Enhancements
- ✅ Add user authentication
- ✅ Implement order & delivery tracking
- ✅ AI-based medicine recommendations

### 📩 Need Help?
For support, contact **connectsonasha@gmail.com**

Happy Coding! 🚀

