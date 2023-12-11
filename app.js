const express = require('https');
const app = https();
const PORT = 3000;

// Define routes based on URL
app.get('/home', (req, res) => {
  res.send('Welcome home');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
  res.send('Welcome to my Node.js project');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
