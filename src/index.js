// src/index.js

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB();

const app = express();

// Middleware (optional for now)
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// Start server only after DB is connected
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
