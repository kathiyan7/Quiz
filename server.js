const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const uri = "mongodb+srv://kathiyan1472:dpPRruBV2MbxZFm9@cluster0.0dwwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// MongoDB connection
mongoose.connect(uri, {})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Mongoose Schema
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

// API Routes
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

        res.status(200).json({ message: 'User details saved successfully!' });
    } catch (err) {
        console.error('Error saving response:', err);
        res.status(500).json({ message: 'Error saving response', error: err });
    }
});

app.post('/submitQuiz', async (req, res) => {
    try {
        const { userDetails, score, answers } = req.body;

        // Check if the roll number already exists
        const updatedResponse = await QuizResponse.findOneAndUpdate(
            { "roll": userDetails.roll }, // Match based on roll number
            { 
                score,       // Update score
                answers      // Update answers
            },
            { new: true, upsert: true } // Return the updated document and create one if it doesn't exist
        );

        if (updatedResponse) {
            res.status(200).json({ message: 'Quiz response updated successfully!', updatedResponse });
        } else {
            res.status(400).json({ message: 'Failed to update quiz response.' });
        }
    } catch (err) {
        console.error('Error saving response:', err);
        res.status(500).json({ message: 'Error saving response', error: err });
    }
});


app.get('/responses', async (req, res) => {
    try {
        const responses = await QuizResponse.find();
        res.status(200).json(responses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching responses', error: err });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
