# Setup Documentation

## Prerequisites
- Node.js (version 14 or later)
- npm (Node package manager)
- MongoDB (for database management)
- Git (for version control)

## Project Structure
```
Find-a-safe-place-to-sleep/
├── backend/             # Backend source code
│   ├── config/         # Configuration files
│   ├── controllers/    # Controller logic
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── server.js       # Main server file
├── frontend/            # Frontend source code
│   ├── public/         # Public assets
│   └── src/           # React source files
│       ├── components/ # React components
│       └── App.js      # Main app file
└── docs/               # Documentation files
    └── SETUP.md        # Setup documentation
```

## Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/James007755/Find-a-safe-place-to-sleep.git
   cd Find-a-safe-place-to-sleep/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by creating a `.env` file in the `backend` directory:  
   ```
   MONGODB_URI=your_mongodb_uri
   PORT=your_port_number
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

## API Endpoints
- `GET /api/places` - Retrieve all safe places.
- `POST /api/places` - Create a new safe place.
- `GET /api/places/:id` - Retrieve a specific safe place by ID.
- `PUT /api/places/:id` - Update a specific safe place by ID.
- `DELETE /api/places/:id` - Delete a specific safe place by ID.

## Features
- User-friendly interface for finding safe sleeping locations.
- Add, update, and delete places.
- Filter results based on user preferences.

## Troubleshooting Guide
- If the server does not start, check the console for errors and ensure the environment variables are correctly set.
- Common issues may arise from incorrect MongoDB URI or uninstalled dependencies.
- For frontend issues, clear the cache or reinstall node_modules if necessary.

### Contact
For further assistance, please reach out to the repository maintainer at James007755.