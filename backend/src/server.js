const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Sample shelter data
const shelters = [
    { id: 1, name: 'Hope House', location: { lat: 40.7128, lng: -74.0060 }, address: '123 Main St, New York', safetyRating: 4.8, amenities: ['beds', 'meals', 'bathrooms', 'wifi'], reviewCount: 45, available: true },
    { id: 2, name: 'Safe Haven', location: { lat: 40.7580, lng: -73.9855 }, address: '456 Park Ave, New York', safetyRating: 4.6, amenities: ['beds', 'meals', 'showers', 'laundry'], reviewCount: 32, available: true },
    { id: 3, name: 'Community Care', location: { lat: 40.7489, lng: -73.9680 }, address: '789 5th Ave, New York', safetyRating: 4.9, amenities: ['beds', 'meals', 'medical', 'counseling'], reviewCount: 58, available: false }
];

// GET all shelters
app.get('/api/shelters', (req, res) => {
    res.json({ success: true, data: shelters, count: shelters.length });
});

// GET shelter by ID
app.get('/api/shelters/:id', (req, res) => {
    const shelter = shelters.find(s => s.id === parseInt(req.params.id));
    if (!shelter) {
        return res.status(404).json({ success: false, message: 'Shelter not found' });
    }
    res.json({ success: true, data: shelter });
});

// GET shelters by location (radius search)
app.get('/api/shelters/search/nearby', (req, res) => {
    const { lat, lng, radius = 5 } = req.query;
    const nearby = shelters.filter(shelter => {
        const distance = Math.sqrt(
            Math.pow(shelter.location.lat - lat, 2) +
            Math.pow(shelter.location.lng - lng, 2)
        );
        return distance <= radius;
    });
    res.json({ success: true, data: nearby, count: nearby.length });
});

// POST new review
app.post('/api/reviews', (req, res) => {
    const { shelterId, rating, comment, userName } = req.body;
    if (!shelterId || !rating || !comment) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    const review = { id: Date.now(), shelterId, rating, comment, userName, createdAt: new Date() };
    res.status(201).json({ success: true, message: 'Review added successfully', data: review });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});