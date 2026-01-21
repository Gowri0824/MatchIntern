const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock Database (Since we want to avoid public APIs and maybe don't have MongoDB running yet)
const jobs = require('./data/jobs.json');

// --- Routes ---
app.get('/', (req, res) => {
    res.send('MatchIntern API is running...');
});

// Get All Jobs
app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

// Chatbot API (Custom logic can go here for "Effectiveness")
app.post('/api/chat', (req, res) => {
    const { message, role } = req.body;
    // We can add advanced NLP or DB lookups here later
    res.json({ reply: "This is a response from the backend server!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
