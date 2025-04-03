import React, { useState, useEffect } from 'react';
import { Loader2, MapPin, Navigation } from 'lucide-react';

interface Pharmacy {
  display_name: string;
  lat: string;
  lon: string;
  distance: number;
}

export default function MedicalStoreFinder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);

  const getLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
        
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=pharmacy&format=json&limit=10&lat=${latitude}&lon=${longitude}&bounded=1`
          );
          
          if (!response.ok) throw new Error('Failed to fetch pharmacies');
          
          const data = await response.json();
          
          // Calculate distance and sort by nearest
          const pharmaciesWithDistance = data.map((pharmacy: Pharmacy) => ({
            ...pharmacy,
            distance: calculateDistance(
              latitude,
              longitude,
              parseFloat(pharmacy.lat),
              parseFloat(pharmacy.lon)
            ),
          }));

          setPharmacies(pharmaciesWithDistance.sort((a: Pharmacy, b: Pharmacy) => a.distance - b.distance));
        } catch (err) {
          setError('Failed to fetch nearby pharmacies');
        }
        
        setLoading(false);
      },
      (error) => {
        setError('Unable to retrieve your location. Please enable location services.');
        setLoading(false);
      }
    );
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <button
          onClick={getLocation}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Navigation className="w-5 h-5" />
          )}
          Find Nearby Pharmacies
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {pharmacies.length > 0 && (
        <div className="grid gap-4">
          {pharmacies.map((pharmacy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {pharmacy.display_name.split(',')[0]}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {pharmacy.display_name}
                  </p>
                  <p className="text-blue-600 font-medium mt-2">
                    {pharmacy.distance.toFixed(2)} km away
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.lat},${pharmacy.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mt-3"
                  >
                    Get Directions
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}