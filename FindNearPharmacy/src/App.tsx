import React from 'react';
import { Stethoscope } from 'lucide-react';
import MedicalStoreFinder from './components/MedicalStoreFinder';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Stethoscope className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">MediLens</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find Nearby Medical Stores
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Locate pharmacies and medical stores in your area with real-time availability
          </p>
        </div>

        <MedicalStoreFinder />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2025 MediLens. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;