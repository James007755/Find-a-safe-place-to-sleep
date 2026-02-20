import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ShelterMap = () => {
    const shelters = [
        { id: 1, name: 'Shelter 1', location: { lat: 37.7749, lng: -122.4194 } },
        { id: 2, name: 'Shelter 2', location: { lat: 37.7849, lng: -122.4094 } },
        // Add more shelters as needed
    ];

    const mapContainerStyle = {
        height: "400px",
        width: "800px"
    };

    const center = {
        lat: 37.7749,
        lng: -122.4194
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
            >
                {shelters.map(shelter => (
                    <Marker key={shelter.id} position={shelter.location} name={shelter.name} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default ShelterMap;