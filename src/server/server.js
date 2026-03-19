const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Load data from db.json
const dataFilePath = './db.json'; // Path to your JSON file
let data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

// GET endpoint to fetch all data
app.get('/api/posts', (req, res) => {
  res.json(data.posts);
});

// POST endpoint to add new data
app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = data.posts.length + 1; // Auto-increment ID
  data.posts.push(newPost);

  // Save the updated data back to the file
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  res.status(201).json(newPost);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});