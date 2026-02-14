# Modern Portfolio

This project has been modernized to use **React (Vite)** for the frontend and **Node.js (Express)** for the backend.

## Structure

- `client/`: React frontend application.
  - Built with Vite, Tailwind CSS, and Framer Motion.
  - Contains all visual components and animations.
- `server/`: Node.js backend server.
  - Built with Express.
  - Handles contact form submissions (simulated) and serves static assets.
- `legacy/`: Old HTML/CSS version (for reference).

## Getting Started

1.  **Install Dependencies**:
    Run the following command in the root directory to install dependencies for both client and server:
    ```bash
    npm run install-all
    ```
    (Note: This requires running `npm install` in the root directory first if not already done).
    Alternatively, manual installation:
    - Root: `npm install`
    - Client: `cd client && npm install`
    - Server: `cd server && npm install`

2.  **Run the Application**:
    To start both the developmental frontend server and the backend server concurrently:
    ```bash
    npm start
    ```
    - Client will be available at: `http://localhost:5173`
    - Server API will be available at: `http://localhost:5000`

## Features

- **Performance**: Powered by Vite for lightning-fast HMR and building.
- **Animations**: Advanced scroll animations using Framer Motion.
- **Design**: "Acid Green" and "Dark Mode" aesthetic using Tailwind CSS.
- **Backend**: Node.js server setup for handling API requests.
- **Seamless Experience**: Single Page Application structure for smooth navigation.

## Deployment

To deploy:
1.  Build the client: `cd client && npm run build`
2.  Start the server: `cd server && npm start`
    The server is configured to serve the built client files from `client/dist`.
