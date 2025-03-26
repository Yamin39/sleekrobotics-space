
import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For demo purposes, this is a static map image instead of an interactive map
    // In a real implementation, you'd integrate with a maps API
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="relative w-full h-full rounded-lg overflow-hidden">
          <img 
            src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/90.4125,23.8103,12,0/600x400?access_token=pk.eyJ1Ijoic2FtcGxlYWNjb3VudCIsImEiOiJjbHI2OWxzNnUwM2tvMmpxcXJnaXRiNDRsIn0.mJMN7lnVMtjQlIwX1XQSNw" 
            class="w-full h-full object-cover"
            alt="Map of School of Robotics location" 
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
              <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div class="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }, []);

  return (
    <div className="h-96">
      <div ref={mapRef} className="h-full w-full rounded-lg overflow-hidden relative">
        {/* Map will be rendered here */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse">
            <MapPin size={32} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
