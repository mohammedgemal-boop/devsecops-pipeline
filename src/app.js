
const express = require("express");

const app = express();

app.use(express.json());

// Sample book data
const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin"
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt"
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke"
  }
];

// Endpoint 1: API health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "DevSecOps API is running"
  });
});

// Endpoint 2: Get all books
app.get("/api/books", (req, res) => {
  res.status(200).json({
    count: books.length,
    data: books
  });
});

// Export application for automated testing
module.exports = app;

// Start server when executed directly
if (require.main === module) {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
