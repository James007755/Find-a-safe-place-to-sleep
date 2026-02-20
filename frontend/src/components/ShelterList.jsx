import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShelterList = () => {
    const [shelters, setShelters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchShelters();
    }, []);

    const fetchShelters = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/shelters');
            setShelters(response.data.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to load shelters');
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading shelters...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="shelter-list">
            <h2>Available Shelters</h2>
            {shelters.map(shelter => (
                <div key={shelter.id} className="shelter-card">
                    <div className="shelter-header">
                        <h3>{shelter.name}</h3>
                        <span className={`status ${shelter.available ? 'available' : 'unavailable'}`}> 
                            {shelter.available ? 'Available' : 'Full'}
                        </span>
                    </div>
                    <p className="address">📍 {shelter.address}</p>
                    <div className="rating">
                        <span className="stars">⭐ {shelter.safetyRating}</span>
                        <span className="review-count">({shelter.reviewCount} reviews)</span>
                    </div>
                    <div className="amenities">
                        <h4>Amenities:</h4>
                        <ul>
                            {shelter.amenities.map((amenity, idx) => (
                                <li key={idx}>{amenity}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="contact-btn">Contact Shelter</button>
                </div>
            ))}
        </div>
    );
};

export default ShelterList;