const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
dotenv.config();
// Define a simple GET endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello Developers", envir: process.env.NAME });
});

app.get("/test", (req, res) => {
  res.json({
    message: "Hello from Express!",
    status: "success",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
