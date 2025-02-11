// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Initialize Express App
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serve static files from the "public" folder

// MongoDB Connection URI
// const uri = "mongodb+srv://kathiyan1472:dpPRruBV2MbxZFm9@cluster0.0dwwy.mongodb.net/quizApp?retryWrites=true&w=majority";
const uri = process.env.URI;

// Connect to MongoDB Atlas
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Mongoose Schema and Model
const quizResponseSchema = new mongoose.Schema({
    name: String,
    roll: String,
    dept: String,
    phone: String,
    score: Number,
    answers: {
        easy: String,
        medium: String,
        hard: String
    }
});

const QuizResponse = mongoose.model('QuizResponse', quizResponseSchema);

// Mock User Authentication Data (Replace with secure DB/authentication system)
const users = [
    { username: "admin", password: "1234" }
];

// Routes

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        res.status(200).send({ message: "Login successful" });
    } else {
        res.status(401).send({ message: "Invalid credentials" });
    }
});

// Submit Quiz Response
app.post('/submit', async (req, res) => {
    try {
        const { name, roll, dept, phone, score, answers } = req.body;

        // Check if the roll number already exists
        const existingResponse = await QuizResponse.findOne({ roll });
        if (existingResponse) {
            return res.status(400).json({ message: 'You have already attempted the quiz.' });
        }

        // Save the new response to the database
        const newResponse = new QuizResponse({ name, roll, dept, phone, score, answers });
        await newResponse.save();

        res.status(200).json({ message: 'Quiz response submitted successfully!' });
    } catch (err) {
        console.error('Error saving response:', err);
        res.status(500).json({ message: 'Error saving response', error: err });
    }
});

// Update Quiz Response
app.post('/submitQuiz', async (req, res) => {
    try {
        const { userDetails, score, answers } = req.body;

        // Find and update quiz response by roll number
        const updatedResponse = await QuizResponse.findOneAndUpdate(
            { roll: userDetails.roll }, // Match based on roll number
            { score, answers },         // Update score and answers
            { new: true, upsert: true } // Return updated document and create one if not found
        );

        if (updatedResponse) {
            res.status(200).json({ message: 'Quiz response updated successfully!', updatedResponse });
        } else {
            res.status(400).json({ message: 'Failed to update quiz response.' });
        }
    } catch (err) {
        console.error('Error updating response:', err);
        res.status(500).json({ message: 'Error updating response', error: err });
    }
});

// Get All Quiz Responses
app.get('/responses', async (req, res) => {
    try {
        const responses = await QuizResponse.find();
        res.status(200).json(responses); // Send all quiz responses as JSON
    } catch (err) {
        console.error('Error fetching responses:', err);
        res.status(500).json({ message: 'Error fetching responses', error: err });
    }
});

// Clear All Quiz Responses
app.delete('/clearResponses', async (req, res) => {
    try {
        await QuizResponse.deleteMany(); // Delete all quiz responses from the database
        res.status(200).send({ message: "All responses cleared successfully." });
    } catch (err) {
        console.error('Error clearing responses:', err);
        res.status(500).json({ message: 'Error clearing responses', error: err });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
