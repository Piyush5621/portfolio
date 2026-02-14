const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.post('/api/contact', async (req, res) => {
    const { email, message } = req.body;

    // In a real app, send email using Nodemailer
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});

    console.log(`Received message from ${email}: ${message}`);

    // Simulate success
    setTimeout(() => {
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    }, 1000);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
