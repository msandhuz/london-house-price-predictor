import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet marker icons
const fixLeafletIcons = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
};

const LocationMap = ({ latitude, longitude }) => {
  const mapRef = useRef(null);
  const position = [latitude, longitude];

  useEffect(() => {
    fixLeafletIcons();
    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <Box sx={{
      height: 300,
      width: '100%',
      borderRadius: 2,
      overflow: 'hidden',
      mt: 2,
      position: 'relative',
      '& .leaflet-container': {
        height: '100%',
        width: '100%'
      }
    }}>
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        whenReady={() => {
          // Fix for blank map tiles
          setTimeout(() => {
            if (mapRef.current) mapRef.current.invalidateSize();
          }, 100);
        }}
        ref={(map) => { mapRef.current = map }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Property Location <br />
            Latitude: {latitude.toFixed(4)} <br />
            Longitude: {longitude.toFixed(4)}
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default React.memo(LocationMap);