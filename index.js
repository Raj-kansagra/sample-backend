const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple GET endpoint
app.get('/', (req, res) => {
    res.json({message: 'Hello Developers'});
  });
  
app.get('/test', (req, res) => {
  res.json({
    message: 'Hello from Express!',
    status: 'success'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});